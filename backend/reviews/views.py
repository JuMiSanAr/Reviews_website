# Create your views here.
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response

from restaurant.models import Restaurant
from reviews.models import Review
from reviews.serializers.serializers_main import ReviewSerializer


class CreateReview(CreateAPIView):
    '''
    POST: Create new review for a restaurant.
    '''
    queryset = Restaurant.objects.all()
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
