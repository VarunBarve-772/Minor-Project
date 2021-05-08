# from django.shortcuts import render
from .models import Questions, Answers, Categories_for_questions
from authentication.models import CustomUser
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from authentication.views import userInfo
import json

@csrf_exempt
def showQues(request):
    if request.method == 'POST':  
        lists = []

        data = request.body.decode('utf-8')
        body = json.loads(data)

        category = Categories_for_questions.objects.get(category = body['category'])
        questions = list(Questions.objects.filter(que_category = category))
        print(questions)

        for question in questions:
            user = CustomUser.objects.get(username = question.que_username)
            full_name = user.first_name + " " + user.last_name
            ques_dict = {
                            "name": full_name,
                            "id": question.id,
                            "question": question.content,
                            "date": question.que_date,
                            "time": question.que_time,
                            "satistactory": question.satisfactory_answer
            }
    
            main_dict = dict(ques_dict)
            lists.append(main_dict)

    response = {"questions":lists}
    return JsonResponse(response, safe=False)

@csrf_exempt
def addQues(request):
    if request.method == "GET":
        user = CustomUser.objects.get(username = userInfo['username'])
        print(user)

        resData = {
            "response": "Invalid Request"
        }
        return JsonResponse(resData)
    if request.method == 'POST':
        data = request.body.decode('utf-8')
        body = json.loads(data)

        user = CustomUser.objects.get(username__contains=userInfo['username'])
        category = Categories_for_questions.objects.get(category = body['category'])

        question = Questions(que_username = user, content = body['content'], que_category = category)
        question.save()

        resData = {
            "response": "Question Added"
        }

        return JsonResponse(resData)
