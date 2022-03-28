from django.urls import path
from . import views

urlpatterns = [
    path('specializeview',views.SpecializeView.as_view()),
    path('specializecreate',views.SpecializeCreate.as_view()),
    path('specializedestroy/<int:id>',views.SpecializeDestroy.as_view()),
    path('requirementsview',views.RequirementsView.as_view()),
    path('requirementscreate',views.RequirementsCreate.as_view()),
]