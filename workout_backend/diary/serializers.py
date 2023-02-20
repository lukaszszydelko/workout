from rest_framework import serializers
from .models import Workout, DayOfWeek, Series, Exercise


class SeriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Series
        fields = "__all__"


class WorkoutSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workout
        fields = "__all__"


class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = "__all__"

