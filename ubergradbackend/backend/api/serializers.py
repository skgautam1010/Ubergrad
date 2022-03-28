from dataclasses import fields
from pyexpat import model
from rest_framework import serializers
from .models import Specialize,Requirements


class SpecializeSerializers(serializers.ModelSerializer):
    class Meta:
        model=Specialize
        fields=['id','domain']


class RequirementsSerializers(serializers.ModelSerializer):
    class Meta:
        model=Requirements
        fields=['id','title','body']
        