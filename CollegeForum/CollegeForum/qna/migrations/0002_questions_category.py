# Generated by Django 3.1.5 on 2021-04-18 14:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('qna', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='questions',
            name='category',
            field=models.CharField(choices=[('sviit', 'SVIIT'), ('svim', 'SVIM'), ('svil', 'SVIL')], default='sviit', max_length=5),
        ),
    ]