

# Register your models here.
from django.contrib import admin
from .models import Specialize,Requirements
# Register your models here.
@admin.register(Specialize)
class SpecializeAdmin(admin.ModelAdmin):
    list_display=['id','domain']

@admin.register(Requirements)
class RequirementsAdmin(admin.ModelAdmin):
    list_display=['id','title','body']
