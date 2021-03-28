from django.shortcuts import render

# Create your views here.
from rest_framework.generics import CreateAPIView, GenericAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from restaurant.models import Restaurant
from reviews.models import Review
from reviews.serializers import ReviewSerializer


# class CreateUpdateReview(CreateAPIView):
#     '''
#     POST: Create new review for a restaurant.
#     '''
#     #queryset = Review.objects.all()
#     serializer_class = ReviewSerializer
#     permission_classes = [IsAuthenticated]
#     #lookup_url_kwarg = 'restaurant_id'
#     # lookup_field = 'restaurant_id'
#
#     def perform_create(self, serializer):
#         comment = Restaurant.objects.get(id=self.kwargs['pk'])
#         serializer.save(commented_by=self.request.user)


class CreateUpdateReview(GenericAPIView):
    '''
    POST: Create new review for a restaurant.
    '''
    queryset = Restaurant.objects.all()
    serializer_class = ReviewSerializer
    lookup_url_kwarg = 'restaurant_id'
    lookup_field = 'restaurant_id'

    def post(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

