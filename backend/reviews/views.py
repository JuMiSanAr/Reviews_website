# Create your views here.
from django.contrib.auth import get_user_model
from rest_framework.generics import CreateAPIView, ListAPIView
from rest_framework.response import Response

from restaurant.models import Restaurant
from reviews.models import Review
from reviews.serializers.serializers_basic import ReviewSerializerWithAuthor, ReviewSerializerWithRestaurant
from reviews.serializers.serializers_main import ReviewSerializer

User = get_user_model()


class CreateReviewView(CreateAPIView):
    '''
    POST: Create new review for a restaurant.

    .
    '''
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    lookup_url_kwarg = 'restaurant_id'
    lookup_field = 'id'

    def create(self, request, *args, **kwargs):
        restaurant = Restaurant.objects.get(id=kwargs['restaurant_id'])
        rating = self.request.data['rating']

        if rating in ['1', '2', '3', '4', '5']:
            review = Review(author=self.request.user,
                            restaurant=restaurant,
                            text_content=request.data['review'],
                            rating=rating)
            review.save()
            return Response(self.get_serializer(review).data)

        else:
            return Response("Please introduce a valid rating (1-5)", status=400)


class ListRestaurantReviewsView(ListAPIView):
    serializer_class = ReviewSerializerWithAuthor
    lookup_url_kwarg = 'restaurant_id'
    lookup_field = 'id'

    def get_queryset(self):
        restaurant = Restaurant.objects.get(id=self.kwargs['restaurant_id'])
        return Review.objects.filter(restaurant=restaurant)


class ListUserReviewsView(ListAPIView):
    serializer_class = ReviewSerializerWithRestaurant
    lookup_url_kwarg = 'user_id'
    lookup_field = 'id'

    def get_queryset(self):
        author = User.objects.get(id=self.kwargs['user_id'])
        return Review.objects.filter(author=author)
