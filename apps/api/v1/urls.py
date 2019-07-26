from django.urls import path, re_path, include


from rest_framework import routers

from .views import *

router = routers.DefaultRouter()


router.register(r'cat', CategoryViewset)

urlpatterns = [
    path('', include(router.urls)),

]
