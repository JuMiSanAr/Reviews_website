from rest_framework import serializers

from restaurant.models import Restaurant
from users.serializers import UserSerializerBasic


class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = '__all__'
    # Name
    # Category
    # Country
    # Street
    # City
    # ZIP
    # Website
    # Phone
    # E - Mail
    # opening_hours
    # price_level
    # Image


class RestaurantSerializerBasic(serializers.ModelSerializer):
    owner = UserSerializerBasic(read_only=True)

    class Meta:
        model = Restaurant
        fields = ['id', 'name', 'category', 'created', 'owner']


class RestaurantSerializerCategory(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ['category', ]

class RestaurantSerializerHome(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ['cname', 'country', 'city', 'rating']