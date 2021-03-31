# Create your views here.
from statistics import mean

from rest_framework import status
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView, RetrieveAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from restaurant.models import Restaurant
from restaurant.permissions import IsOwnerOrAdmin
from restaurant.serializers.serializers_basic import RestaurantSerializerBasic
from restaurant.serializers.serializers_main import RestaurantSerializer, BestRatedRestaurantsSerializer


class GetRestaurantsList(ListAPIView):
    '''
    get: Get the list of all the restaurants.

    .
    '''
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    permission_classes = [AllowAny]


class GetRestaurantByUser(ListAPIView):
    '''
    get: Get the all the restaurants created by a specific user in chronological order.

    .
    '''
    serializer_class = RestaurantSerializerBasic
    lookup_url_kwarg = 'owner_id'

    def get_queryset(self):
        owner_id = self.kwargs.get('owner_id')
        return Restaurant.objects.filter(owner_id__id=owner_id).order_by('-created')


class GetRestaurantByCategory(ListAPIView):
    '''
    get: Get all the restaurants by category.

    .
    '''
    serializer_class = RestaurantSerializer
    lookup_url_kwarg = 'category_id'

    def get_queryset(self):
        category_id = self.kwargs['category_id']
        return Restaurant.objects.filter(categories__icontains=category_id)


class CreateRestaurants(CreateAPIView):
    '''
    post: Create a new restaurant.

    .
    '''
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user, categories=self.request.data['categories'])


class GetUpdateDeleteRestaurants(RetrieveUpdateDestroyAPIView):
    '''
    get: Get the details of a restaurant by providing the id of the restaurant.

    .

    patch: Update a restaurant by id (only by owner or restaurant admin).

    .

    delete: Delete a restaurant by id (only by owner or restaurant admin).

    .
    '''
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    permission_classes = [IsOwnerOrAdmin]
    lookup_url_kwarg = 'id'
    lookup_field = 'id'

    def get(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

    def patch(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def delete(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# class GetCategoriesListView(ListAPIView):
#     '''
#     get: Get list of all restaurant categories.
#
#     .
#     '''
#
#     serializer_class = AllCategoriesSerializer
#
#     def get_queryset(self):
#         first_restaurant = Restaurant.objects.first()
#         queryset = Restaurant.objects.filter(id=first_restaurant.id)
#         return queryset


class HomeRestaurantView(ListAPIView):
    '''
    get: Get list of the best rated restaurants.

    .
    '''

    serializer_class = BestRatedRestaurantsSerializer
    permission_classes = []

    def get_queryset(self):
        first_restaurant = Restaurant.objects.first()
        queryset = Restaurant.objects.filter(id=first_restaurant.id)
        return queryset
