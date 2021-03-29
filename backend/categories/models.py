from django.db import models

# Create your models here.
from restaurant.models import Restaurant


class Categories(models.Model):
    CATEGORIES = (
        ('1', 'Vegetarian'),
        ('2', 'Vegan'),
        ('3', 'Fast Food'),
        ('4', 'All you can eat'),
        ('5', 'Breakfast & Brunch'),


    )
    restaurant = models.ManyToManyField(to=Restaurant, choices=CATEGORIES, related_name='categories')