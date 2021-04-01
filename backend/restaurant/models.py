from statistics import mean

from django.contrib.auth import get_user_model
from django.core.validators import RegexValidator
from django.db import models
from django.conf import settings

# Create your models here.
from category.models import Category

User = get_user_model()


def user_directory_path(instance, filename):
    return f'{instance.id}/{filename}'


class Restaurant(models.Model):

    PRICE_LEVEL = (
        ('0', 'No information'),
        ('1', '$'),
        ('2', '$$'),
        ('3', '$$$')
    )

    NOISE_LEVEL = (
        ('0', 'No information'),
        ('1', '!'),
        ('2', '!!'),
        ('3', '!!!')
    )

    name = models.CharField(max_length=70)
    country = models.CharField('Country', max_length=70)
    street = models.CharField('Street', max_length=70)
    city = models.CharField('City', max_length=70)
    zip_code = models.CharField('ZIP / Postal code', max_length=70, blank=True)
    website = models.CharField(max_length=70, blank=True)
    # phone_regex = RegexValidator(regex=r'^\+?1?\d{5,15}$',
    #                              message="Phone number must be entered in the format: '+999999999'. Up to 15 digits "
    #                                      "allowed.")
    phone = models.CharField(max_length=20)
    email = models.EmailField(max_length=70, blank=True)
    opening_hours = models.CharField(max_length=60, null=True)
    avatar = models.ImageField(upload_to=user_directory_path, blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True, null=True)
    owner = models.ForeignKey(to=settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, related_name='my_restaurants', null=True)

    longitude = models.CharField(max_length=50, blank=True, null=True)
    latitude = models.CharField(max_length=50, blank=True, null=True)

    price_level = models.CharField(max_length=2, choices=PRICE_LEVEL, default='0')
    WIFI = models.BooleanField(null=True, blank=True)
    take_away = models.BooleanField(verbose_name='Take away', null=True, blank=True)
    delivery = models.BooleanField(null=True, blank=True)
    take_reservations = models.BooleanField(verbose_name='Take reservations', null=True, blank=True)
    credit_cards = models.BooleanField(verbose_name='Credit cards', null=True, blank=True)
    waiter_service = models.BooleanField(verbose_name='Waiter service', null=True, blank=True)
    noise_level = models.CharField(verbose_name='Noise level', max_length=2, choices=NOISE_LEVEL, default='0', blank=True)

    categories = models.ManyToManyField(to=Category, related_name='restaurants')

    def __str__(self):
        return f' Restaurant "{self.name}" owned by {self.owner}'

    @property
    def average_rating(self):
        ratings_list = []
        reviews = self.restaurant_reviews.values()
        for review in reviews:
            ratings_list.append(int(review['rating']))
        if len(ratings_list) > 0:
            return round(mean(ratings_list), 2)
        else:
            return 0
