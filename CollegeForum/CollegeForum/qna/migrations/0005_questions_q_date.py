# Generated by Django 3.1.5 on 2021-05-05 10:25

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('qna', '0004_auto_20210505_1554'),
    ]

    operations = [
        migrations.AddField(
            model_name='questions',
            name='q_date',
            field=models.DateField(default=django.utils.timezone.now),
        ),
    ]