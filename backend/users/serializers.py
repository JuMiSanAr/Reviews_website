from django.contrib.auth import get_user_model
from rest_framework import serializers

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'location', 'my_restaurants']
        read_only_fields = ['email']


class UserSerializerBasic(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name']


        # below not used yet
class UserSerializerDetailed(UserSerializerBasic):
    # recipes = RecipeOnlySerializer(many=True)
    # amount_of_recipes = serializers.SerializerMethodField()

    # @staticmethod
    # def get_amount_of_recipes(obj):
    #     return obj.recipes.all().count()

    class Meta:
        model = User
        fields = UserSerializerBasic.Meta.fields + ['email', 'phone']
