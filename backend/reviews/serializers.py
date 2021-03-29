from rest_framework import serializers

from reviews.models import Review
from users.serializers import UserSerializerBasic


class ReviewSerializer(serializers.ModelSerializer):
    author = UserSerializerBasic(read_only=True)

    class Meta:
        model = Review
        fields = '__all__'


class ReviewSerializerBasic(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['author', 'text_content', 'restaurant', 'rating']
