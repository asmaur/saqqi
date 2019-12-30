from django.urls import path, re_path, include


from rest_framework import routers

from .views import *

router = routers.DefaultRouter()


router.register(r'categories', CategoryViewset)
router.register(r'products', ProductViewset)
router.register(r'img', ImageViewset)
router.register(r'cart', CartViewset)
router.register(r's', SubscriberViewset)
router.register(r'quote', QuotationViewset)
router.register(r'supplier', SupplierViewset)

urlpatterns = [
    path('', include(router.urls)),

]
