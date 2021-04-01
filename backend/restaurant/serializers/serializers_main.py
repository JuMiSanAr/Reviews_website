import json

from rest_framework import serializers

from category.serializers.serializers_basic import CategoriesBasicSerializer
from restaurant.models import Restaurant
from reviews.serializers.serializers_basic import ReviewSerializerWithAuthor

from users.serializers.serializers_basic import UserSerializerBasic


class RestaurantSerializer(serializers.ModelSerializer):

    owner = UserSerializerBasic(read_only=True)
    restaurant_reviews = ReviewSerializerWithAuthor(read_only=True, many=True)
    categories = CategoriesBasicSerializer(read_only=True, many=True)

    class Meta:
        model = Restaurant
        fields = ['id',
                  'name',
                  'owner',
                  'country',
                  'city',
                  'zip_code',
                  'street',
                  'latitude',
                  'longitude',
                  'website',
                  'phone',
                  'email',
                  'opening_hours',
                  'avatar',
                  'created',
                  'restaurant_reviews',
                  'categories',
                  'price_level',
                  'average_rating']


class BestRatedRestaurantsSerializer(serializers.ModelSerializer):

    best_four = serializers.SerializerMethodField()

    def get_best_four(self, instance):
        restaurants = Restaurant.objects.all()
        ordered_restaurants = sorted(restaurants, key=lambda x: x.average_rating, reverse=True)
        best_four_restaurants = ordered_restaurants[:4]

        return RestaurantSerializer(best_four_restaurants, many=True).data

    class Meta:
        model = Restaurant
        fields = ['best_four']
