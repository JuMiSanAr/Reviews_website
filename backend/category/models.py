from django.db import models

# Create your models here.t


class Category(models.Model):

    name = models.CharField(max_length=40, blank=False)

    def __str__(self):
        return self.name
