from rest_framework import serializers
from .models import Workout, DayOfWeek, Series, Exercise
from datetime import datetime


class SeriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Series
        fields = "__all__"


class WorkoutSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workout
        fields = "__all__"

    def to_representation(self, obj):
        representation = super().to_representation(obj)
        print("QQQQQQQ ", representation)
        return representation

    def to_internal_value(self, data):
        series = data.pop("series")
        internal_data = super().to_internal_value(data)
        internal_data["series"] = series
        return internal_data

    def create(self, validated_data):
        series = validated_data.pop("series")
        workout = Workout.objects.create(**validated_data)
        for serie in series:
            serie = {s[0]: s[1] for s in serie.items() if s[1]}
            exercise = serie.pop("exercise")
            exercise = Exercise.objects.get(name=exercise)
            Series.objects.create(workout=workout, exercise=exercise, **serie)

        return workout


class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = "__all__"

