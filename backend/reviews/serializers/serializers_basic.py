from rest_framework import serializers

from restaurant.serializers.serializers_basic import RestaurantSerializerBasic
from reviews.models import Review
from users.serializers.serializers_basic import UserSerializerBasic


class ReviewSerializerWithAuthor(serializers.ModelSerializer):

    liked_by = UserSerializerBasic(read_only=True, many=True)
    author = UserSerializerBasic(read_only=True)

    class Meta:
        model = Review
        fields = ['author', 'text_content', 'rating', 'created', 'modified', 'liked_by']


class ReviewSerializerWithRestaurant(serializers.ModelSerializer):
    liked_by = UserSerializerBasic(read_only=True, many=True)
    restaurant = RestaurantSerializerBasic(read_only=True)

    class Meta:
        model = Review
        fields = ['restaurant', 'text_content', 'rating', 'created', 'modified', 'liked_by']