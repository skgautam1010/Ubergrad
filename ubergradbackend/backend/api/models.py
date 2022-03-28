from django.db import models

# Create your models here.

class Specialize(models.Model):
    domain=models.CharField(max_length=300)



class Requirements(models.Model):
    title=models.CharField(max_length=40)
    body=models.CharField(max_length=1000)
