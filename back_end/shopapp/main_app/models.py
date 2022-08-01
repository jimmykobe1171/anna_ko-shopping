from django.db import models
from django.contrib.auth.models import User
# from django.urls import reverse
# from datetime import date

Cloth_Sizes = (('XS', 'X-Small'),('S', 'Small'),('M', 'Medium'),('L', 'Large'), ('XL', 'X-Large'),)
# Create your models here.
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone = models.CharField(max_length=20, default='')
    address = models.CharField(max_length=255, default='')
    city = models.CharField(max_length=255, default='')

    def __str__(self):
        return str(self.user)
        

class Product(models.Model):
    size = models.CharField(max_length=2, blank= True, choices=Cloth_Sizes)
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    description = models.TextField(max_length=250)
    image = models.ImageField(null=False, blank = False)
    price = models.IntegerField()
    brand = models.CharField(max_length=100)


    
    def __str__(self):
      return self.brand
class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.OneToOneField(Product,default=None, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)
    # product = models.ManyToManyField(Product)
    # item = models.ManyToManyField(CartItem, on_delete=models.CASCADE)

    def __str__(self):
      return self.quantity
          
class CartItem(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)

    def __str__(self):
      return self.product

  


