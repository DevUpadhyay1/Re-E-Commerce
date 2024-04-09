from django.urls import path
from django.urls.resolvers import URLPattern

from . import views

urlpatterns=[
    path('',views.Index,name='Index'),
    path('categories',views.categories,name='categories'),
    path('show_categories',views.show_categories,name='show_categories')
]