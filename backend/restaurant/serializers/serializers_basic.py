from rest_framework import serializers

from category.serializers.serializers_basic import CategoriesBasicSerializer
from restaurant.models import Restaurant


class RestaurantSerializerBasic(serializers.ModelSerializer):

    categories = CategoriesBasicSerializer

    class Meta:
        model = Restaurant
        fields = ['id', 'name', 'created', 'categories', 'average_rating']
