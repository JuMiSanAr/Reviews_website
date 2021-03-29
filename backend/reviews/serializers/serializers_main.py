from rest_framework import serializers

from restaurant.serializers.serializers_basic import RestaurantSerializerBasic
from reviews.models import Review
from users.serializers.serializers_basic import UserSerializerBasic


class ReviewSerializer(serializers.ModelSerializer):

    author = UserSerializerBasic(read_only=True)
    restaurant = RestaurantSerializerBasic(read_only=True)

    class Meta:
        model = Review
        fields = '__all__'
