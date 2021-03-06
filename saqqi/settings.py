"""
Django settings for saqqi project.

Generated by 'django-admin startproject' using Django 2.2.

For more information on this file, see
https://docs.djangoproject.com/en/2.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/2.2/ref/settings/
"""

import os
from decouple import config, Csv
from django.utils.translation import ugettext_lazy as _
from kombu import Queue

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = config('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = config('DEBUG', cast=bool)
DEPLOY = config('DEPLOY', cast=bool)

ALLOWED_HOSTS = config('ALLOWED_HOSTS', cast=Csv())


# Application definition

INSTALLED_APPS = [

    'modeltranslation',

    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

LOCAL_APPS = ['apps.api', 'apps.market', 'apps.basket', 'apps.news']

THIRD_PARTY_APPS = [ 'rest_framework', 'rest_framework.authtoken', 'imagekit', 'corsheaders', 'webpack_loader', 'django_hosts', 'django_cleanup.apps.CleanupConfig', ]

INSTALLED_APPS = INSTALLED_APPS + THIRD_PARTY_APPS + LOCAL_APPS

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.TokenAuthentication',  # <-- And here
        #'rest_framework.permissions.IsAuthenticated',
    ],
}


MIDDLEWARE = [

    'django_hosts.middleware.HostsRequestMiddleware',

    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',


    'corsheaders.middleware.CorsMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',

    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',

    'django_hosts.middleware.HostsResponseMiddleware',
]

ROOT_URLCONF = 'saqqi.urls'
ROOT_HOSTCONF = 'saqqi.hosts'
DEFAULT_HOST = 'www'

if DEPLOY:
    PARENT_HOST = 'https://saqqi.com'
    MEDIA_URL_PATCH = "https://api.saqqi.com/media/"
    CELERY_BROKER_URL = 'amqp://localhost'
    PROFORMA_URL = "https://api.saqqi.com/media/"

else:
    PARENT_HOST = 'saqqi.com:8000'
    MEDIA_URL_PATCH = "http://api.saqqi.com:8000/media/"
    CELERY_BROKER_URL = 'amqp://localhost'
    PROFORMA_URL = "http://api.saqqi.com:8000/media/"





TEMPLATES_DIR = os.path.join(BASE_DIR, 'templates')
FRONTEND_DIR = os.path.join(BASE_DIR, 'frontend')


TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [TEMPLATES_DIR, os.path.join(BASE_DIR, 'dist'),],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'saqqi.wsgi.application'


# Database
# https://docs.djangoproject.com/en/2.2/ref/settings/#databases

DEPLOY = config('DEPLOY', cast=bool)

if DEPLOY:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': os.path.join(BASE_DIR, 'db_SAQQIDB_db.sqlite3'),
        }
    }
else:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
        }
    }


# Password validation
# https://docs.djangoproject.com/en/2.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/2.2/topics/i18n/

LANGUAGE_CODE = 'en'


LANGUAGES = (
    ('en', 'English'),
    ('fr', 'Français'),
    ('pt-br', 'Português Brasil'),
)
MODELTRANSLATION_DEFAULT_LANGUAGE = 'en'
MODELTRANSLATION_FALLBACK_LANGUAGES = ('en', 'fr')

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.2/howto/static-files/

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

STATIC_ROOT = os.path.join(BASE_DIR, 'static')
STATIC_URL = '/static/'

STATICFILES_DIRS = (
    os.path.join(BASE_DIR, 'saqqi', 'static'),
    os.path.join(BASE_DIR, 'frontend', 'dist'),
)
PROFORMA_CSS = os.path.join(BASE_DIR, 'static/css/proforma.css')


WEBPACK_LOADER = {
    'DEFAULT': {
        'CACHE': DEBUG,
        'BUNDLE_DIR_NAME': '/bundles/',  # must end with slash
        'STATS_FILE': os.path.join(FRONTEND_DIR, 'webpack-stats.json'),
    }
}


EMAIL_BACKEND = config('EMAIL_BACKEND', default='django.core.mail.backends.smtp.EmailBackend')
#EMAIL_FILE_PATH = PROJECT_DIR.parent.child('maildumps')
EMAIL_HOST = config('EMAIL_HOST')
EMAIL_PORT = config('EMAIL_PORT', cast=int)
EMAIL_HOST_USER = config('EMAIL_HOST_USER')
EMAIL_HOST_PASSWORD = config('EMAIL_HOST_PASSWORD')
EMAIL_USE_TLS = config('EMAIL_USE_TLS', cast=bool)

ORDER_FROM_EMAIL=config('ORDER_FROM_EMAIL')
SUPPORT_FROM_EMAIL=config('SUPPORT_FROM_EMAIL')
STORE_FROM_EMAIL=config('STORE_FROM_EMAIL')
NOREPLY_FROM_EMAIL=config('NOREPLY_FROM_EMAIL')
NEW_ORDER_FROM_EMAIL=config('NEW_ORDER_FROM_EMAIL')

#MAILCHIMP
MAILCHIMP_API_KEY=config('MAILCHIMP_API_KEY')
MAILCHIMP_DATA_CENTER=config('MAILCHIMP_DATA_CENTER')
MAILCHIMP_LIST_ID=config('MAILCHIMP_LIST_ID')


CORS_ORIGIN_ALLOW_ALL = config('CORS_ORIGIN_ALLOW_ALL', cast=bool) #False pra ir ao servidor

CORS_ORIGIN_WHITELIST =config('CORS_ORIGIN_WHITELIST', cast=Csv())

#SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')
#proxy_set_header X-Forwarded-Proto $scheme; #adicionar o https direto para as imagens

#celery config

CELERY_TIMEZONE = TIME_ZONE
CELERY_ACCEPT_CONTENT = ['json', 'pickle']
CELERYD_CONCURRENCY = 2
CELERYD_MAX_TASKS_PER_CHILD = 4
CELERYD_PREFETCH_MULTIPLIER = 1
CELERY_BROKER_URL = 'amqp://localhost'
CELERY_IMPORTS = ("apps.api.v1.tasks")
# celery queues setup
CELERY_CREATE_MISSING_QUEUES=True

CELERY_ROUTES = {
    'apps.api.v1.tasks.send_email_customer': {
        'queue': 'mail-customer',
        'routing_key': 'mail_customer',
    },
    'apps.api.v1.tasks.noty_new_order': {
        'queue': 'new-order',
        'routing_key': 'new_order',
    },
    'apps.api.v1.add_to_mailchimp': {
        'queue': 'new-mailchimp',
        'routing_key': 'new_mailchimp',
    },
    'apps.api.v1.notify_quote': {
        'queue': 'notify-quote',
        'routing_key': 'notify_quote',
    },
    'apps.api.v1.notify_supplier': {
        'queue': 'notify-supplier',
        'routing_key': 'notify_supplier',
    },
}