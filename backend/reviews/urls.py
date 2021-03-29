from django.urls import path

from reviews.views import CreateReview


urlpatterns = [
    path('new/<int:restaurant_id>/', CreateReview.as_view()),

]
