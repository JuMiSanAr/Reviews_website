from django.shortcuts import render

# Create your views here.
from rest_framework.generics import GenericAPIView, DestroyAPIView, CreateAPIView, ListAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from comments.models import Comment
from comments.permissions import CommentDeletePermission
from comments.serializers import CommentSerializer, CommentSerializerBasic
from reviews.models import Review


class ListCommentsFromUser(ListAPIView):
    '''
    GET: Get all the comments from a single user.
    '''
    serializer_class = CommentSerializerBasic
    lookup_url_kwarg = 'commented_by_id'

    def get_queryset(self):
        commented_by_id = self.kwargs.get('commented_by_id')
        return Comment.objects.filter(commented_by_id__id=commented_by_id)


class CreateComment(CreateAPIView):
    '''
    post: Comment on the review.

    .
    '''
    serializer_class = CommentSerializer
    queryset = Review.objects.all()
    lookup_url_kwarg = 'review_id'
    lookup_field = 'id'

    def create(self, request, *args, **kwargs):
        post = self.get_object()
        comment = Comment(user=request.user, post=post, comment=request.data['comment'])
        comment.save()
        return Response(self.get_serializer(instance=comment).data)


# condition to check if the review is there
# perform for the owner - to make it automatic and read only in serializer for owner 

class DeleteComment(DestroyAPIView):
    '''
    delete: Delete the comment on the review.

    .
    '''
    serializer_class = CommentSerializer
    queryset = Review.objects.all()
    lookup_url_kwarg = 'comment_id'
    permission_classes = [CommentDeletePermission]

    # def delete(self, request, *args, **kwargs):
    #     review = self.get_object()
    #     comment = Comment(user=request.user, delete=review, comment=request.data['comment'])
    #     comment.save()
    #     return Response(self.get_serializer(instance=comment).data)
