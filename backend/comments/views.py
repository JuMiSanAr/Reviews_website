from django.shortcuts import render

# Create your views here.
from rest_framework.generics import DestroyAPIView, CreateAPIView, ListAPIView, get_object_or_404, UpdateAPIView
from rest_framework.response import Response
from comments.models import Comment
from comments.permissions import CommentDeletePermission
from comments.serializers import CommentSerializer, CommentSerializerBasic
from reviews.models import Review


class ListCommentsFromUser(ListAPIView):
    '''
    GET: Get all the comments from a single user.

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
    permission_classes = [CommentDeletePermission]


class CreateComment(CreateAPIView):
    '''
    post: Comment on the review.

    .
    '''
    serializer_class = CommentSerializer
    queryset = Review.objects.all()
    permission_classes = []
    lookup_url_kwarg = 'review_id'
    lookup_field = 'review_id'

    def create(self, request, *args, **kwargs):
        post = get_object_or_404(self.get_queryset(), id=kwargs['review_id'])
        comment = Comment(comment_content=request.data['comment_content'], commented_by=request.user,
                          review=post)
        comment.save()
        return Response(self.get_serializer(comment).data)


# spec. says there should be 1 url for both get & delete, this apparently might be done by creating custom mixin
# MultipleFieldLookupMixin
# https://www.django-rest-framework.org/api-guide/generic-views/#creating-custom-mixins
# fot the time bing of luna project, luna creator adjusted url due to react calling so there is new url :)


class ToggleLikeComment(UpdateAPIView):
    '''
    like&unlike a comment

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
            if user['user_id'] == request.user.id:
                comment.liked_by.remove(request.user)
                return Response(self.get_serializer(comment).data)

        comment.liked_by.add(request.user)
        return Response(self.get_serializer(comment).data)
