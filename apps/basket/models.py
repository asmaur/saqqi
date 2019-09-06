from django.db import models

# Create your models here.
from ..market.models import *


def path_cart():
    #file will be uploaded to MEDIA_ROOT/company_<name>/
    return 'WANUCLOUD/carts/' #.format(instance.code)

def generate_uid():
    return str(uuid.uuid4().fields[-1])[:18]



class Cart(models.Model):
    code = models.CharField(max_length=255, blank=True, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    proforma = models.FileField(upload_to='WANUCLOUD/carts/', blank=True)
    email_sended = models.BooleanField(default=False)
    email = models.EmailField(blank=True, null=True)
    buyer_firstname = models.CharField(max_length=200, blank=True)
    buyer_lastname = models.CharField(max_length=200, blank=True)
    buyer_phone = models.CharField(max_length=200, blank=True)
    company_name = models.CharField(max_length=200, blank=True)
    buyer_city = models.CharField(max_length=200, blank=True)
    buyer_country = models.CharField(max_length=200, blank=True)
    order_code = models.CharField(max_length=200, blank=True)
    port_name = models.CharField(max_length=200, blank=True)
    port_code = models.CharField(max_length=200, blank=True)
    port_city = models.CharField(max_length=200, blank=True)


    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.code

    def fullname(self):
        return f'{self.buyer_firstname} {self.buyer_lastname}, {self.company_name}'

    def location(self):
        return f'{self.buyer_city}, {self.buyer_country}'

    def shipto(self):
        return f'{self.port_name}, {self.port_code}'



class Order(models.Model):
    number = models.CharField(max_length=100)
    order_file = models.FileField(upload_to='WANUCLOUD/orders/')
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    processing = models.BooleanField( help_text="Order received from client", default=False)
    request = models.BooleanField(help_text="Request send to manufacters", default=False)
    confirm = models.BooleanField(help_text="Request confirmed and packed", default=False)
    payed = models.BooleanField( help_text="transactions confirmed by bank" ,default=False)
    transit = models.BooleanField(help_text="request in transit", default=False)
    transit_code = models.CharField(help_text="codigo do transito", blank=True)
    delivered = models.BooleanField( help_text="Deliverance made and confirmed buy client", default=False)

    class Meta:
        ordering = ['created_at', 'updated_at']

    def __str__(self):
        return self.number




"""
class Item(models.Model):
    code = models.CharField(max_length=255, blank=True)
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    quantity = models.IntegerField(default=1000)
    product = models.ForeignKey(Product, null=True, on_delete=models.SET_NULL)

    class Meta:
        ordering = ['created_at']

    def total(self):
        return self.quantity * self.product.price

    def cart_code(self):
        return self.cart.code

    def name(self):
        return self.product.name

    def code(self):
        return self.product.code

    def price(self):
        return self.product.price

    def __str__(self):
        return self.cart.code
"""