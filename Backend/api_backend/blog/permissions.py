from rest_framework import permissions

class IsOwnerOrAdminOrReadOnly(permissions.BasePermission):
    """
    Custom permission: Everyone can view,
    only the owner or an admin can edit/delete.
    """

    def has_object_permission(self, request, view, obj):
        # SAFE_METHODS = GET, HEAD, OPTIONS
        if request.method in permissions.SAFE_METHODS:
            return True

        # Allow if user is admin/staff
        if request.user and request.user.is_staff:
            return True

        # Allow if user is the author
        return obj.author == request.user
