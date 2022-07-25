
from django.db import models
from django.contrib.auth.models import User
# from django.urls import reverse
# from datetime import date

# Create your models here.
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=255, default='')
    last_name = models.CharField(max_length=255, default='')
    phone = models.CharField(max_length=20, default='')
    address = models.CharField(max_length=255, default='')
    city = models.CharField(max_length=255, default='')

    def __str__(self):
        return self.first_name

class Product(models.Model):
  name = models.CharField(max_length=100)
  category = models.CharField(max_length=100)
  description = models.TextField(max_length=250)
  price = models.IntegerField()
  brand = models.CharField(max_length=100)

  
  def __str__(self):
    return self.brand
        
  

class Cart(models.Model):
  quantity = models.IntegerField()
  price = models.IntegerField()
  total = models.IntegerField()
  product = models.ForeignKey(Product, on_delete=models.CASCADE)

  def __str__(self):
    return self.product
  

