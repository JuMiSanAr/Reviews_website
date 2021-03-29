from django.urls import path

from categories.views import GetCategoriesList

urlpatterns = [
    path('category/list/', GetCategoriesList.as_view()),

]

