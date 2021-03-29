from rest_framework import serializers

from reviews.models import Review


class ReviewSerializerBasic(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['author', 'text_content', 'rating']
