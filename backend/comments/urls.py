from django.urls import path

 #GetPutDeleteComment
from comments.views import ListCommentsFromUser, DeleteComment, CreateComment

urlpatterns = [

    path('review/comment/<int:commented_by_id>/', ListCommentsFromUser.as_view()),
    path('review/comment/new/<int:review_id>/', CreateComment.as_view()),
    path('review/comment/delete/<int:comment_id>/', DeleteComment.as_view()),

    # path('review/comment/DELETE/<int:comment_id>/', DeleteComment.as_view()),
    # path('review/comment/<int:commented_by_id>/', GetPutDeleteComment.as_view()),
    # path('review/comment/<int:review_id>/', GetPutDeleteComment.as_view()),
    # path('review/comment/<int:comment_id>/', GetPutDeleteComment.as_view()),

]
