from django.contrib import admin
from .models import Questions, Answers, Categories_for_questions, ExcludeKeywords

class QuestionsAdmin(admin.ModelAdmin):
    fields = [
        'full_name',
        'content',
        'category',
        'q_date',
        'q_time',
        'satisfactory_answer',
        'que_code'
    ]

    class Meta:
        model = Questions

class AnswersAdmin(admin.ModelAdmin):
    fields = [
        'a_full_name',
        'a_content',
        'q_id',
        'a_date',
        'a_time',
        'ans_code'
    ]

    class Meta:
        model = Answers

class Categories_for_questions_Admin(admin.ModelAdmin):
    fields = [
        'id',
        'categories'
    ]

    class Meta:
        model = Categories_for_questions

class ExcludeKeywordsAdmin(admin.ModelAdmin):
    fields = [
        'id',
        'keywords'
    ]

    class Meta:
        model = Categories_for_questions

admin.site.register(Questions)
admin.site.register(Answers)
admin.site.register(Categories_for_questions)
admin.site.register(ExcludeKeywords)