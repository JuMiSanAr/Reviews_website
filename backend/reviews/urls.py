from django.urls import path

from reviews.views import CreateReviewView, ListRestaurantReviewsView, ListUserReviewsView, GetUpdateDeleteReviewView, \
    GetReviewsCommentedByUser, ToggleReviewLikeView, ListOfLikedReviewsView, ListAllReviewsView

urlpatterns = [
    path('', ListAllReviewsView.as_view()),
    path('new/<int:restaurant_id>/', CreateReviewView.as_view()),
    path('restaurant/<int:restaurant_id>/', ListRestaurantReviewsView.as_view()),
    path('user/<int:user_id>/', ListUserReviewsView.as_view()),
    path('<int:review_id>/', GetUpdateDeleteReviewView.as_view()),
    path('comments/', GetReviewsCommentedByUser.as_view()),
    path('like/<int:review_id>/', ToggleReviewLikeView.as_view()),
    path('likes/', ListOfLikedReviewsView.as_view()),
]
