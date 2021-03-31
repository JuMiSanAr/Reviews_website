from rest_framework.permissions import BasePermission


class CommentPermission(BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method == 'GET':
            return True
        if obj.commented_by == request.user or request.user.is_superuser:
            return True

