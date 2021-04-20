from django.shortcuts import render
import json
import base64
from qna.views import showQues 
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import CustomUser
from django.core.files.base import ContentFile
from django.contrib.auth import login, authenticate
from .OTP import otp

userOTPData = {
    'email': '',
    'mobile': '',
}
otpValue = {
    'value': 0,
}


# Create your views here.
@csrf_exempt
def loginUser(request):
    if request.method == 'POST':  
        data = request.body.decode('utf-8')
        userData = json.loads(data)
        user = authenticate(request, username=userData['enrollment'], password=userData['password'])
        if user is None:
            return JsonResponse('Invalid', safe=False)
        # else:
        #     login(request, user)
        # showQues()
    return JsonResponse('valid', safe=False)

@csrf_exempt
def registerUser(request):
    if request.method == 'POST':  
        data = request.body.decode('utf-8')
        userData = json.loads(data)
        user = CustomUser.objects.create_user(first_name=userData['firstName'], last_name=userData['lastName'], email=userData['email'], password=userData['password'], username=userData['enrollment'], mobile=userData['mobile'], institute=userData['institute'], year=userData['year'], idCardString=userData['idCard'])
        user.save()
        userOTPData['email'] = userData['email']
        userOTPData['mobile'] = userData['mobile']
        resData = {
            'response': "all good"
        }
        return JsonResponse(resData)

@csrf_exempt
def OTP(request):
    print(otpValue)
    if request.method == 'GET':
        whereToOtp = request.GET.get('otpDes')
        if whereToOtp == 'Email':
            print(userOTPData['email'])
            otpValue['value'] = otp.sendEmail(userOTPData['email'])
            return JsonResponse('otp sent', safe=False)    
    elif request.method == 'POST':
        data = request.body.decode('utf-8')
        userOTP = json.loads(data)
        if otpValue['value'] == int(userOTP['otpValue']):
            resData = {
                'result': 'valid'
            }
            return JsonResponse(resData)
        else:
            resData = {
                'result': 'invalid'
            }
            return JsonResponse(resData)
