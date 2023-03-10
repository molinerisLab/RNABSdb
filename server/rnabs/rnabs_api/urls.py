from django.urls import path, include
from .views import (
    ExampleApi,
)

urlpatterns = [
    path('example', ExampleApi.as_view()),
]