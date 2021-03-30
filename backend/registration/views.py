import random

from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password
from django.core.exceptions import ValidationError
from django.core.mail import send_mail
import os

# Create your views here.
from rest_framework import status
from rest_framework.generics import CreateAPIView, UpdateAPIView
from rest_framework.response import Response

from registration.models import Registration
from registration.serializers import RegistrationSerializer

User = get_user_model()


def code_generator(length=5):
    numbers = '0123456789'
    return ''.join(random.choice(numbers) for _ in range(length))


class NewRegistrationView(CreateAPIView):
    '''
    Sends email with registration code and creates a new user

    .
    '''
    serializer_class = RegistrationSerializer
    permission_classes = []

    def perform_create(self, serializer):
        email = self.request.data["email"]
        code = code_generator()

        send_mail(
            'Luna registration code',
            f'Your registration code for the Luna Website is : {code}',
            os.environ.get('DEFAULT_FROM_EMAIL'),
            [email],
            fail_silently=False,
        )
        new_user = User(email=email, username=code)
        new_user.save()
        serializer.save(code=code, user=new_user)


class ValidationView(UpdateAPIView):
    '''
    Validates the code and completes the user profile

    .
    '''
    serializer_class = RegistrationSerializer
    permission_classes = []

    def patch(self, request, *args, **kwargs):
        passed_code = self.request.data["code"]
        user = User.objects.get(email=self.request.data["email"])
        registration = Registration.objects.get(user=user)

        password1 = self.request.data["password1"]
        password2 = self.request.data["password2"]

        if passed_code == registration.code:
            if password1 == password2:
                registration.used = True
                registration.save()
                user.username = self.request.data["username"]
                user.first_name = self.request.data["first_name"]
                user.last_name = self.request.data["last_name"]
                user.password = make_password(self.request.data["password1"])
                user.phone = self.request.data["phone"]
                user.location = self.request.data['location']
                user.things_i_like = self.request.data["things_I_like"]
                user.description = self.request.data["description"]
                user.avatar = self.request.data["avatar"]
                user.save()
                return Response("Code matched successfully")
            else:
                return Response("Password1 didn't match password2", status=401)
        else:
            return Response("Code in request didn't match registration code for that email", status=401)


class PasswordResetView(UpdateAPIView):
    '''
    Sends email with link to reset password

    .
    '''
    serializer_class = RegistrationSerializer
    permission_classes = []

    def patch(self, request, *args, **kwargs):
        try:
            user = User.objects.get(email=self.request.data['email'])
            data = {
                'code': code_generator(),
                'used': False,
                'action': 'PR',
                'email': request.data['email']
            }
            serializer = self.get_serializer(user.registration_profile, data=data, partial=True)
            serializer.is_valid(raise_exception=True)
            serializer.save(code=data['code'])
            send_mail(  # don't forget to change the url for resetting the password!!!
                'Password reset code',
                f"Here is your code for resetting your password {data['code']} \n "
                f"Click on this link in order to proceed: https://luna.propulsion-learn.ch//password-reset/validation/",
                os.environ.get('DEFAULT_FROM_EMAIL'),
                [user.email],
                fail_silently=False,
            )
            return Response(status=status.HTTP_200_OK)
        except User.DoesNotExist:
            return Response({'error': 'Please enter a valid email'},
                            status=status.HTTP_400_BAD_REQUEST)


class PasswordResetValidationView(UpdateAPIView):
    '''
    Validates password-reset code and updates password

    .
    '''
    serializer_class = RegistrationSerializer
    permission_classes = []

    def patch(self, request, *args, **kwargs):
        code_from_request = request.data['code']
        try:
            registration = Registration.objects.get(code=code_from_request)
            user = registration.user
            is_code_used = registration.used

            if request.data['password1'] == request.data['password2'] and registration and not is_code_used:
                user.password = make_password(request.data['password1'])
                user.save()
                registration.used = True
                registration.save()
                return Response(status=status.HTTP_200_OK)
            elif request.data['password1'] != request.data['password2']:
                return Response({'error': 'Two passwords given are not the same'}, status=status.HTTP_400_BAD_REQUEST)
            elif is_code_used:
                return Response({'error': 'This code is already used'}, status=status.HTTP_400_BAD_REQUEST)
        except Registration.DoesNotExist:
            return Response({'error': 'This code is invalid. Please, enter a valid code'},
                            status=status.HTTP_400_BAD_REQUEST)
