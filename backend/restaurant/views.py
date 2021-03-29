from django.shortcuts import render

# Create your views here.
from rest_framework import permissions, status
from rest_framework.generics import ListAPIView, CreateAPIView, GenericAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser
from rest_framework.response import Response

from restaurant.models import Restaurant
from restaurant.permissions import IsOwnerOrAdmin
from restaurant.serializers import RestaurantSerializer, RestaurantSerializerCategory, RestaurantSerializerBasic


class GetRestaurantsList(ListAPIView):
    '''
    GET: Get the list of all the restaurant.
    '''
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    permission_classes = [AllowAny]


class GetRestaurantByUser(ListAPIView):
    '''
    get: Get the all the restaurants created by a specific user in chronological order.
    '''
    serializer_class = RestaurantSerializerBasic
    lookup_url_kwarg = 'owner_id'

    def get_queryset(self):
        owner_id = self.kwargs.get('owner_id')
        return Restaurant.objects.filter(owner_id__id=owner_id).order_by('-created')


class GetRestaurantByCategory(ListAPIView):
    '''
    get: Get all the restaurants by category.
    '''
    serializer_class = RestaurantSerializerBasic
    lookup_url_kwarg = 'category_id'

    def get_queryset(self):
        category_id = self.kwargs.get('category_id')
        return Restaurant.objects.filter(category_id__id=category_id)


class CreateRestaurants(CreateAPIView):
    '''
    POST: Create a new restaurant.
    '''
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class GetUpdateDeleteRestaurants(GenericAPIView):
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

    # not required by spec
    # def put(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     serializer = self.get_serializer(instance, data=request.data)
    #     serializer.is_valid(raise_exception=True)
    #     serializer.save()
    #     return Response(serializer.data)

    # why the hell is patch not working???!!!
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

# class HomeRestaurantView(ListCreateAPIView):
#     def get(self, request, *args, **kwargs):
