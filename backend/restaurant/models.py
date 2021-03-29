from django.contrib.auth import get_user_model
from django.db import models

# Create your models here.

User = get_user_model()


def user_directory_path(instance, filename):
    return f'{instance.id}/{filename}'


class Restaurant(models.Model):
    # below PriceLevel and CATEGORIES are just two different ways of doing the same
    class PriceLevel(models.TextChoices):
        zero = '0', 'No information'
        one = '1', '$'
        two = '2', '$$'
        three = '3', '$$$'


    name = models.CharField(max_length=70)
    # category = models.CharField(choices=CATEGORIES, blank=True, max_length=2)
    country = models.CharField('Country', max_length=170)  # can get all countries for drop down?
    street = models.CharField('Street', max_length=70)
    city = models.CharField('City', max_length=70)
    zip_code = models.CharField('ZIP / Postal code', max_length=70, blank=True)
    website = models.CharField(max_length=70, blank=True)
    phone = models.CharField(max_length=20)
    email = models.EmailField(max_length=70, blank=True)
    # opening_hours_from =
    # opening hours_to =
    price_level = models.CharField(max_length=2, choices=PriceLevel.choices, default=PriceLevel.zero)
    avatar = models.ImageField(upload_to=user_directory_path, blank=True, null=True)
    owner = models.ForeignKey(to=User, on_delete=models.SET_NULL, related_name='my_restaurants', null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return f' Restaurant "{self.name}" owned by {self.owner}'


