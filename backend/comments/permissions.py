from rest_framework.permissions import BasePermission


class CommentDeletePermission(BasePermission):
    def has_object_permission(self, request, view, obj):
        if obj.user and obj.user == request.user.profile:
            return True
        elif request.method == 'GET' or request.user.is_superuser:
            return True
