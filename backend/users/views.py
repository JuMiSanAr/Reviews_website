from django.contrib.auth import get_user_model
from django.db.models import Q
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from rest_framework.generics import ListAPIView, RetrieveUpdateAPIView, RetrieveAPIView

from restaurant.models import Restaurant
from restaurant.serializers import serializers_main as restaurant_serializers
from reviews.models import Review
from reviews.serializers import serializers_main as review_serializers
from users.serializers import serializers_main as user_serializers
from users.serializers.serializers_main import UserSerializer

User = get_user_model()


class GetAllUsersList(ListAPIView):
    '''
    get: Get all users & Search for a user at: /api/users/?search=<str:search_string>/

    .
    '''
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_url_kwarg = 'id'
    lookup_field = 'id'
    permission_classes = []

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
    '''
    get: Get a specific user profile.

    .
    '''
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
    '''
    get: Search for ‘restaurants’, ‘reviews’ or ‘users’. {type: ‘restaurants’, ‘search_string’: ‘Pub’}

    .
    '''
    permission_classes = [IsAuthenticatedOrReadOnly]

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
