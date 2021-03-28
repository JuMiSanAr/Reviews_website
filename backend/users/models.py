from django.contrib.auth.models import AbstractUser
from django.db import models


def user_directory_path(instance, filename):
    return f'{instance.id}/{filename}'


# Create your models here.
class User(AbstractUser):
    # Field used for authentication
    USERNAME_FIELD = 'email'

    # Additional fields required when using createsuperuser (USERNAME_FIELD and passwords are always required)
    REQUIRED_FIELDS = ['username']

    user_id = models.IntegerField(blank=True, null=True) # only for test
    username = models.CharField(verbose_name='username', max_length=100, blank=True)
    first_name = models.CharField(verbose_name='first name', max_length=50, blank=True)
    last_name = models.CharField(verbose_name='last name',max_length=50, blank=True,)
    email = models.EmailField(unique=True)
    location = models.CharField(verbose_name='user location', max_length=100, blank=True)
    phone = models.CharField(max_length=20, blank=True)
    things_i_love = models.CharField(verbose_name='Things I like', max_length=300, blank=True)
    description = models.CharField(verbose_name='user description', max_length=700, blank=True)
    date_joined = models.DateTimeField(verbose_name='date joined', auto_now_add=True)
    avatar = models.ImageField(upload_to=user_directory_path, blank=True, null=True)

    def __str__(self):
        return self.username

# from relations: my_reviews, liked_reviews, my_comments, restaurants - to check if they are there!!