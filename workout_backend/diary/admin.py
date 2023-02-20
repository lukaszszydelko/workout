from django.contrib import admin
from .models import Exercise, Series, Workout

admin.site.register(Exercise)
admin.site.register(Series)
admin.site.register(Workout)