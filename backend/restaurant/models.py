from django.contrib.auth import get_user_model
from django.core.validators import RegexValidator
from django.db import models
from django.conf import settings

# Create your models here.

User = get_user_model()


def user_directory_path(instance, filename):
    return f'{instance.id}/{filename}'


class Restaurant(models.Model):

    class PriceLevel(models.TextChoices):
        zero = '0', 'No information'
        one = '1', '$'
        two = '2', '$$'
        three = '3', '$$$'


    name = models.CharField(max_length=70)
    country = models.CharField('Country', max_length=170)
    street = models.CharField('Street', max_length=70)
    city = models.CharField('City', max_length=70)
    zip_code = models.CharField('ZIP / Postal code', max_length=70, blank=True)
    website = models.CharField(max_length=70, blank=True)
    phone_regex = RegexValidator(regex=r'^\+?1?\d{9,15}$',
                                 message="Phone number must be entered in the format: '+999999999'. Up to 15 digits "
                                         "allowed.")
    phone = models.CharField(validators=[phone_regex], max_length=17)
    email = models.EmailField(max_length=70, blank=True)
    opening_hours_from = models.CharField(max_length=20, null=True)
    opening_hours_to = models.CharField(max_length=20, null=True)
    price_level = models.CharField(max_length=2, choices=PriceLevel.choices, default=PriceLevel.zero)
    avatar = models.ImageField(upload_to=user_directory_path, blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True, null=True)
    owner = models.ForeignKey(to=settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, related_name='my_restaurants', null=True)

    def __str__(self):
        return f' Restaurant "{self.name}" owned by {self.owner}'


