# Generated by Django 3.1 on 2021-03-30 16:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant', '0009_restaurant_categories'),
    ]

    operations = [
        migrations.AlterField(
            model_name='restaurant',
            name='latitude',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='restaurant',
            name='longitude',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]
