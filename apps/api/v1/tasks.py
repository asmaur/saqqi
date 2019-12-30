
from django.core.mail import EmailMultiAlternatives, EmailMessage
from django.template.loader import get_template
from django.conf import settings
from celery import task, shared_task
import requests, json
from ...news.models import *
from ...basket.models import *



@task(bind=True)
def noty_new_order(self, **kwargs):
    try:
        to = settings.NEW_ORDER_FROM_EMAIL
        template = get_template('mail/order.html')
        plaintext = get_template('mail/order.txt')
        from_email = settings.NOREPLY_FROM_EMAIL
        data = {'link': kwargs.get('link'), 'code': kwargs.get('code'),
                'reference': kwargs.get('reference'),
                }
        text_content = plaintext.render(data)
        html_content = template.render(data)
        msg = EmailMultiAlternatives("NEW ORDER", text_content, from_email=from_email, to=[to, ])
        msg.attach_alternative(html_content, "text/html")
        msg.send()
        return "NOTY NEW ORDER"
    except Exception as ex:
        print(ex)
        self.retry(exc=ex, max_retries=5, countdown=30)



@task(bind=True)
def send_email_customer(self, **kwargs):

    try:
        #print(kwargs)
        to=kwargs.get('email')
        template = get_template('mail/mail.html')
        plaintext = get_template('mail/mail.txt')
        link=kwargs.get('link')
        from_email = settings.ORDER_FROM_EMAIL
        data = {'email': kwargs.get('email'), 'link':f'{settings.PROFORMA_URL}{link}', 'reference':kwargs.get('reference'), 'first_name':kwargs.get('first_name'), 'last_name':kwargs.get('last_name')}
        text_content = plaintext.render(data)
        html_content = template.render(data)
        msg = EmailMultiAlternatives("Your Order Proforma", text_content, from_email=from_email, to=[to,])
        msg.attach_alternative(html_content, "text/html")
        msg.send()

        cart = Cart.objects.get(code=kwargs.get('code'))

        cart.email_sended = True
        cart.save()

        noty_new_order.delay(reference=kwargs.get('reference'), code=kwargs.get('code'), link=f'{settings.PROFORMA_URL}{link}')
        return "NEW ORDER"

    except Exception as ex:
        print(ex)
        #dt = datetime.datetime.now(pytz.utc) + datetime.timedelta(seconds=1)
        self.retry(exc=ex, max_retries=5, countdown=30)


@task(bind=True)
def add_to_mailchimp(self, email=None):
    api_url = f'https://{settings.MAILCHIMP_DATA_CENTER}.api.mailchimp.com/3.0'
    members_url = f'{api_url}/lists/{settings.MAILCHIMP_LIST_ID}/members'
    try:
        news = NewsLetters.objects.get(email=email)
        return None
    except Exception as ex:
        #print(ex)
        news = None

    if news is None:
        try:
            data = {
                "email_address": email,
                "status": "subscribed"
            }
            req = requests.post(
                members_url,
                auth=("", settings.MAILCHIMP_API_KEY),
                data=json.dumps(data)
            )
            NewsLetters.objects.create(email=email)
            return req.status_code
        except Exception as ex:
            #print(ex)
            self.retry(exc=ex, max_retries=5, countdown=20)

@task(bind=True)
def notify_quote(self, pk=None):
    try:
        quote = Quotation.objects.get(id=pk)
        template = get_template('mail/quote.txt')
        print(quote.loifile)
        LOI_URL= f'{settings.PROFORMA_URL}{quote.loifile}'
        data={'LOI_URL': LOI_URL, 'sector': quote.sector, 'fullname': quote.fullname}
        content = template.render(data)
        to=settings.NEW_ORDER_FROM_EMAIL
        from_mail = settings.NEW_ORDER_FROM_EMAIL
        msg = EmailMultiAlternatives("New Quote Request", content, from_email=from_mail, to=[to, ])
        msg.send()
        return None
    except Exception as ex:
        print(ex)
        self.retry(exc=ex, max_retries=5, countdown=20)


@task(bind=True)
def notify_supplier(self, pk=None):
    try:
        supplier = Supplier.objects.get(id=pk)
        template = get_template('mail/supplier.txt')
        data={'empresa': supplier.empresa, 'fullname': supplier.fullname, 'cnpj': supplier.cnpj, 'email': supplier.email, 'telefone': supplier.telefone, 'produto': supplier.produto, 'estado': supplier.estado, 'cidade': supplier.cidade}
        content = template.render(data)
        to=settings.NEW_ORDER_FROM_EMAIL
        from_mail = settings.NEW_ORDER_FROM_EMAIL
        msg = EmailMultiAlternatives("New Supplier", content, from_email=from_mail, to=[to, ])
        msg.send()
        return None
    except Exception as ex:
        print(ex)
        self.retry(exc=ex, max_retries=5, countdown=20)