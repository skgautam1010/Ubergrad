# Generated by Django 4.0.3 on 2022-03-28 14:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_requirements'),
    ]

    operations = [
        migrations.AlterField(
            model_name='requirements',
            name='body',
            field=models.CharField(max_length=1000),
        ),
    ]