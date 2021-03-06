from django.db import models
from authentication.models import CustomUser
from datetime import date
import django.utils.timezone


class Categories_for_questions(models.Model):
    category = models.CharField(max_length=10, blank=True, null=True)

    def __str__(self):
        return self.category
    
class Questions(models.Model):
    content = models.TextField(default=None, max_length=1200)
    que_code = models.TextField(default=None)
    que_category = models.ForeignKey(Categories_for_questions, on_delete = models.CASCADE, related_name = "que_Category")
    que_date = models.DateField(default=date.today)
    que_time = models.TimeField(default=django.utils.timezone.now)
    satisfactory_answer = models.CharField(default=None, max_length=10, blank=True, null=True)
    que_username = models.ForeignKey(CustomUser, on_delete = models.CASCADE, related_name = "que_username")
    tags = models.TextField(blank=True, null=True, max_length=200)

    def __str__(self):
        return str(self.id)
        
class Answers(models.Model):
    ans_content = models.TextField()
    que_id = models.ForeignKey(Questions, on_delete = models.CASCADE, related_name = "question_id")
    ans_username = models.ForeignKey(CustomUser, on_delete = models.CASCADE, related_name = "ans_username")
    ans_code = models.TextField(default=None)
    ans_date = models.DateField(default=date.today)
    ans_time = models.TimeField(default=django.utils.timezone.now)

    def __str__(self):
        return str(self.id)

class ExcludeKeywords(models.Model):
    keyword = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.keyword
        
class ReportCategory(models.Model):
    category = models.CharField(max_length=200, unique=True)

    def __str__(self):
        return self.category

class Report(models.Model):
    user = models.ForeignKey(CustomUser, on_delete = models.CASCADE, related_name = "User")
    type = models.CharField(max_length=1)
    category = models.ForeignKey(ReportCategory, on_delete = models.CASCADE, related_name = "Category")
    reportedId = models.IntegerField()
    reportedOn = models.DateTimeField(default=django.utils.timezone.now, verbose_name='Reported On')

    def __str__(self):
        return str(self.id)
