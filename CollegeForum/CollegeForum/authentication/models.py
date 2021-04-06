from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class CustomUser(AbstractUser):
    enrollment = models.CharField(max_length=30, blank=True, null=True)
    mobile = models.IntegerField(max_length=15, null=True, blank=True)
    institute = models.CharField(max_length=80, null=True, blank=True)
    year = models.IntegerField(max_length=1, null=True, blank=True)
    image = models.ImageField(blank=True, null=True)