from rest_framework import serializers

from restaurant.models import Restaurant


class RestaurantSerializerBasic(serializers.ModelSerializer):

    class Meta:
        model = Restaurant
        fields = ['id', 'name', 'created', 'categories', 'average_rating']
