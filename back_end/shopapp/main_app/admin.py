from django.contrib import admin
from .models import Product, UserProfile, Cart, CartItem

# Register your models here.
admin.site.register(Product)
admin.site.register(UserProfile)
admin.site.register(Cart)
admin.site.register(CartItem)