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

        category = Categories_for_questions.objects.get(category=body['category'])
        questions = list(Questions.objects.filter(que_category=category))
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

@csrf_exempt
def QuesPage(request):
    if request.method == "GET":
        ans_list = []
        data = request.body.decode('utf-8')
        body = json.loads(data)
        print(body)

        ques_id = body['id']
        print(ques_id)

        question = Questions.objects.filter(id=body['id'])
        print(question[0].que_username)
        que_user = CustomUser.objects.filter(username__contains=question[0].que_username)
        q_full_name = que_user[0].first_name+" "+que_user[0].last_name
        print(q_full_name)


        answers = list(Answers.objects.filter(que_id=body['id']))
        print(answers)

        for answer in answers:
            ans_users = list(CustomUser.objects.filter(username__contains=answer.ans_username))

            for user in ans_users:
                a_full_names = user.first_name+" "+user.last_name

            ans_dict = {
                            "name": a_full_names,
                            "answer id": answer.id,
                            "answer": answer.ans_content,
                            "date": answer.ans_date,
                            "time": answer.ans_time,
            }

            main_dict = dict(ans_dict)
            ans_list.append(main_dict)
        print(ans_list)

        response = {
                    "question": question[0].content,
                    "questioner": q_full_name,
                    "date": question[0].que_date,
                    "time": question[0].que_time,
                    "satisfactory": question[0].satisfactory_answer,
                    "answers": ans_list
        }
        return JsonResponse(response, safe=False)

    elif request.method == "POST":
        data = request.body.decode('utf-8')
        body = json.loads(data)

        user = CustomUser.objects.get(username__contains=userInfo['username'])
        print(user)
        
        question = Questions.objects.get(id=body['que_id'])
        # question = Questions.objects.filter(id=category)

        answer = Answers(ans_content=body['ans_content'], que_id=question, ans_username=user)
        # print(answer)
        answer.save()

        return JsonResponse(body['ans_content'], safe=False)
