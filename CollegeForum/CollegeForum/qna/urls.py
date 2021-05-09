from django.urls import path
from . import views

urlpatterns = [
    path('showQues', views.showQues, name="showQues"),
    path('AskQuestion', views.addQues, name="addQues"),
    path('QuesPage', views.QuesPage, name="QuesPage")
]