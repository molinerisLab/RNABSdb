from django.contrib import admin
from django.urls import path, include
from rnabs_api import urls as app_urls

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include(app_urls)),
]
