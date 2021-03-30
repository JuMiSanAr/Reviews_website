from rest_framework import serializers

from category.models import Category
from restaurant.serializers.serializers_basic import RestaurantSerializerBasic


class CategoriesSerializer(serializers.ModelSerializer):

    restaurants = RestaurantSerializerBasic

    class Meta:
        model = Category
        fields = ['id', 'name', 'restaurants']
