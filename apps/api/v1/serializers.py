from rest_framework import serializers
from django.shortcuts import get_object_or_404
from parler_rest.serializers import TranslatableModelSerializer, TranslatedFieldsField

from ...market.models import *
from ...basket.models import *



class CategorySerializer(TranslatableModelSerializer):
    translations = TranslatedFieldsField()
    class Meta:
        model = Category
        #fields = '__all__'
        exclude = ['created_at', 'updated_at',]
