from django.conf import settings
from django_hosts import patterns, host
from django.shortcuts import HttpResponseRedirect

def fn(request):
    if 'admin' in request.path:
        request.META['HTTP_HOST'] = "admin.trexengenharia.com.br:8000"
        return HttpResponseRedirect('/admin')

host_patterns =patterns(
    '',

        host(r'www', 'saqqi.hostsconf.frontend_urls', name='www'),
        host(r'admin', 'saqqi.hostsconf.admin_urls', callback=fn, name='admin'),
        host(r'api', 'saqqi.hostsconf.api_urls', name='api'),
)