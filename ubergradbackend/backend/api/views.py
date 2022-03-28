from django.shortcuts import render

# Create your views here.
from .models import Specialize,Requirements
from .serializers import SpecializeSerializers,RequirementsSerializers

from rest_framework.generics import ListAPIView,CreateAPIView,DestroyAPIView

class SpecializeView(ListAPIView):
    queryset=Specialize.objects.all()
    serializer_class=SpecializeSerializers


class SpecializeCreate(CreateAPIView):
    queryset=Specialize.objects.all()
    serializer_class=SpecializeSerializers

class SpecializeDestroy(DestroyAPIView):
    queryset=Specialize.objects.all()
    serializer_class=SpecializeSerializers

class RequirementsView(ListAPIView):
    queryset=Requirements.objects.all()
    serializer_class=RequirementsSerializers

class RequirementsCreate(CreateAPIView):
    queryset=Requirements.objects.all()
    serializer_class=RequirementsSerializers
