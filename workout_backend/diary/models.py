from django.db import models


class DayOfWeek(models.TextChoices):
    MONDAY = "MO", ("Monday")
    TUESDAY = "TU", ("Tuesday")
    WEDNESDAY = "WE", ("Wednesday")
    THURSDAY = "TH", ("Thursday")
    FRIDAY = "FR", ("Friday")
    SATURDAY = "SA", ("Saturday")
    SUNDAY = "SU", ("Sunday")


class Exercise(models.Model):
    name = models.CharField(max_length=127, unique=True)

    def __str__(self):
        return self.name


class Workout(models.Model):
    workout_date = models.DateTimeField(db_index=True)
    other_series = models.TextField(null=True, blank=True)
    comments = models.TextField(null=True, blank=True)
    day = models.TextField(choices=DayOfWeek.choices, default=DayOfWeek.MONDAY)

    def __str__(self):
        return f"{self.workout_date}"


class Series(models.Model):
    exercise = models.ForeignKey(Exercise, on_delete=models.CASCADE)
    workout = models.ForeignKey(Workout, on_delete=models.CASCADE, related_name="series")
    serie_1 = models.IntegerField()
    serie_2 = models.IntegerField(null=True, blank=True)
    serie_3 = models.IntegerField(null=True, blank=True)
    serie_4 = models.IntegerField(null=True, blank=True)
    serie_5 = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return f"{self.workout}: {self.exercise}"






