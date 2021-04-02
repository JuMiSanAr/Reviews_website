
# Create your views here.
from rest_framework import status
from rest_framework.generics import CreateAPIView, ListAPIView, UpdateAPIView, DestroyAPIView
from rest_framework.response import Response
from comments.models import Comment
from comments.permissions import CommentPermission
from comments.serializers import CommentSerializerBasic, CommentSerializer
from reviews.models import Review


class ListCommentsFromUser(ListAPIView):
    '''
    get: Get all the comments from a single user.

    .
    '''
    serializer_class = CommentSerializerBasic
    lookup_url_kwarg = 'commented_by_id'
    lookup_field = 'commented_by_id'

    def get_queryset(self):
        commented_by_id = self.kwargs.get('commented_by_id')
        return Comment.objects.filter(commented_by_id__id=commented_by_id)


class DeleteComment(DestroyAPIView):
    '''
    delete: Delete the comment on the review.

    .
    '''
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()
    lookup_url_kwarg = 'comment_id'
    lookup_field = 'id'
    permission_classes = [CommentPermission]


class UpdateComment(UpdateAPIView):
    '''
    patch: Update comment on the review.

    .
    '''
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()
    lookup_url_kwarg = 'comment_id'
    lookup_field = 'id'
    permission_classes = [CommentPermission]


# class ListCommentsFromUser(MultipleFieldLookupMixin, generics.RetrieveAPIView):
#     queryset = Comment.objects.all()
#     serializer_class = CommentSerializerBasic
#     lookup_fields = ['commented_by_id']
#
#     def retrieve(self, request, *args, **kwargs):
#         instance = Comment.objects.filter(commented_by_id__id=kwargs['commented_by_id'])
#         serializer = self.get_serializer(instance)
#         return Response(serializer.data)
#
#     # def get_queryset(self):
#     #     commented_by_id = self.kwargs.get('commented_by_id')
#     #     return Comment.objects.filter(commented_by_id__id=commented_by_id)


class CreateComment(CreateAPIView):
    '''
    post: Comment on the review.

    .
    '''
    serializer_class = CommentSerializer
    queryset = Review.objects.all()
    lookup_url_kwarg = 'review_id'
    lookup_field = 'review_id'

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        review = Review.objects.get(id=self.kwargs['review_id'])
        serializer.save(comment_content=self.request.data['comment_content'],
                        commented_by=self.request.user,
                        review=review)


# spec. says there should be 1 url for both get & delete, this apparently might be done by creating custom mixin
# MultipleFieldLookupMixin
# https://www.django-rest-framework.org/api-guide/generic-views/#creating-custom-mixins
# fot the time bing of luna project, additional url is created due to time limit


class ToggleLikeComment(UpdateAPIView):
    '''
    patch: Like & unlike a comment.

    .
    '''
    serializer_class = CommentSerializer

    def update(self, request, *args, **kwargs):
        comment = Comment.objects.get(id=kwargs['pk'])
        liked_comments = comment.liked_by.values()

        if len(liked_comments) == 0:
            comment.liked_by.add(request.user)
            return Response(self.get_serializer(comment).data)

        for user in liked_comments:
            if user['id'] == request.user.id:
                comment.liked_by.remove(request.user)
                return Response(self.get_serializer(comment).data)

        comment.liked_by.add(request.user)
        return Response(self.get_serializer(comment).data)
