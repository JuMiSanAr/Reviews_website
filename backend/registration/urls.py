from django.urls import path

from registration.views import NewRegistrationView, ValidationView, PasswordResetValidationView, PasswordResetView

urlpatterns = [
    path('registration/', NewRegistrationView.as_view()),
    path('registration/validate/', ValidationView.as_view()),
    path('auth/password-reset/', PasswordResetView.as_view()),
    path('auth/password-reset/validate/', PasswordResetValidationView.as_view()),
]



