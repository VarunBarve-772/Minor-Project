# Generated by Django 3.1.7 on 2021-05-08 13:22

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Categories_for_questions',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(blank=True, max_length=10, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Questions',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.CharField(default=None, max_length=1200)),
                ('que_date', models.DateField(default=datetime.date.today)),
                ('que_time', models.TimeField(default=django.utils.timezone.now)),
                ('satisfactory_answer', models.CharField(blank=True, default=None, max_length=10, null=True)),
                ('que_category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='que_Category', to='qna.categories_for_questions')),
                ('que_username', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='que_username', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Answers',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ans_content', models.TextField()),
                ('ans_date', models.DateField(default=datetime.date.today)),
                ('ans_time', models.TimeField(default=django.utils.timezone.now)),
                ('ans_username', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ans_username', to=settings.AUTH_USER_MODEL)),
                ('que_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='question_id', to='qna.questions')),
            ],
        ),
    ]
