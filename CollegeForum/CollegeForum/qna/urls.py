from django.urls import path
from . import views

urlpatterns = [
    path('showQues', views.showQues),
    path('AskQuestion', views.addQues),
    path('QuesPage', views.QuesPage),
    path('Search', views.searchQuestion),
    path('MyQuestions', views.MyQuestions),
    path('AnswerSubmit', views.answerSubmit),
    path('SubmitSatisfactoryAnswer', views.satisfactoryAnswerSubmit),
    path('ReportContent', views.ReportContent)
]