from django.contrib import admin
from .models import Questions, Answers, Categories_for_questions, ExcludeKeywords, Report, ReportCategory

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

class ReportAdmin(admin.ModelAdmin):
    fields = [
        'User',
        'Type',
        'Category',
        'Reported Id',
        'Reported On',
    ]

    class Meta:
        model = Report

class ReportCategoryAdmin(admin.ModelAdmin):
    fields = [
        'Category',
        'id'
    ]

    class Meta:
        model = ReportCategory

admin.site.register(Questions)
admin.site.register(Answers)
admin.site.register(Categories_for_questions)
admin.site.register(ExcludeKeywords)
admin.site.register(Report)
admin.site.register(ReportCategory)