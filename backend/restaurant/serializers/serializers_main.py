from rest_framework import serializers

from restaurant.models import Restaurant
from reviews.serializers.serializers_basic import ReviewSerializerWithAuthor
from users.serializers.serializers_main import UserSerializerBasic


class RestaurantSerializer(serializers.ModelSerializer):

    owner = UserSerializerBasic(read_only=True)
    restaurant_reviews = ReviewSerializerWithAuthor(read_only=True, many=True)

    class Meta:
        model = Restaurant
        fields = ['id',
                  'name',
                  'owner',
                  'country',
                  'city',
                  'zip_code',
                  'street',
                  'website',
                  'phone',
                  'email',
                  'opening_hours_from',
                  'opening_hours_to',
                  'avatar',
                  'created',
                  'restaurant_reviews',
                  'price_level']
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

    # all_categories = serializers.SerializerMethodField()
    #
    # def get_all_categories(self, instance):
    #     return instance.all_categories

    class Meta:
        model = Restaurant
        fields = ['all_categories']
