from django.urls import path

from reviews.views import CreateUpdateReview


urlpatterns = [

    path('new/<int:restaurant_id>/', CreateUpdateReview.as_view()),
]
