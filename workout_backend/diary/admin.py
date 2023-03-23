from django.contrib import admin
from .models import Exercise, Series, Workout


@admin.register(Workout)
class WorkoutAdmin(admin.ModelAdmin):
    fields = [
        "workout_date",
        "other_series",
        "comments",
        "day",
    ]


admin.site.register(Exercise)
admin.site.register(Series)