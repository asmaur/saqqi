from django.contrib import admin
#from parler.admin import TranslatableAdmin, TranslatableStackedInline, TranslatableTabularInline
# Register your models here.
from modeltranslation.admin import TranslationAdmin, TabbedTranslationAdmin


from .models import *



class CategoryAdmin(TabbedTranslationAdmin):
    list_display = ("__str__", "is_active", "created_at")
    search_fields = ["name", "code"]
    pass


class ImageInline(admin.StackedInline):
    model = Image
    extra = 1

class ProductAdmin(TabbedTranslationAdmin):
    list_display = ('__str__', 'is_active', 'created_at')
    inlines = [ImageInline]
    def save_model(self, request, obj, form, change):
        obj.save()

        for afile in request.FILES.getlist('image_multiple'):
            obj.image.create(image_saqqi=afile)










admin.site.register(Category, CategoryAdmin)
admin.site.register(Product, ProductAdmin)
admin.site.register(Image)

"""

class ProductAdmin(TranslatableAdmin):
    # sets values for how the admin site lists your products
    list_display = ('name', 'price', 'old_price', 'created_at', 'updated_at',)
    list_display_links = ('name',)
    list_per_page = 50
    ordering = ['-created_at']
    search_fields = ['name', 'description',]
    exclude = ('created_at', 'updated_at',)
    # sets up slug to be generated from product name



class CategoryAdmin(TranslatableAdmin):
    #sets up values for how admin site lists categories
    list_display = ('name', 'created_at', 'updated_at',)
    list_display_links = ('name',)
    list_per_page = 20
    ordering = ['created_at']
    search_fields = ['name', 'description', ]
    exclude = ('created_at', 'updated_at',)
    fieldsets = (
        (None, {
            'fields': ('name', 'slug',),
        }),
        ("Description", {
            'fields': ('description',),
        })
    )
    # sets up slug to be generated from category name



admin.site.register(Category, CategoryAdmin)
admin.site.register(Product, ProductAdmin)


"""