from django.urls import path
from . import views

urlpatterns = [
    path('loginUser', views.loginUser),
    path('registerUser', views.registerUser),
    path('OTP', views.OTP),
    path('updateProfile', views.updateProfile),
    path('changePassword', views.changePassword),
    path('viewProfile', views.viewProfile),
    path('forgetPasswordUsername', views.forgetPasswordUsername),
    path('contactUs', views.contactUs)
]