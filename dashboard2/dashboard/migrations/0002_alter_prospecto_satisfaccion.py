# Generated by Django 4.1.1 on 2022-10-08 19:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='prospecto',
            name='satisfaccion',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
    ]
