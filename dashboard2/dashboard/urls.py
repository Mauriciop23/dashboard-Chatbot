#from django.conf.urls import url
from django.urls import path, re_path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('home/', views.home, name='home'),
    path('asesores/', views.asesores, name='asesores'),


    re_path(r'^asesor$',views.asesorApi),
    re_path(r'^asesor/([0-9]+)$',views.asesorApi),
    re_path(r'^prospecto$',views.prospectoApi),
    re_path(r'^prospecto/([0-9]+)$',views.prospectoApi),
    re_path(r'^vivienda$',views.viviendaApi),
    re_path(r'^vivienda/([0-9]+)$',views.viviendaApi),

]
