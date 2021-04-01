from django.shortcuts import render

# Create your views here.
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated

from category.models import Category
from category.serializers.serializers_main import CategoriesSerializer


class ListAllCategories(ListAPIView):
    '''
    get: Get all categories.

    .
    '''

    queryset = Category.objects.all()
    serializer_class = CategoriesSerializer
    permission_classes = []
