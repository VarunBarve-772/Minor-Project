# Generated by Django 3.1.5 on 2021-05-05 10:24

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('qna', '0003_auto_20210505_1554'),
    ]

    operations = [
        migrations.AddField(
            model_name='answers',
            name='a_time',
            field=models.TimeField(default=django.utils.timezone.now),
        ),
        migrations.AddField(
            model_name='questions',
            name='q_time',
            field=models.TimeField(default=django.utils.timezone.now),
        ),
    ]