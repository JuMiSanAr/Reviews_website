from django.urls import path

from category.views import ListAllCategories

urlpatterns = [
    path('restaurants/categories/list/', ListAllCategories.as_view()),
]
