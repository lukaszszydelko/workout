from .views import ExerciseView, SeriesView, WorkoutView
from django.urls import path, include


urlpatterns = [
    path('exercise/', ExerciseView.as_view()),
    path('series/', SeriesView.as_view()),
    path('workout/', WorkoutView.as_view()),
]
