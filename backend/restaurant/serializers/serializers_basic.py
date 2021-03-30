from rest_framework import serializers

from restaurant.models import Restaurant


class RestaurantSerializerBasic(serializers.ModelSerializer):

    categories = serializers.SerializerMethodField(read_only=True)

    def get_categories(self, instance):
        return filter(lambda category: category[0] in instance.categories, instance.all_categories)

    class Meta:
        model = Restaurant
        fields = ['id', 'name', 'created', 'categories', 'average_rating']
