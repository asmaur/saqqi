from django.shortcuts import render, HttpResponse
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
    serializer_class = CategorySerializer

    def list(self, request):
        serializer = CategorySerializer(self.queryset, many=True)
        return Response(serializer.data)