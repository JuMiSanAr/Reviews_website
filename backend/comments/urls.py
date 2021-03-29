from django.urls import path

from comments.views import ListCommentsFromUser, DeleteComment, CreateComment, ToggleLikeComment

urlpatterns = [

    path('review/comment/<int:commented_by_id>/', ListCommentsFromUser.as_view()),
    path('review/comment/new/<int:review_id>/', CreateComment.as_view()),
    path('review/comment/delete/<int:comment_id>/', DeleteComment.as_view()),
    path('review/comment/like/<int:pk>', ToggleLikeComment.as_view()),
         # POST: Like a review.
    #path('review/comment/like/<int:comment_id>/ DELETE: Like a review.

#/api/reviews/like/<int:review_id>/ DELETE: Remove like from the review.

    # path('review/comment/DELETE/<int:comment_id>/', DeleteComment.as_view()),
    # path('review/comment/<int:commented_by_id>/', GetPutDeleteComment.as_view()),
    # path('review/comment/<int:review_id>/', GetPutDeleteComment.as_view()),
    # path('review/comment/<int:comment_id>/', GetPutDeleteComment.as_view()),

]
