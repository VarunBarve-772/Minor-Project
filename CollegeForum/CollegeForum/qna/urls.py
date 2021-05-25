from django.urls import path
from . import views

urlpatterns = [
    path('showQues', views.showQues, name="showQues"),
    path('AskQuestion', views.addQues, name="addQues"),
    path('QuesPage', views.QuesPage, name="QuesPage"),
    path('Search', views.searchQuestion),
    path('MyQuestions', views.MyQuestions),
    path('AnswerSubmit', views.answerSubmit),
    path('SubmitSatisfactoryAnswer', views.satisfactoryAnswerSubmit)
]