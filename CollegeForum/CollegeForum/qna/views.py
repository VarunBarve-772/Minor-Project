from django.shortcuts import render
from .models import Questions, Answers

# Create your views here.
def showQues():
    ques = list(Questions.objects.filter(category__startswith='SVIM'))
    for i in ques:
        print(i.content)