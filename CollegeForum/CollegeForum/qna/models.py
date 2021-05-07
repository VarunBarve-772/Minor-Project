from django.db import models
from authentication.models import CustomUser
from datetime import datetime, date
import django.utils.timezone

class Questions(models.Model):
    full_name = models.CharField(max_length=50, blank=True, null=True)
    content = models.CharField(default=None, max_length=1200)
    category = models.CharField(max_length=5, blank=True, null=True)
    q_date = models.DateField(default=date.today)
    q_time = models.TimeField(default=django.utils.timezone.now)
    satisfactory_answer = models.CharField(default=None, max_length=10, blank=True, null=True)

class Answers(models.Model):
    a_full_name = models.CharField(max_length=50, blank=True, null=True)
    a_content = models.TextField()
    q_id = models.ForeignKey(Questions, on_delete = models.CASCADE, related_name = "question_id")
    a_date = models.DateField(default=date.today)
    a_time = models.TimeField(default=django.utils.timezone.now)