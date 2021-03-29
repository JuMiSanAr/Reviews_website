from django.contrib.auth import get_user_model
from django.db.models import Q
from rest_framework import serializers
from rest_framework.response import Response
from rest_framework.generics import ListAPIView, RetrieveUpdateAPIView, RetrieveAPIView

from restaurant import serializers as restaurant_serializers
from restaurant.models import Restaurant
from reviews import serializers as review_serializers
from reviews.models import Review
from users import serializers as user_serializers
from users.serializers import UserSerializer

User = get_user_model()


class GetAllUsersList(ListAPIView):
    """
    get = Get all users. (not required by spec)

    Search for a user: /api/users/?search=<str:search_string>/
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_url_kwarg = 'id'
    lookup_field = 'id'

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        search = request.query_params.get('search')

        if search:
            queryset = queryset.filter(Q(username__icontains=search) |
                                       Q(email__icontains=search) |
                                       Q(first_name__icontains=search) |
                                       Q(last_name__icontains=search))

            serializer = UserSerializer(queryset, many=True)
        else:
            serializer = UserSerializer(queryset, many=True)
        return Response(serializer.data)


class GetSpecificUser(RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_url_kwarg = 'id'
    lookup_field = 'id'


class GetUpdateMyUserProfile(RetrieveUpdateAPIView):
    '''
    get: Get the user profile.

    .

    patch: Update the user profile.

    .
    '''
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user


class SearchView(ListAPIView):

    def get_serializer_class(self):
        type = self.request.query_params.get('type')

        if type == 'restaurants':
            return restaurant_serializers.RestaurantSerializer
        elif type == 'reviews':
            return review_serializers.ReviewSerializer
        elif type == 'users':
            return user_serializers.UserSerializer

    def get_queryset(self):
        type = self.request.query_params.get('type')
        search = self.request.query_params.get('search')

        if type == 'restaurants':
            return Restaurant.objects.filter(Q(name__icontains=search) |
                                             Q(country__icontains=search) |
                                             Q(city__icontains=search))

        elif type == 'reviews':
            return Review.objects.filter(Q(text_content__icontains=search) |
                                         Q(restaurant__name__icontains=search) |
                                         Q(author__username__icontains=search))

        elif type == 'users':
            return User.objects.filter(Q(username__icontains=search) |
                                       Q(email__icontains=search))
