from django.shortcuts import render, HttpResponse, get_object_or_404
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action, permission_classes, authentication_classes
from rest_framework import permissions
from rest_framework.authentication import TokenAuthentication
from django.template import Context
from django.template.loader import render_to_string, get_template
from django.core.mail import EmailMessage, EmailMultiAlternatives
from xhtml2pdf import pisa
from io import BytesIO
from weasyprint import HTML, CSS
from  django.conf import settings
from django.utils import timezone
import json, uuid
from django.core.files import File
from django.core.files.storage import FileSystemStorage
# Create your views here.

from ...market.models import *
from ...basket.models import *
from .serializers import *
from .tasks import *



def index(request):
    return HttpResponse("For Restrited People. If you Dont have authorization, do not enter here!")

class CategoryViewset(viewsets.ViewSet):
    queryset = Category.objects.all()
    #serializer_class = CategorySerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.IsAuthenticated,)

    def list(self, request):
        serializer = CategorySerializer(self.queryset, many=True)
        return Response(serializer.data)

    @action(methods=['GET'], detail=False)
    def en(self, request):
        serializer = CategoryEnSerializer(self.queryset, many=True)
        return Response(serializer.data)

    @action(methods=['GET'], detail=False)
    def fr(self, request):
        serializer = CategoryFrSerializer(self.queryset, many=True)
        return Response(serializer.data)

    @action(methods=['GET'], detail=False)
    def br(self, request):
        serializer = CategoryBrSerializer(self.queryset, many=True)
        return Response(serializer.data)
    
class ProductViewset(viewsets.ViewSet):
    queryset = Product.objects.all()
    #serializer_class = CategorySerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.IsAuthenticated,)

    def list(self, request):
        serializer = ProductSerializer(self.queryset, many=True, context={'request': request})
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        prod = get_object_or_404(Product, code=pk)
        serializer = ProductDetailSerializer(prod,   context={'request': request})
        return Response(serializer.data)

    @action(methods=["GET"], detail=False)
    def featured(self, request):
        prods = Product.objects.filter(is_featured=True)
        serializer = ProductSerializer(prods, many=True, context={'request': request})
        return Response(serializer.data, status.HTTP_200_OK)

    @action(detail=False, methods=["GET"], url_path='categories/(?P<slug>[-\w]+)')
    def categories(self, request, slug=None):
        print(slug)
        prods = Product.objects.all().filter(categories__slug=slug).distinct()
        serializer = ProductSerializer(prods, many=True, context={'request': request})
        return Response(serializer.data)



class ImageViewset(viewsets.ViewSet):
    queryset = Image.objects.all()
    #serializer_class = CategorySerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.IsAuthenticated,)

    def list(self, request):
        serializer = ImageSerializer(self.queryset, many=True, context={'request': request})
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        imgs = Image.objects.all().filter(product__code=pk)
        serializer = ImageSerializer(imgs, many=True,  context={'request': request})
        return Response(serializer.data)


class CartViewset(viewsets.ViewSet):
    queryset = Cart.objects.all()

    authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.IsAuthenticated,)

    def list(self, request):
        serializer = CartSerializer(self.queryset, many=True, context={'request': request})
        return Response(serializer.data)

    @staticmethod
    def render_to_pdf(data, code):
        try:
            filename = "proforma_{0}.pdf".format(code)

            html_string = render_to_string("api/proforma.html",
                                           {"data": data})  # {"date": timezone.now(), "datus": datas, "items":items})
            pdf_file = HTML(string=html_string).write_pdf(stylesheets=[CSS(settings.PROFORMA_CSS)],
                                                          target=f'/tmp/{filename}')
            return filename
        except Exception as ex:
            #print(ex)
            return None

    @staticmethod
    def go_tasks(data, code):
        try:
            cart = Cart.objects.get(code=code)

            add_to_mailchimp.delay(email=data["email"])
            #print(cart.proforma)
            send_email_customer.delay(email=data["email"], link=str(cart.proforma), reference=data['reference'],
                                      first_name=data['first_name'], last_name=data['last_name'])
            return None
        except Exception as ex:
            print(ex)
            return None

    @action(methods=["POST"], detail=False, url_name='pdf', url_path='pdf')
    def generatePDF(self, request):
        #template = get_template("api/proforma.html")
        try:
            datas = json.loads(request.data['datus'])
            data = Context({"date": timezone.now(), "datus": datas,})
            code = uuid.uuid4()
            filename = self.render_to_pdf(data, code)

            if filename:
                cart = Cart.objects.create(code=code,)
                fs = FileSystemStorage('/tmp')
                with fs.open(filename) as pdf:
                    #cart = Cart.objects.create(code=code, proforma=pdf)
                    cart.proforma.save(filename, File(pdf))
                cart.save()
                #print("OK")
                self.go_tasks(datas, code)

                return Response({"code": code},status.HTTP_200_OK)
            else:
                #print("NONe")
                return Response(status.HTTP_400_BAD_REQUEST)
        except Exception as ex:
            #print(ex)
            return Response(status.HTTP_400_BAD_REQUEST)


    def retrieve(self, request, pk=None):
        try:
            cart = Cart.objects.get(code=pk)
            serializer = CartSerializer(cart, context={'request': request})

            return Response(serializer.data, status.HTTP_200_OK)

        except Exception as ex:
            #print(ex)
            return Response(status.HTTP_400_BAD_REQUEST)

class SubscriberViewset(viewsets.ViewSet):
    queryset = NewsLetters.objects.all()

    authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.IsAuthenticated,)

    def list(self, request):
        subcribers = NewsLetters.objects.all()
        serializer = SubscriberSerializer(subcribers, many=True)

        return Response(serializer.data, status.HTTP_200_OK)

    @action(methods=["POST"], detail=False)
    def add_subscriber(self, request):
        try:
            data = request.data
            add_to_mailchimp.delay(email=data["email"])
            return Response(status.HTTP_200_OK)
        except Exception as ex:
            return Response(status.HTTP_400_BAD_REQUEST)
