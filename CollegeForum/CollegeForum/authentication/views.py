from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate
import json
from .models import CustomUser, ContactUs
from .OTP import otp

userOTPData = {
    'email': '',
}
otpValue = {
    'value': 0,
}
userInfo = {
    'username': ''
}

@csrf_exempt
def loginUser(request):
    if request.method == 'POST':  
        data = request.body.decode('utf-8')
        userData = json.loads(data)
        user = authenticate(request, username=userData['enrollment'], password=userData['password'])
        if user is None:
            resData = {
                'response': "invalid"
            }
            return JsonResponse(resData)
        else:
            userInfo['username'] = user.username
            resData = {
                'response': "valid"
            }
            return JsonResponse(resData)

@csrf_exempt
def registerUser(request):
    if request.method == 'POST':  
        data = request.body.decode('utf-8')
        userData = json.loads(data)
        user = CustomUser.objects.create_user(first_name=userData['firstName'], last_name=userData['lastName'], email=userData['email'], password=userData['password'], username=userData['enrollment'], mobile=userData['mobile'], institute=userData['institute'], year=userData['year'], idCardString=userData['idCard'])
        user.save()
        userOTPData['email'] = userData['email']
        resData = {
            'response': "all good"
        }
        return JsonResponse(resData)

@csrf_exempt
def OTP(request):
    if request.method == 'GET':
        whereToOtp = request.GET.get('otpDes')
        if whereToOtp == 'Email':
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


@csrf_exempt
def updateProfile(request):
    if request.method == 'GET':
        user = CustomUser.objects.get(username__contains=userInfo['username'])
        resData = {
            'email': user.email,
            'mobile': user.mobile,
            'year': user.year 
        }
        return JsonResponse(resData)
    if request.method == 'POST':
        data = request.body.decode('utf-8')
        userData = json.loads(data)
        user = CustomUser.objects.get(username__contains=userInfo['username'])
        user.email = userData['email']
        user.mobile = userData['mobile']
        user.year = userData['year']
        user.save()
        resData = {
            'email': user.email,
            'mobile': user.mobile,
            'year': user.year 
        }
        return JsonResponse(resData)

@csrf_exempt
def changePassword(request):
    if request.method == 'POST':
        data = request.body.decode('utf-8')
        userData = json.loads(data)  
        user = CustomUser.objects.get(username__contains=userInfo['username'])
        user.set_password(str(userData['password']))
        user.save()
        resData = {
            'response': 'Password Updated'
        }
        return JsonResponse(resData)

@csrf_exempt
def viewProfile():
    user = CustomUser.objects.get(username__contains=userInfo['username'])
    resData = {
        'firstName': user.first_name,
        'lastName': user.last_name,
        'email': user.email,
        'enrollment': user.username,
        'mobile': user.mobile,
        'institute': user.institute,
        'year': user.year,
    }
    return JsonResponse(resData)

@csrf_exempt
def forgetPasswordUsername(request):
    usernameData = request.GET.get('userId')
    user = CustomUser.objects.get(username = usernameData)
    otpValue['value'] = otp.sendEmail(user.email)
    userInfo['username'] = user.username
    resData = {
        'response': 'OTP sent'
    }
    return JsonResponse(resData)

@csrf_exempt
def contactUs(request):
    if request.method == 'POST':
        data = request.body.decode('utf-8')
        body = json.loads(data) 

        complaint = ContactUs.objects.create(name = body['name'], email = body['email'], message = body['content'])
        complaint.save()

        resData = {
            'response': "Complaint Added"
        }

        return JsonResponse(resData)