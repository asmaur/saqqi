from django.contrib import admin
#from parler.admin import TranslatableAdmin, TranslatableStackedInline, TranslatableTabularInline
# Register your models here.
from modeltranslation.admin import TranslationAdmin, TabbedTranslationAdmin


from .models import *



class CategoryAdmin(TabbedTranslationAdmin):
    pass

class ProductAdmin(TabbedTranslationAdmin):
    pass


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