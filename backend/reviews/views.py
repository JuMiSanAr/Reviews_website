from django.shortcuts import render

# Create your views here.
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response

from restaurant.models import Restaurant
from reviews.models import Review
from reviews.serializers import ReviewSerializer

class CreateReview(CreateAPIView):
    '''
    POST: Create new review for a restaurant.
    '''
    queryset = Restaurant.objects.all()
    serializer_class = ReviewSerializer
    lookup_url_kwarg = 'restaurant_id'
    lookup_field = 'id'

    def create(self, request, *args, **kwargs):
        post = self.get_object()
        review = Review(author=request.user, post=post, review=request.data['review'])
        review.save()
        return Response(self.get_serializer(instance=review).data)

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)





