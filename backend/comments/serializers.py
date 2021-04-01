from rest_framework import serializers

from comments.models import Comment
from reviews.serializers.serializers_main import ReviewSerializer
from users.serializers.serializers_basic import UserSerializerBasic


class CommentSerializer(serializers.ModelSerializer):
    commented_by = UserSerializerBasic(read_only=True)
    liked_by = UserSerializerBasic(read_only=True, many=True)
    review = ReviewSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = '__all__'
        read_only_fields = ['comment_content', 'commented_by', 'review']


class CommentSerializerBasic(serializers.ModelSerializer):
    commented_by = UserSerializerBasic(read_only=True)
    liked_by = UserSerializerBasic(read_only=True, many=True)

    class Meta:
        model = Comment
        fields = ['id', 'review', 'commented_by', 'comment_content', 'liked_by']
