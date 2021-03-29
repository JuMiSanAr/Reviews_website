from django.urls import path

from users.views import GetAllUsersList, GetUpdateMyUserProfile, GetSpecificUser

urlpatterns = [
    path('users/list/', GetAllUsersList.as_view()),
    path('users/', GetAllUsersList.as_view()),
    path('users/<int:id>/', GetSpecificUser.as_view()),
    path('me/', GetUpdateMyUserProfile.as_view()),
# search API no additoinal endpoint use: /api/users/?search=<str:search_string>/

]
