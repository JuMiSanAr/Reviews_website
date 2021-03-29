from rest_framework import serializers

from comments.models import Comment
from reviews.serializers.serializers_basic import ReviewSerializerBasic
from users.serializers.serializers_main import UserSerializerBasic


class CommentSerializer(serializers.ModelSerializer):
    commented_by = UserSerializerBasic(read_only=True)
    liked_by = UserSerializerBasic(read_only=True)
    review = ReviewSerializerBasic

    class Meta:
        model = Comment
        fields = '__all__'


class CommentSerializerBasic(serializers.ModelSerializer):
    commented_by = UserSerializerBasic(read_only=True)

    class Meta:
        model = Comment
        fields = ['id', 'review', 'commented_by', 'comment_content', 'liked_by']


