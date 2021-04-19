from django.db import models
from authentication.models import CustomUser
from datetime import datetime

SVIIT = 'sviit'
SVIM = 'svim'
SVIL = 'svil'

CATEGORY = [
    (SVIIT, 'SVIIT'),
    (SVIM, 'SVIM'),
    (SVIL, 'SVIL')
]

class Questions(models.Model):
    enrol = models.ForeignKey(CustomUser, on_delete = models.CASCADE, related_name = "questioner_enrol")
    content = models.CharField(max_length=1200)
    category = models.CharField(choices=CATEGORY, max_length=5, default=SVIIT)  
    date = models.DateTimeField(default=datetime.now, editable=False)

class Answers(models.Model):
    a_enrol = models.ForeignKey(CustomUser, on_delete = models.CASCADE, related_name = "answerer_enrol")
    a_content = models.TextField()
    q_id = models.ForeignKey(Questions, on_delete = models.CASCADE, related_name = "question_id")
    a_satisfactory = models.BooleanField(default=False)
    a_date = models.DateTimeField(default=datetime.now, editable=False)