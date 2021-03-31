
from django.urls import path

from restaurant.views import GetRestaurantsList, CreateRestaurants, GetUpdateDeleteRestaurants, \
    GetRestaurantByUser, GetRestaurantByCategory, HomeRestaurantView

urlpatterns = [
    path('restaurants/', GetRestaurantsList.as_view()),
    path('restaurants/new/', CreateRestaurants.as_view()),
    path('restaurants/<int:id>/', GetUpdateDeleteRestaurants.as_view()),
    path('restaurants/user/<int:owner_id>/', GetRestaurantByUser.as_view()),
    path('restaurants/category/<int:category_id>/', GetRestaurantByCategory.as_view()),
    path('home/', HomeRestaurantView.as_view()),

]
