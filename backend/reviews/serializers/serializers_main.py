from rest_framework import serializers

from reviews.models import Review
from users.serializers.serializers_main import UserSerializerBasic


class ReviewSerializer(serializers.ModelSerializer):

    author = UserSerializerBasic(read_only=True)

    class Meta:
        model = Review
        fields = '__all__'
