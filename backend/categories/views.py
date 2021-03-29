from django.shortcuts import render


# Create your views here.
from rest_framework.generics import ListAPIView

from categories.models import Categories
from categories.serializers import CategoriesSerializer


class GetCategoriesList(ListAPIView):
    '''
    get: Get the list of all the categories.

    .
    '''
    queryset = Categories.objects.all()
    serializer_class = CategoriesSerializer