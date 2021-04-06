from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser

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
                    'image',
                )
            }
        )
    )

admin.site.register(CustomUser, CustomUserAdmin)