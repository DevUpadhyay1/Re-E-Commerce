from django.urls import path
from django.urls.resolvers import URLPattern

from . import views

urlpatterns=[
    path('',views.Index,name='Index'),
    path('login',views.login, name='login'),
    path('rent',views.rent,name='rent')

]