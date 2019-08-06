from rest_framework import serializers
from django.shortcuts import get_object_or_404
#from parler_rest.serializers import TranslatableModelSerializer, TranslatedFieldsField

from ...market.models import *
from ...basket.models import *



class CategorySerializer(serializers.ModelSerializer):
    #translations = TranslatedFieldsField()
    class Meta:
        model = Category
        #fields = '__all__'
        exclude = ['created_at', 'updated_at',]

class CategoryEnSerializer(serializers.ModelSerializer):
    #translations = TranslatedFieldsField()
    class Meta:
        model = Category
        #fields = '__all__'
        exclude = ['created_at', 'updated_at','name','name_fr','name_pt_br', "description", "description_fr", "description_pt_br"]

class CategoryFrSerializer(serializers.ModelSerializer):
    #translations = TranslatedFieldsField()
    class Meta:
        model = Category
        #fields = '__all__'
        exclude = ['created_at', 'updated_at', 'name', 'name_en','name_pt_br', "description", "description_en", "description_pt_br"]

class CategoryBrSerializer(serializers.ModelSerializer):
    #translations = TranslatedFieldsField()
    class Meta:
        model = Category
        #fields = '__all__'
        exclude = ['created_at', 'updated_at', 'name','name_fr','name_en', "description", "description_en", "description_fr",]


class ProductSerializer(serializers.ModelSerializer):
    #translations = TranslatedFieldsField()
    class Meta:
        model = Product
        #fields = '__all__'
        exclude = ['created_at', 'updated_at', 'categories', 'site_url', 'site_price', "description", "description_fr", "description_pt_br", "description_en", ]

class ProductDetailSerializer(serializers.ModelSerializer):
    categories = CategorySerializer(many=True)
    class Meta:
        model = Product
        #fields = '__all__'
        exclude = ['created_at', 'updated_at',]

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        exclude =['created_at']

class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields =['code', 'proforma']