from django.urls import path

from comments.views import ListCommentsFromUser, CreateComment, DeleteComment


urlpatterns = [

    path('review/comment/<int:commented_by_id>/', ListCommentsFromUser.as_view()),
    path('review/comment/<int:review_id>/', CreateComment.as_view()),
    path('review/comment/<int:comment_id>/', DeleteComment.as_view()),

]
