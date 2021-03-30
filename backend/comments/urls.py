from django.urls import path

from comments.views import ListCommentsFromUser, DeleteComment, CreateComment, ToggleLikeComment, UpdateComment

urlpatterns = [

    path('review/comment/<int:commented_by_id>/', ListCommentsFromUser.as_view()),
    path('review/comment/new/<int:review_id>/', CreateComment.as_view()),
    path('review/comment/delete/<int:comment_id>/', DeleteComment.as_view()),
    path('review/comment/update/<int:comment_id>/', UpdateComment.as_view()),
    path('review/comment/like/<int:pk>/', ToggleLikeComment.as_view()),

]
