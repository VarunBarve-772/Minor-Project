# Generated by Django 3.1.5 on 2021-05-05 10:22

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('qna', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='answers',
            name='a_enrol',
        ),
        migrations.RemoveField(
            model_name='answers',
            name='a_satisfactory',
        ),
        migrations.RemoveField(
            model_name='questions',
            name='date',
        ),
        migrations.RemoveField(
            model_name='questions',
            name='enrol',
        ),
        migrations.AddField(
            model_name='answers',
            name='a_full_name',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='answers',
            name='a_time',
            field=models.TimeField(default=django.utils.timezone.now),
        ),
        migrations.AddField(
            model_name='questions',
            name='category',
            field=models.CharField(choices=[('sviit', 'SVIIT'), ('svim', 'SVIM'), ('svil', 'SVIL')], default='sviit', max_length=5),
        ),
        migrations.AddField(
            model_name='questions',
            name='full_name',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='questions',
            name='q_date',
            field=models.DateField(default=django.utils.timezone.now),
        ),
        migrations.AddField(
            model_name='questions',
            name='q_time',
            field=models.TimeField(default=django.utils.timezone.now),
        ),
        migrations.AddField(
            model_name='questions',
            name='satisfactory_answer',
            field=models.CharField(blank=True, default=None, max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='answers',
            name='a_date',
            field=models.DateField(default=django.utils.timezone.now),
        ),
        migrations.AlterField(
            model_name='questions',
            name='content',
            field=models.CharField(default=None, max_length=1200),
        ),
    ]
