from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.db import models
from .models import CustomUser, ContactUs

# Register your models here.
class CustomUserAdmin(UserAdmin):
    model = CustomUser

    fieldsets = (
        *UserAdmin.fieldsets,
        (
            'User Role',
            {
                'fields': (
                    'enrollment',
                    'mobile',
                    'institute',
                    'year',
                    'idCardString',
                )
            }
        )
    )

class ContactUsAdmin(admin.ModelAdmin):
    fields = [
        'name',
        'email',
        'message'
    ]

    class Meta:
        model = ContactUs

admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(ContactUs, ContactUsAdmin)