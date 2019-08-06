from django.shortcuts import render, HttpResponse, get_object_or_404
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import action, permission_classes, authentication_classes
from rest_framework import permissions
from rest_framework.authentication import TokenAuthentication
from django.template import Context
from django.template.loader import render_to_string, get_template
from django.core.mail import EmailMessage, EmailMultiAlternatives
import xhtml2pdf
# Create your views here.

from ...market.models import *
from ...basket.models import *
from .serializers import *




def index(request):
    return HttpResponse("For Restrited People. If you Dont have authorization, do not enter here!")

class CategoryViewset(viewsets.ViewSet):
    queryset = Category.objects.all()
    #serializer_class = CategorySerializer

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

    def list(self, request):
        serializer = ImageSerializer(self.queryset, many=True, context={'request': request})
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        imgs = Image.objects.all().filter(product__code=pk)
        serializer = ImageSerializer(imgs, many=True,  context={'request': request})
        return Response(serializer.data)


class CartViewset(viewsets.ViewSet):
    queryset = Cart.objects.all()
