from django.contrib.auth import get_user_model
from rest_framework import serializers

from restaurant.serializers.serializers_basic import RestaurantSerializerBasic
from users.serializers.serializers_basic import UserSerializerBasic

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):

    my_restaurants = RestaurantSerializerBasic(read_only=True, many=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'location', 'my_restaurants']
        read_only_fields = ['email']


# below not used

# class UserSerializerDetailed(UserSerializerBasic):
#     # recipes = RecipeOnlySerializer(many=True)
#     # amount_of_recipes = serializers.SerializerMethodField()
#
#     # @staticmethod
#     # def get_amount_of_recipes(obj):
#     #     return obj.recipes.all().count()
#
#     class Meta:
#         model = User
#         fields = UserSerializerBasic.Meta.fields + ['email', 'phone']
