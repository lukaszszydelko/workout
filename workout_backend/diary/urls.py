from .views import ExerciseView, SeriesView, WorkoutView
from django.urls import path, include
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r"exercise", ExerciseView)
urlpatterns = [
    path('series/', SeriesView.as_view()),
    path('workout/', WorkoutView.as_view()),
] + router.urls

