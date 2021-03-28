from django.contrib.auth import get_user_model
from django.db.models import Q
from rest_framework.response import Response
from rest_framework.generics import ListAPIView, RetrieveUpdateAPIView, RetrieveAPIView


from users.serializers import UserSerializer

User = get_user_model()


class GetAllUsersList(ListAPIView):
    """
     get = Get all users. (not required by spec)

    .Search for a user: /api/users/?search=<str:search_string>/
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_url_kwarg = 'id'
    lookup_field = 'id'

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        search = request.query_params.get('search')

        if search:
            queryset = queryset.filter(Q(username__icontains=search) |
                                           Q(email__icontains=search) |
                                           Q(first_name__icontains=search) |
                                           Q(last_name__icontains=search))

            serializer = UserSerializer(queryset, many=True)
        else:
            serializer = UserSerializer(queryset, many=True)
        return Response(serializer.data)


class GetSpecificUser(RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_url_kwarg = 'id'
    lookup_field = 'id'


class GetUpdateMyUserProfile(RetrieveUpdateAPIView):
    '''
    get: Get the user profile.

    .

    patch: Update the user profile.

    .
    '''
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user
