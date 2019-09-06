from django.contrib import admin

# Register your models here.
from .models import *

class CartAdmin(admin.ModelAdmin):
    list_display = ('proforma','fullname', 'location', 'shipto', 'email_sended', 'processing', 'payed', 'delivered', 'created_at',)
    list_display_links = ('proforma', 'fullname')


class OrderAdmin(admin.ModelAdmin):
    list_display = ('number',
                    'processing',
                    'request',
                    'confirm',
                    'payed',
                    'transit',
                    'transit_code',
                    'delivered'
                    )
    list_display_links = ('number')

admin.site.register(Cart, CartAdmin)
admin.site.register(Order, OrderAdmin)