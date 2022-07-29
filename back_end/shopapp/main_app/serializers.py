from rest_framework import serializers
from .models import Product
from .models import UserProfile
# from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

# from rest_framework.validators import UniqueValidator
# from .models import User
from django.contrib.auth.models import User


    
class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'
        
                

class ProductSerializer(serializers.ModelSerializer):
 
    # create a meta class
    class Meta:
        model = Product
        fields = ('id', 'brand','description',  'price', 'category')