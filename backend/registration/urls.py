from django.urls import path

from registration.views import NewRegistrationView, ValidationView

urlpatterns = [
    path('', NewRegistrationView.as_view()),
    path('validate/', ValidationView.as_view())
]



