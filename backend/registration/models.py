from django.contrib.auth import get_user_model
from random import random

from django.db import models

User = get_user_model()


# Create your models here.
def code_generator(length=5):
    numbers = '0123456789'
    return ''.join(random.choice(numbers) for _ in range(length))


class Registration(models.Model):
    user = models.OneToOneField(
        to=User,
        on_delete=models.CASCADE,
        related_name='registration_profile'
    )

    code = models.CharField(
        help_text='random code used for registration and for password reset',
        max_length=15,
        default=code_generator
    )

    created = models.DateTimeField(auto_now_add=True)

    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'Registration profile {self.pk}: {self.user.email}'
