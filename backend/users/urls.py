from django.urls import path

from users.views import GetAllUsersList, GetUpdateMyUserProfile, GetSpecificUser, SearchView

urlpatterns = [
    path('users/list/', GetAllUsersList.as_view()),
    path('users/', GetAllUsersList.as_view()),
    path('users/<int:id>/', GetSpecificUser.as_view()),
    path('me/', GetUpdateMyUserProfile.as_view()),

    # Search works for restaurants, reviews and users
    path('search/', SearchView.as_view())
]
