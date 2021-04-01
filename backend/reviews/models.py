from django.contrib.auth import get_user_model
from django.db import models

from project import settings
from restaurant.models import Restaurant

User = get_user_model()


class Review(models.Model):
    RATING = (
        ('1', '*'),
        ('2', '**'),
        ('3', '***'),
        ('4', '****'),
        ('5', '*****'),

    )
    text_content = models.CharField(verbose_name='review content', max_length=1000, null=True, blank=True)
    rating = models.CharField(max_length=1, choices=RATING, default='3')
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    author = models.ForeignKey(to=settings.AUTH_USER_MODEL,
                               on_delete=models.CASCADE,
                               related_name='my_reviews',
                               null=True)

    restaurant = models.ForeignKey(to=Restaurant,
                                   related_name='restaurant_reviews',
                                   on_delete=models.CASCADE,
                                   null=True)

    liked_by = models.ManyToManyField(to=User, blank=True, related_name='liked_reviews')

    def __str__(self):
        return f'Review with rating of: {self.rating}, by {self.author} of {self.restaurant}'
