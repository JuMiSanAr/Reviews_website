# Generated by Django 3.1 on 2021-03-28 18:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant', '0002_restaurant_owner'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='restaurant',
            name='category',
        ),
    ]
