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
    processing = models.BooleanField(default=False)
    payed = models.BooleanField(default=False)
    delivered = models.BooleanField(default=False)
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





class Item(models.Model):
    #code = models.CharField(max_length=255, blank=True)
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