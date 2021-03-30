from django.contrib.auth import get_user_model
from django.core.validators import RegexValidator
from django.db import models
from django.conf import settings

# Create your models here.

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

    CATEGORIES = (
        ('0', 'No categories'),
        ('1', 'Vegan'),
        ('2', 'Vegetarian'),
        ('3', 'Fast food'),
        ('4', 'All you can eat'),
        ('5', 'Traditional'),
        ('6', 'Haute cuisine'),
        ('7', 'Kebab'),
    )

    NOISE_LEVEL = (
        ('0', 'No information'),
        ('1', '!'),
        ('2', '!!'),
        ('3', '!!!')
    )

    name = models.CharField(max_length=70)
    country = models.CharField('Country', max_length=170)
    street = models.CharField('Street', max_length=70)
    city = models.CharField('City', max_length=70)
    zip_code = models.CharField('ZIP / Postal code', max_length=70, blank=True)
    website = models.CharField(max_length=70, blank=True)
    phone_regex = RegexValidator(regex=r'^\+?1?\d{5,15}$',
                                 message="Phone number must be entered in the format: '+999999999'. Up to 15 digits "
                                         "allowed.")
    phone = models.CharField(validators=[phone_regex], max_length=17)
    email = models.EmailField(max_length=70, blank=True)
    opening_hours_from = models.CharField(max_length=20, null=True)
    opening_hours_to = models.CharField(max_length=20, null=True)
    avatar = models.ImageField(upload_to=user_directory_path, blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True, null=True)
    owner = models.ForeignKey(to=settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, related_name='my_restaurants', null=True)

    price_level = models.CharField(verbose_name='Price level', max_length=2, choices=PRICE_LEVEL, default='0')
    categories = models.CharField(max_length=2, choices=CATEGORIES, default='0')
    WIFI = models.BooleanField(null=True)
    take_away = models.BooleanField(verbose_name='Take away', null=True)
    delivery = models.BooleanField(null=True)
    take_reservations = models.BooleanField(verbose_name='Take reservations', null=True)
    credit_cards = models.BooleanField(verbose_name='Credit cards', null=True)
    waiter_service = models.BooleanField(verbose_name='Waiter service', null=True)
    noise_level = models.CharField(verbose_name='Noise level', max_length=2, choices=NOISE_LEVEL, default='0')

    def __str__(self):
        return f' Restaurant "{self.name}" owned by {self.owner}'

    @property
    def all_categories(self):
        return self.CATEGORIES
