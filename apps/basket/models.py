from django.db import models

# Create your models here.
from ..market.models import *


def path_cart(instance, ):
    #file will be uploaded to MEDIA_ROOT/company_<name>/
    return 'WANUCLOUD/carts/{0}'.format(instance.code)

def generate_uid():
    return str(uuid.uuid4().fields[-1])[:18]



class Cart(models.Model):
    code = models.CharField(max_length=255, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    proforma = models.FileField(upload_to=path_cart, blank=True)
    processing = models.BooleanField(default=False)
    payed = models.BooleanField(default=False)
    delivered = models.BooleanField(default=False)

    def __str__(self):
        return self.code



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
        return self.code