from django.contrib import admin

# Register your models here.
from .models import *

class CartAdmin(admin.ModelAdmin):
    list_display = ('order_code','fullname', 'location', 'shipto', 'email_sended', 'created_at',)
    list_display_links = ('order_code', 'fullname')


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
    list_display_links = ('number',)


class QuotationAdmin(admin.ModelAdmin):
    list_display = (
        'sector',
        'fullname',
        'email',
        'processing',
        'confirm',
        'processed',
        'updated_at',
        'created_at'
    )
    list_display_links = ('sector',)



admin.site.register(Cart, CartAdmin)
admin.site.register(Order, OrderAdmin)
admin.site.register(Quotation, QuotationAdmin)