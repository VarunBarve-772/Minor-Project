from django.shortcuts import render
from .models import Questions
from authentication.models import CustomUser
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.contrib.auth.models import User
import json

@csrf_exempt
def showQues(request):
    if request.method == 'POST':  
        lists = []

        data = request.body.decode('utf-8')
        index = data.index("=")+1
        kept_data = data[index:]

        questions = list(Questions.objects.filter(category__startswith=kept_data))
        print(questions)

        for question in questions:
            ques_dict = {
                            "name": question.full_name,
                            "id": question.id,
                            "question": question.content,
                            "date": question.q_date,
                            "time": question.q_time,
                            "satistactory": question.satisfactory_answer
            }
    
            main_dict = dict(ques_dict)
            lists.append(main_dict)

    response = {"questions":lists}
    return JsonResponse(response, safe=False)