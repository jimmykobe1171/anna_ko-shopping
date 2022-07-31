from django.shortcuts import render
from rest_framework import status

from django.http import JsonResponse

from rest_framework.response import Response
from rest_framework.views import APIView
from . serializers import *
from . models import *
from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse
# from .serializers import MyTokenObtainPairSerializer, RegisterSerializer
# from rest_framework_simplejwt.views import TokenObtainPairView
# from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny, IsAuthenticated
# from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import *
from .models import *
from django.contrib.auth import authenticate, login, logout
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt


class ProductView(APIView):
    serializer_class = ProductSerializer
    def get(self, request):

        products = [{'cloth_size': product.size, 'brand': product.brand,'description': product.description, 'name': product.name , 'id': product.id, 'price': product.price, 'category':product.category } for product in Product.objects.all()]
        return Response(products)


class ProductDetailView(APIView):
    serializer_class = ProductSerializer
    def get(self, request, id, *args, **kwargs):
        data = request.data
        user = request.user
        # result = {
        #         'id': product.id,
        #         'brand': product.brand,
        #         'price': product.price,
        #         # 'description':product.description
        #     }
        # product_id = str(product.id)
        product = Product.objects.get(id=id)
        # product = Product.objects.get(pk=id )
        if not product:
            return Response(
                {"res": "Object with product id does not exists"},
                status=status.HTTP_400_BAD_REQUEST
            )
        serializer_class = ProductSerializer(product)
        return Response(serializer_class.data, status=status.HTTP_200_OK)

    serializer_class = ProductSerializer
    def delete(self, request, id, *args, **kwargs):
        data = request.data
        user = request.user
        product = Product.objects.get(id=id)
        # product = Product.objects.get(pk=id )e
        product.delete()
        if not product:
            return Response(
                {"res": "Object with product id does not exists"},
                status=status.HTTP_400_BAD_REQUEST
            )

        serializer_class = ProductSerializer(product)
        return Response(serializer_class.data, status=status.HTTP_200_OK)

class CartView(APIView):
    serializer_class = CartSerializer
    def get(self, request):
        data= request.data
        user = request.user
        cart = [{'user': cart.user, 'product': cart.product,'quantity': cart.quantity, 'id': cart.id, } for cart in Cart.objects.all()]
        return Response(cart)
        


# class CartView(APIView):
#     def add(self, request, format=None):
#         result = {
#                 'id': product.id,
#                 'brand': product.brand,
#                 'price': product.price,
#                 # 'description':product.description
                
            # }
        # data = request.data
        # user = request.user
        # product = request.product
        # product_id = str(product.id)
        # if product_id not in self.cart:
        #     self.cart[product_id] = {'quantity': 0 }
        # if update_quantity:
        #     self.cart[product_id]['quantity'] = quantity
        # else:
        #     self.cart[product_id]['quantity'] += quantity
        # self.save()


    # def remove(self, product):
    #     product_id = str(product.id)
    #     if product_id in self.cart:
    #         del self.cart[product_id]
    #         self.save()


# @method_decorator(csrf_exempt, name='dispatch')
class SignupView(APIView):

    def post(self, request, format=None):
        data = request.data
        username = data['username']
        email = data['email']
        password = data['password']
        try:
            if User.objects.filter(username=username).exists():
                return Response({'error': 'Username already exists'}, status=status.HTTP_400_BAD_REQUEST)
            else:
                if len(password) < 6:
                    return Response({'error': 'Password must be at least 6 characters'}, status=status.HTTP_400_BAD_REQUEST)
                else: 
                    user = User.objects.create_user(username=username, password=password, email=email)
                    user.save()
                    user_profile = UserProfile(user=user)
                    user_profile.save()
                    # login user
                    login(request, user)
                    return Response({'success': 'User created successfully'})
        except Exception as e:
            print(e)
            return Response({'error': 'Something went wrong during register'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# @method_decorator(ensure_csrf_cookie, name='dispatch')
# class GetCSRFToken(APIView):
#     permission_classes = (permissions.AllowAny, )

#     def get(self, request, format=None):
#         return Response({'succeess': 'CSRF cookie set'})


class LoginView(APIView):
    # permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data= request.data
        username = data['username']
        password = data['password']

        try:
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                return Response({'success': 'User authenticated'})
            else:
                return Response({'error': 'error Authenticating'}, status=status.HTTP_400_BAD_REQUEST)
        except:
            return Response({'error': 'Something went wrong during Log In'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class LogoutView(APIView):
    def get(self, request, format=None):
        try:
            logout(request)
            return Response({'success': 'Loggout'})
        except:
            return Response({'error': 'Something went wrongduring logging out'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@method_decorator(csrf_exempt, name='dispatch')
class UserProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        try:
            user = request.user
            # user = User.objects.get(id=user.id)
            user_profile = UserProfile.objects.get(user=user)
            # user_profile = UserProfileSerializer(user_profile)
            result = {
                'username': user.username,
                'email': user.email,
                'first_name': user.first_name,
                'last_name': user.last_name,
                'address': user_profile.address,
                'phone': user_profile.phone,
                'city': user_profile.city
            }
            return Response(result)
        except Exception as e:
            print(e)
            return Response({'error': 'Something went wrong'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def post(self, request, format=None):
        try:
            user = request.user
            data = request.data
            first_name = data['first_name']
            last_name = data['last_name']
            phone = data['phone']
            address = data['address']
            city = data['city']
            User.objects.filter(id=user.id).update(first_name=first_name, last_name=last_name)
            UserProfile.objects.filter(user=user).update(phone=phone, address=address, city=city)
            return Response({'success': 'Profile change is saved successfully'})
        except Exception as e:
            print(e)
            return Response({'error': 'Something went wrong during updating'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

