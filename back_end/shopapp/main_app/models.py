from django.db import models
from django.contrib.auth.models import User
# from django.urls import reverse
# from datetime import date

# Create your models here.
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone = models.CharField(max_length=20, default='')
    address = models.CharField(max_length=255, default='')
    city = models.CharField(max_length=255, default='')

    def __str__(self):
        return str(self.user)
        

class Product(models.Model):
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    description = models.TextField(max_length=250)
    image = models.ImageField(upload_to='media', default='def.jpg')
    price = models.IntegerField()
    brand = models.CharField(max_length=100)

    
    def __str__(self):
      return self.brand
class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
      return self.product
          
class CartItem(models.Model):
    product = models.OneToOneField(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)

    def __str__(self):
      return self.product

  


