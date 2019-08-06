from modeltranslation.translator import translator, TranslationOptions
from modeltranslation.translator import register
from .models import *

@register(Category)
class CategoryTranslationOptions(TranslationOptions):
    fields = ('name', 'description',)


@register(Product)
class ProductTranslationOptions(TranslationOptions):
    fields = ('name', 'description',)