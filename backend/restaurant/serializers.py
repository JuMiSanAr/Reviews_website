from rest_framework import serializers

from restaurant.models import Restaurant
from users.serializers import UserSerializerBasic


class RestaurantSerializer(serializers.ModelSerializer):
    owner = UserSerializerBasic(read_only=True)

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
        fields = ['id', 'name',  'created', 'owner']
# 'category',


class RestaurantSerializerCategory(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ['id',]
# category',


class RestaurantSerializerHome(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ['name', 'country', 'city', 'rating']


class AllCategoriesSerializer(serializers.ModelSerializer):

    all_categories = serializers.SerializerMethodField()

    def get_all_categories(self, instance):
        return instance.all_categories

    class Meta:
        model = Restaurant
        fields = ['all_categories']
