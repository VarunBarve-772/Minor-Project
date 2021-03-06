from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class CustomUser(AbstractUser):
    enrollment = models.CharField(max_length=30, blank=True, null=True)
    mobile = models.IntegerField(null=True, blank=True)
    institute = models.CharField(max_length=80, null=True, blank=True)
    year = models.IntegerField(null=True, blank=True)
    idCardString = models.TextField(blank=True, null=True)

class ContactUs(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=100)
    message = models.TextField()

    def __str__(self):
        return self.name
