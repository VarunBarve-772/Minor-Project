# Generated by Django 3.1.5 on 2021-04-18 13:27

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Questions',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.CharField(max_length=1200)),
                ('date', models.DateTimeField(default=datetime.datetime.now, editable=False)),
                ('enrol', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='questioner_enrol', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Answers',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('a_content', models.TextField()),
                ('a_satisfactory', models.BooleanField(default=False)),
                ('a_date', models.DateTimeField(default=datetime.datetime.now, editable=False)),
                ('a_enrol', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='answerer_enrol', to=settings.AUTH_USER_MODEL)),
                ('q_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='question_id', to='qna.questions')),
            ],
        ),
    ]