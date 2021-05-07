# from django.shortcuts import render
from .models import Questions
from authentication.models import CustomUser
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
# from django.contrib.auth.models import User
from authentication.views import userInfo
import json

@csrf_exempt
def showQues(request):
    if request.method == 'POST':  
        lists = []

        data = request.body.decode('utf-8')
        body = json.loads(data)

        questions = list(Questions.objects.filter(category__startswith=body['category']))
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

@csrf_exempt
def addQues(request):
    if request.method == "GET":
        resData = {
            "response": "Invalid Request"
        }
    if request.method == 'POST':
        data = request.body.decode('utf-8')
        body = json.loads(data)

        user = CustomUser.objects.get(username__contains=userInfo['username'])
        full_name = user.first_name+" "+user.last_name

        question = Questions(full_name=full_name, content=body['content'], category=body['category'])
        question.save()

        resData = {
            "response": "Question Added"
        }

        return JsonResponse(resData)
