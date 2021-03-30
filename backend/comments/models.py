from django.contrib.auth import get_user_model
from django.db import models

# Create your models here.

from reviews.models import Review

User = get_user_model()


class Comment(models.Model):
    commented_by = models.ForeignKey(to=User, related_name='my_comments', on_delete=models.CASCADE, null=True,
                                     blank=True)
    review = models.ForeignKey(to=Review, related_name='comments', on_delete=models.CASCADE, null=True, blank=True)
    comment_content = models.CharField(verbose_name='comment content', max_length=1000, null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    modified = models.DateTimeField(auto_now=True, null=True, blank=True, )
    liked_by = models.ManyToManyField(to=User, related_name='liked_comments', blank=True)

    def __str__(self):
        return f' Comment "{self.comment_content}" by {self.commented_by} for {self.review}'
