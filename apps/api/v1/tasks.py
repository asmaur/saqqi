from celery import shared_task
from django.core.mail import EmailMultiAlternatives
from django.template.loader import get_template
from django.conf import settings
import requests, json
from ...news.models import *

@shared_task()
def reverse(value):
    return value[::-1]

@shared_task(bind=True,) #autoretry_for=(Exception,), retry_kwargs={'max_retries': 5, 'countdown': 10}) #bind=True, max_retries=5)
def send_email_customer(self, **kwargs):
    base_url = 'http://localhost:8000/media/'
    try:
        #print(kwargs)
        to=kwargs.get('email')
        template = get_template('mail/mail.html')
        plaintext = get_template('mail/mail.txt')
        link=kwargs.get('link')
        from_email = settings.EMAIL_HOST_USER  #NOREPLY_FROM_EMAIL
        data = {'email': kwargs.get('email'), 'link':f'{base_url}{link}', 'reference':kwargs.get('reference'), 'first_name':kwargs.get('first_name'), 'last_name':kwargs.get('last_name')}
        text_content = plaintext.render(data)
        html_content = template.render(data)
        msg = EmailMultiAlternatives("Your Order Proforma", text_content, from_email=from_email, to=[to,])
        msg.attach_alternative(html_content, "text/html")
        msg.send()
    except Exception as ex:
        #print(ex)
        #dt = datetime.datetime.now(pytz.utc) + datetime.timedelta(seconds=1)
        self.retry(exc=ex, max_retries=5, countdown=30)

@shared_task(bind=True)
def add_to_mailchimp(self, email=None):
    api_url = f'https://{settings.MAILCHIMP_DATA_CENTER}.api.mailchimp.com/3.0'
    members_url = f'{api_url}/lists/{settings.MAILCHIMP_LIST_ID}/members'
    try:
        news = NewsLetters.objects.get(email=email)
        return None
    except Exception as ex:
        print(ex)
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
            return req.status_code, req.json()
        except Exception as ex:
            print(ex)
            self.retry(exc=ex, max_retries=5, countdown=20)
