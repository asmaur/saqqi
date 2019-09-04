from django.contrib import admin

# Register your models here.
from .models import *

class CartAdmin(admin.ModelAdmin):
    list_display = ('proforma','fullname', 'location', 'shipto', 'email_sended', 'processing', 'payed', 'delivered', 'created_at',)
    list_display_links = ('proforma', 'fullname')


class ItemAdmin(admin.ModelAdmin):
    list_display = ('code', 'cart_code', 'name', 'quantity', 'price', 'total', 'created_at')

admin.site.register(Cart, CartAdmin)
admin.site.register(Item, ItemAdmin)