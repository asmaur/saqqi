from django.urls import path, re_path, include
from django.views.generic import TemplateView

urlpatterns = [
    path("", TemplateView.as_view(template_name="application.html"), name="app", ),
    re_path('^.*$', TemplateView.as_view(template_name="application.html"), name="app", ),

]