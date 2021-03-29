from rest_framework import serializers
from registration.models import Registration


class RegistrationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Registration
        fields = '__all__'
        read_only_fields = ['code']
