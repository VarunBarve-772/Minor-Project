from django.urls import path
from . import views

urlpatterns = [
    path('showQues', views.showQues, name="showQues")
]