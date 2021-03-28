from django.urls import path

from reviews.views import CreateUpdateReview


urlpatterns = [
    #path('likes', GetAllUsersList.as_view()),

#reviews for comments views

    path('new/<int:restaurant_id>/', CreateUpdateReview.as_view()),
]
