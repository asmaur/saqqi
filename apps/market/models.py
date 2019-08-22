from django.db import models
from django.db.models.signals import pre_save, post_save
from django.utils.text import slugify
from django.dispatch import receiver
import uuid
from decimal import Decimal
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFit
from django.core.validators import MinValueValidator
# Create your models here.

# Create your models here.
def change_name(filename):
    ext = filename.split('.')[-1]
    filename = "{0}.{1}".format(uuid.uuid4().hex, ext)
    return filename

def path_product(instance, filename):
# file will be uploaded to MEDIA_ROOT/company_<name>/

    return 'WANUCLOUD/products/{0}/{1}'.format(instance.code, change_name(filename))

def image_path_product(instance, filename):
# file will be uploaded to MEDIA_ROOT/company_<name>/shop_<name>/
    parent_path = instance.product._meta.get_field('capa').upload_to(instance.product, '')
    print(parent_path)
    return 'WANUCLOUD/{0}/images/{1}'.format(instance.product.code, change_name(filename))


def generate_uid():
    return str(uuid.uuid4().fields[-1])[:10]

def generate_puid():
    return str(uuid.uuid4().fields[-1])[:5]


class Category(models.Model):
    code = models.CharField(max_length=255, unique=True, blank=True)
    name = models.CharField(max_length=255, blank=True)
    description = models.TextField(blank=True)
    #translations = TranslatedFields(
    #    name = models.CharField(max_length=50),
    #    description = models.TextField(blank=True)
    #)
    slug = models.SlugField(max_length=50, unique=True, blank=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    def __str__(self):
        return self.name



class Product(models.Model):
    code = models.CharField(max_length=255, unique=True, blank=True)
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    #translations = TranslatedFields(
    #    name = models.CharField(max_length=255,),
    #    description = models.TextField(blank=True)
    #)
    slug = models.SlugField(max_length=255, blank=True)
    #brand = models.CharField(max_length=50)
    #sku = models.CharField(max_length=50)
    site_url = models.URLField(blank=True, null=True)
    site_price = models.DecimalField(max_digits=9, decimal_places=2, validators=[MinValueValidator(Decimal('0.01'))], blank=True, null=True)
    price = models.DecimalField(max_digits=9, decimal_places=2, validators=[MinValueValidator(Decimal('0.01'))])
    old_price = models.DecimalField(max_digits=9, decimal_places=2, blank=True, default=0.00, validators=[MinValueValidator(Decimal('0.01'))])
    is_active = models.BooleanField(default=True)
    is_bestseller = models.BooleanField(default=False)
    is_featured = models.BooleanField(default=False)
    mini_quantity = models.IntegerField(default=1000)
    width = models.DecimalField((u'largura'), decimal_places=2, max_digits=12, default=0.00,  validators=[MinValueValidator(Decimal('0.01'))])
    heigth = models.DecimalField((u'altura'), decimal_places=2, max_digits=12, default=0.00,  validators=[MinValueValidator(Decimal('0.01'))])
    lateral = models.DecimalField((u'lateral'), decimal_places=2, max_digits=12, default=0.00,
                                  validators=[MinValueValidator(Decimal('0.01'))])
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    categories = models.ManyToManyField(Category, related_name='products')
    capa = ProcessedImageField(upload_to=path_product, processors=[ResizeToFit(720, 405),], format='JPEG', options={'quality': 60}, blank=True)

    class Meta:
        verbose_name = 'Product'
        ordering = ['-created_at']
        verbose_name_plural = 'Products'

    def __str__(self):
        return "REF {0}".format(self.code)


class Image(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='images')
    image_saqqi = ProcessedImageField(upload_to=image_path_product, processors=[ResizeToFit(720, 405),], format='JPEG', options={'quality': 60}, blank=True)
    is_public = models.BooleanField(default=True)
    created_at = models.DateTimeField('date added', auto_now=True)

    class Meta:
        ordering = ['-created_at']
        get_latest_by = 'created_at'
        verbose_name = "Image"
        verbose_name_plural = "Images"

    def __str__(self):
        return "Image de: {0}".format(self.product.code)





@receiver(pre_save, sender=Category)
def category_pre_save(sender, **kwargs):
    cat = kwargs.get('instance')

    if not cat.code:
        cat.code = generate_uid()

    if not cat.slug:
        cat.slug = slugify(cat.name)


@receiver(pre_save, sender=Product)
def product_pre_save(sender, **kwargs):
    prod = kwargs.get('instance')

    if not prod.code:
        prod.code = generate_puid()

    if not prod.slug:
        prod.slug = slugify(prod.name)