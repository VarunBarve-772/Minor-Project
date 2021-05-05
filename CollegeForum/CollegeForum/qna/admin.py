from django.contrib import admin
from .models import Questions, Answers

class QuestionsAdmin(admin.ModelAdmin):
    fields = [
        'full_name',
        'content',
        'category',
        'q_date',
        'q_time',
        'satisfactory_answer'
    ]

    class Meta:
        model = Questions

class AnswersAdmin(admin.ModelAdmin):
    fields = [
        'a_full_name',
        'a_content',
        'q_id',
        'a_date',
        'a_time'
    ]

    class Meta:
        model = Answers

admin.site.register(Questions)
admin.site.register(Answers)