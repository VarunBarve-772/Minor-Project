from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate
import json
from .models import CustomUser, ContactUs
from .OTP import otp

userRegisterData = {}
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

        user = authenticate(request, username = userData['enrollment'], password = userData['password'])

        if user is None:
            resData = {
                'response': "Invalid"
            }
        else:
            userInfo['username'] = user.username

            resData = {
                'response': "Valid"
            }

        return JsonResponse(resData)

@csrf_exempt
def logoutUser(request):
    userInfo.clear()

    resData = {
        "response": "logged Out"
    }

    return JsonResponse(resData)

@csrf_exempt
def registerUser(request):
    if request.method == 'POST':  
        data = request.body.decode('utf-8')
        body = json.loads(data)
        checkUser = ''

        try:
            checkUser = CustomUser.objects.get(username = body['enrollment'])
        except:
            userRegisterData['firstName'] = body['firstName']
            userRegisterData['lastName'] = body['lastName'] 
            userRegisterData['email'] = body['email']
            userRegisterData['password'] = body['password'] 
            userRegisterData['username'] = body['enrollment'] 
            userRegisterData['mobile'] = body['mobile']
            userRegisterData['institute'] = body['institute'] 
            userRegisterData['year'] = body['year']
            userRegisterData['idCard'] = body['idCard']

            try:
                otpValue['value'] = otp.sendEmail(body['email'], "Registration")
            except:
                resData = {
                    'response': "Wrong"
                }  
                return JsonResponse(resData)

        if checkUser:
            resData = {
                'response': "Invalid"
            }
        else:
            resData = {
                "response": "Valid"
            }

        return JsonResponse(resData)

@csrf_exempt
def OTP(request):
    if request.method == 'POST':
        data = request.body.decode('utf-8')
        body = json.loads(data)

        try:
            if otpValue['value'] == int(body['otpValue']):
                
                if body['location'] == 'register':

                    user = CustomUser.objects.create_user(
                        first_name = userRegisterData['firstName'], 
                        last_name = userRegisterData['lastName'], 
                        email = userRegisterData['email'], 
                        password = userRegisterData['password'], 
                        username = userRegisterData['username'], 
                        mobile = userRegisterData['mobile'], 
                        institute = userRegisterData['institute'], 
                        year = userRegisterData['year'], 
                        idCardString = userRegisterData['idCard']
                    )
                    user.save()

                    userInfo['username'] = userRegisterData['username']
                    
                    resData = {
                        'response': 'Valid',
                        'userId': userRegisterData['username'],
                        'pass': userRegisterData['password']
                    }
                else:
                    resData = {
                        'response': 'Valid'
                    }

                userRegisterData.clear()
            else:
                resData = {
                    'response': 'Invalid'
                }

        except:
            resData = {
                'response': 'Wrong'
            }

    return JsonResponse(resData)


@csrf_exempt
def updateProfile(request):
    if request.method == 'GET':
        try:
            user = CustomUser.objects.get(username = userInfo['username'])

            resData = {
                'response': 'Valid',
                'email': user.email,
                'mobile': user.mobile,
                'year': user.year 
            }
        except:
            resData = {
                'response': 'Wrong'
            }

        return JsonResponse(resData)

    if request.method == 'POST':
        data = request.body.decode('utf-8')
        body = json.loads(data)

        try:
            user = CustomUser.objects.get(username = body['username'])
            user.email = body['email']
            user.mobile = body['mobile']
            user.year = body['year']
            user.save()

            resData = {
                'response': 'Valid',
                'email': user.email,
                'mobile': user.mobile,
                'year': user.year 
            }
        except:
            resData = {
                'response': 'Wrong'
            }

        return JsonResponse(resData)

@csrf_exempt
def changePassword(request):
    if request.method == 'POST':
        data = request.body.decode('utf-8')
        body = json.loads(data)  

        try:
            user = CustomUser.objects.get(username = body['username'])
            user.set_password(str(body['password']))

            user.save()

            resData = {
                'response': 'Valid'
            }
        except:
            resData = {
                'response': 'Wrong'
            }

        return JsonResponse(resData)

@csrf_exempt
def viewProfile(request):
    if request.method == "POST":
        try:
            user = CustomUser.objects.get(username = userInfo['username'])

            resData = {
                'response': 'Valid',
                'firstName': user.first_name,
                'lastName': user.last_name,
                'email': user.email,
                'enrollment': user.username,
                'mobile': user.mobile,
                'institute': user.institute,
                'year': user.year,
            }
        except:
            resData = {
                'response': 'Wrong'
            }

        return JsonResponse(resData)

@csrf_exempt
def forgetPasswordUsername(request):
    if request.method == "POST":
        data = request.body.decode('utf-8')
        body = json.loads(data)  

        try:
            user = CustomUser.objects.get(username = body['enrollment'])
            
            try:
                otpValue['value'] = otp.sendEmail(user.email, "Forget Password")
            except:
                resData = {
                    'response': "Wrong"
                }
                return JsonResponse(resData)

            userInfo['username'] = user.username

            resData = {
                'response': 'Valid'
            }
        except:
            resData = {
                'response': 'Invalid'
            }

        return JsonResponse(resData)

@csrf_exempt
def contactUs(request):
    if request.method == 'POST':
        data = request.body.decode('utf-8')
        body = json.loads(data) 

        try:
            complaint = ContactUs.objects.create(
                name = body['name'], 
                email = body['email'], 
                message = body['content']
            )
            complaint.save()

            resData = {
                'response': "Valid"
            }
        except:
            resData = {
            'response': 'Wrong'
        }
        return JsonResponse(resData)