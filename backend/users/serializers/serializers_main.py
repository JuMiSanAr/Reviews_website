from django.contrib.auth import get_user_model
from rest_framework import serializers

from restaurant.serializers.serializers_basic import RestaurantSerializerBasic


User = get_user_model()


class UserSerializer(serializers.ModelSerializer):

    my_restaurants = RestaurantSerializerBasic(read_only=True, many=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'location', 'description', 'my_restaurants']
        read_only_fields = ['email']


