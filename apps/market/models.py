from django.db import models
from django.db.models.signals import pre_save, post_save
from django.utils.text import slugify
from django.dispatch import receiver
import uuid
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFit
from parler.models import TranslatableModel, TranslatedFields
# Create your models here.

# Create your models here.
def change_name(filename):
    ext = filename.split('.')[-1]
    filename = "{0}.{1}".format(uuid.uuid4().hex, ext)
    return filename

def path_product(instance, filename):
# file will be uploaded to MEDIA_ROOT/company_<name>/

    return 'WANUCLOUD/products/{0}/{1}'.format(instance.code, change_name(filename))

def generate_uid():
    return str(uuid.uuid4().fields[-1])[:10]


class Category(TranslatableModel):
    code = models.CharField(max_length=255, unique=True, blank=True)
    translations = TranslatedFields(
        name = models.CharField(max_length=50),
        description = models.TextField(blank=True)
    )
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



class Product(TranslatableModel):
    code = models.CharField(max_length=255, unique=True, blank=True)
    translations = TranslatedFields(
        name = models.CharField(max_length=255,),
        description = models.TextField(blank=True)
    )
    slug = models.SlugField(max_length=255, blank=True)
    #brand = models.CharField(max_length=50)
    #sku = models.CharField(max_length=50)
    site_url = models.URLField(blank=True, null=True)
    site_price = models.DecimalField(max_digits=9, decimal_places=2, blank=True, null=True)
    price = models.DecimalField(max_digits=9, decimal_places=2,)
    old_price = models.DecimalField(max_digits=9, decimal_places=2, blank=True, default=0.00)
    is_active = models.BooleanField(default=True)
    is_bestseller = models.BooleanField(default=False)
    is_featured = models.BooleanField(default=False)
    mini_quantity = models.IntegerField(default=1000)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    categories = models.ManyToManyField(Category, related_name='products')
    capa = ProcessedImageField(upload_to=path_product, processors=[ResizeToFit(1600, 900),], format='JPEG', options={'quality': 75}, blank=True)

    class Meta:
        verbose_name = 'Product'
        ordering = ['-created_at']
        verbose_name_plural = 'Products'

    def __str__(self):
        return self.name


class Image(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='images')
    image_erociti = ProcessedImageField(upload_to=path_product, processors=[ResizeToFit(1600, 900),], format='JPEG', options={'quality': 75}, blank=True)
    is_public = models.BooleanField(default=True)
    created_at = models.DateTimeField('date added', auto_now=True)

    class Meta:
        ordering = ['-created_at']
        get_latest_by = 'created_at'
        verbose_name = "Image"
        verbose_name_plural = "Images"

    def __str__(self):
        return "Image de: {0}".format(self.product.name)





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
        prod.code = generate_uid()

    if not prod.slug:
        prod.slug = slugify(prod.name)