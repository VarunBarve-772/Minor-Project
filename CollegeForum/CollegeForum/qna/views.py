from django.shortcuts import render
from .models import Questions, Answers

# Create your views here.
def showQues():
    ques = list(Questions.objects.filter(category__startswith='SVIM'))
    for k in ques:
        print(k.id)
        print(k.content)
        ans = list(Answers.objects.filter())
        for a in ans:
            if(a.q_id.id==k.id):
                print(a.a_content)