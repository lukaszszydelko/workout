from django.shortcuts import render

from django.http import HttpResponse
from .models import DayOfWeek, Exercise, Series, Workout
from .serializers import ExerciseSerializer, SeriesSerializer, WorkoutSerializer
from rest_framework import generics, viewsets


class ExerciseView(viewsets.ModelViewSet):
    queryset = Exercise.objects.all()
    serializer_class = ExerciseSerializer


class SeriesView(generics.RetrieveUpdateDestroyAPIView, generics.ListCreateAPIView):
    queryset = Series.objects.all()
    serializer_class = SeriesSerializer


class WorkoutView(generics.RetrieveUpdateDestroyAPIView, generics.ListCreateAPIView):
    queryset = Workout.objects.all()
    serializer_class = WorkoutSerializer


def home(request):
    return HttpResponse("This is our homepage")

def events(request):
    return HttpResponse("This is our events page")
