# Create your views here.
from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveUpdateDestroyAPIView, UpdateAPIView
from rest_framework.response import Response

from restaurant.models import Restaurant
from reviews.models import Review
from reviews.permissions import IsAuthorOrAdmin
from reviews.serializers.serializers_basic import ReviewSerializerWithAuthor, ReviewSerializerWithRestaurant
from reviews.serializers.serializers_main import ReviewSerializer

User = get_user_model()


class CreateReviewView(CreateAPIView):
    '''
    POST: Create new review for a restaurant.
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
    '''
    GET: List reviews for a restaurant.
    '''
    serializer_class = ReviewSerializerWithAuthor
    lookup_url_kwarg = 'restaurant_id'
    lookup_field = 'id'

    def get_queryset(self):
        restaurant = Restaurant.objects.get(id=self.kwargs['restaurant_id'])
        return Review.objects.filter(restaurant=restaurant)


class ListUserReviewsView(ListAPIView):
    '''
    GET: List reviews from a user

    .
    '''
    serializer_class = ReviewSerializerWithRestaurant
    lookup_url_kwarg = 'user_id'
    lookup_field = 'id'

    def get_queryset(self):
        author = User.objects.get(id=self.kwargs['user_id'])
        return Review.objects.filter(author=author)


class GetUpdateDeleteReviewView(RetrieveUpdateDestroyAPIView):
    '''
    GET: Get single review.
    PATCH: Update single review.
    DELETE: Delete single review

    .
    '''
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = [IsAuthorOrAdmin]
    lookup_url_kwarg = 'review_id'
    lookup_field = 'id'


class GetReviewsCommentedByUser(ListAPIView):
    '''
    GET: List of distinct reviews with comments from the user

    .
    '''
    serializer_class = ReviewSerializer

    def get_queryset(self):
        user = self.request.user
        return Review.objects.filter(comments__commented_by=user).distinct()


class ToggleReviewLikeView(UpdateAPIView):
        '''
        like & unlike a review

        .
        '''
        serializer_class = ReviewSerializer
        lookup_url_kwarg = 'review_id'
        lookup_field = 'id'

        def update(self, request, *args, **kwargs):
            review = Review.objects.get(id=kwargs['review_id'])
            likes_in_review = review.liked_by.values()

            if len(likes_in_review) == 0:
                review.liked_by.add(request.user)
                return Response(self.get_serializer(review).data)

            for user in likes_in_review:
                if user['id'] == request.user.id:
                    review.liked_by.remove(request.user)
                    return Response(self.get_serializer(review).data)

            review.liked_by.add(request.user)
            return Response(self.get_serializer(review).data)


class ListOfLikedReviewsView(ListAPIView):
    serializer_class = ReviewSerializer

    def get_queryset(self):
        return Review.objects.filter(liked_by=self.request.user).distinct()
