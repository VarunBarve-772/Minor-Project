# from django.shortcuts import render
from .models import Questions, Answers, Categories_for_questions
from authentication.models import CustomUser
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from authentication.views import userInfo
from .SmartSearch import SmartSearch
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

        resData = {
            "questions": lists
        }

    return JsonResponse(resData)

@csrf_exempt
def addQues(request):
    if request.method == "GET":
        result = SmartSearch.extractingKeywords('This is a test question for sviit institute')
        print(result)
        resData = {
            "response": "Invalid Request",
            'result': result
        }
        return JsonResponse(resData)
    if request.method == 'POST':
        data = request.body.decode('utf-8')
        body = json.loads(data)

        user = CustomUser.objects.get(username__contains=userInfo['username'])
        category = Categories_for_questions.objects.get(category = body['category'])

        que_tags = SmartSearch.extractingKeywords(body['queContent'])

        question = Questions(que_username = user, content = body['queContent'], que_code=body['codeContent'], que_category = category, tags = que_tags)
        question.save()

        resData = {
            "response": "Question Added"
        }

        return JsonResponse(resData)

@csrf_exempt
def searchQuestion(request):
    if request.method == 'POST':
        lists = []

        data = request.body.decode('utf-8')
        body = json.loads(data)

        que_tags = SmartSearch.extractingKeywords(body['searchQuery'])

        questions = Questions.objects.filter(tags__icontains = que_tags)

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

        resData = {
            "questions": lists
        }

        return JsonResponse(resData)

@csrf_exempt
def MyQuestions(request):
    if request.method == 'POST':
        lists = []

        user = CustomUser.objects.get(username__contains=userInfo['username'])
        questions = Questions.objects.filter(que_username = user)

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

        resData = {
            "questions": lists
        }

        return JsonResponse(resData)

@csrf_exempt
def QuesPage(request):
    if request.method == "POST":
        ans_list = []
        
        data = request.body.decode('utf-8')
        body = json.loads(data)

        ques_id = body['id']

        question = Questions.objects.get(id=ques_id)
        que_user = CustomUser.objects.get(username__contains=question.que_username)
        q_full_name = que_user.first_name+" "+que_user.last_name


        answers = list(Answers.objects.filter(que_id=ques_id))

        for answer in answers:
            ans_users = CustomUser.objects.get(username__contains=answer.ans_username)
            a_full_names = ans_users.first_name+" "+ans_users.last_name

            ans_dict = {
                            "name": a_full_names,
                            "answer_id": answer.id,
                            "answer": answer.ans_content,
                            "date": answer.ans_date,
                            "time": answer.ans_time,
                            "code": answer.ans_code
            }

            main_dict = dict(ans_dict)
            ans_list.append(main_dict)

        response = {
                    "question": question.content,
                    "questioner": q_full_name,
                    "date": question.que_date,
                    "time": question.que_time,
                    "satisfactory": question.satisfactory_answer,
                    "code": question.que_code,
                    "answers": ans_list
        }
        return JsonResponse(response, safe=False)

@csrf_exempt
def answerSubmit(request):
    if request.method == "POST":
        data = request.body.decode('utf-8')
        body = json.loads(data)

        user = CustomUser.objects.get(username__contains=userInfo['username'])        
        question = Questions.objects.get(id=body['que_id'])

        answer = Answers(ans_content=body['answerContent'], ans_code=body['codeContent'], que_id=question, ans_username=user)
        answer.save()

        resData = {
            "response": 'Answer Submitted'
        }
        return JsonResponse(resData)

@csrf_exempt
def satisfactoryAnswerSubmit(request):
    data = request.body.decode('utf-8')
    body = json.loads(data)

    question = Questions.objects.get(id=body['que_id'])

    question.satisfactory_answer = body['ans_id']

    question.save()

    resData = {
        'response': 'satisfactory answer submitted'
    }

    return JsonResponse(resData)
