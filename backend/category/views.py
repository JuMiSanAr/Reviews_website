from django.shortcuts import render

# Create your views here.
from rest_framework.generics import ListAPIView

from category.models import Category
from category.serializers.serializers_main import CategoriesSerializer


class ListAllCategories(ListAPIView):
    '''
    GET: Get all categories

    .
    '''

    queryset = Category.objects.all()
    serializer_class = CategoriesSerializer
