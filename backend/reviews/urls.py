from django.urls import path

from reviews.views import CreateReviewView, ListRestaurantReviewsView, ListUserReviewsView

urlpatterns = [
    path('new/<int:restaurant_id>/', CreateReviewView.as_view()),
    path('restaurant/<int:restaurant_id>/', ListRestaurantReviewsView.as_view()),
    path('user/<int:user_id>/', ListUserReviewsView.as_view()),

]
