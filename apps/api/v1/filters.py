from django.template import Library
from django.contrib.humanize.templatetags.humanize import intcomma

register = Library.filter()

@register(name="zering")
def zering(value, arg):
    """Removes all values of arg from the given string"""
    return value.replace(arg, '')

@register.filter
def my_float_format(number, decimal_places=2, decimal=','):
    result = intcomma(number)
    result += decimal if decimal not in result else ''
    while len(result.split(decimal)[1]) != decimal_places:
        result += '0'
    return result