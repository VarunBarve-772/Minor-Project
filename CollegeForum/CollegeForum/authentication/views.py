from django.shortcuts import render
import json
import base64
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import CustomUser
from django.core.files.base import ContentFile
from django.contrib.auth import login, authenticate

# Create your views here.
@csrf_exempt
def loginUser(request):
    if request.method == 'POST':  
        data = request.body.decode('utf-8')
        a = json.loads(data)
        user = authenticate(request, username=a['enrollment'], password=a['password'])
        if user is None:
            return JsonResponse('Invalid', safe=False)
        # else:
        #     login(request, user)
    return JsonResponse('valid', safe=False)

@csrf_exempt
def registerUser(request):
    if request.method == 'POST':  
        data = request.body.decode('utf-8')
        a = json.loads(data)
        idCardFile = ContentFile(base64.b64decode(a['idCard']))
        user = CustomUser.objects.create_user(first_name=a['firstName'], last_name=a['lastName'], email=a['email'], password=a['password'], enrollment=a['enrollment'], mobile=a['mobile'], institute=a['institute'], year=a['year'], idCard=idCardFile, username=a['enrollment'])
        user.save()
    return JsonResponse('anything', safe=False)