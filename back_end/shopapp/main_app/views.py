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
# from rest_framework.permissions import AllowAny, IsAuthenticated
# from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import *
from .models import *
from django.contrib.auth import authenticate, login, logout

# class ProductView(APIView):
#     serializer_class = ProductSerializer
#     def get(self, request):

#         products = [{'brand': product.brand,'descriprion': product.description, 'name': product.name, 'price': product.price, 'category':product.category } for product in Product.objects.all()]
#         return Response(products)



class ProductView(APIView):
    serializer_class = ProductSerializer
    def get(self, request):

        products = [{'brand': product.brand,'descriprion': product.description, 'name': product.name ,  'price': product.price, 'category':product.category } for product in Product.objects.all()]
        return Response(products)



class ProductDetailView(APIView):
    def get(self, request, product_id, *args, **kwargs):
        
        product_item = self.get_object(product_id, request.user.id)
        if not product_item:
            return Response(
                {"res": "Object with product id does not exists"},
                status=status.HTTP_400_BAD_REQUEST
            )

        serializer_class = ProductSerializer(product_item)
        return Response(serializer_class.data, status=status.HTTP_200_OK)


    #     class ProductView(APIView):
    # serializer_class = ProductSerializer
    # def get(self, request):

    #     products = [{'brand': product.brand,'descriprion': product.description, 'name': product.name ,  'price': product.price, 'category':product.category } for product in Product.objects.all()]
    #     return Response(products)


# class UserProfileView(APIView):
#     # serializer_class = UserProfileSerializer(data=request.data)
#     def post(self, request, format=None):
#         print("My routs being hit")
#         data = request.data
#         print(data)
#         name = data['name']
#         lastname =  data['lastname']
#         address = data['address']
#         phone = data['phone']
#         # username = data['username']
#         # password = data['password']

#         if  user_profile.is_valid():
#             user_pofile.save()
#             return Response({'success': 'User profile created successfully'})
#         return Response({'error': 'something goes wrong'})
        # profile = [{'address': profile.address,'city': profile.city, 'phone': profile.phone, 'user': profile.user,  } for profile in UserProfile.objects.all()]
        # return Response(profile)





# @method_decorator(csrf_exempt, name='dispatch')
class SignupView(APIView):
    # permission_classes =(permissions.AllowAny, )

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

# @method_decorator(csrf_protect, name='dispatch')
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

# class DeleteUserView(APIView):
#     def delete(self, request, format=None):
#         user = self.request.user
#         try:
#             user = User.objects.filter(id=user.id).delete()
#             return Response({'success': "User deleted"})
#         except:
#             return Response({'error': "Something went wrong during deleting user"})
    
# class GetUserProfileView(APIView):
#     def get(self, request, format=None):
#         try:
#             user = self.request.user
#             username = user.username
#             user = User.objects.get(id=user.id)
#             user_profile = UserProfile.objects.get(user=user)
#             user_profile = UserProfileSerializer(user_profile)
#             return Response({'profile': user_profile.data, 'username':str(username)})
#         except:
#             return Response({'error': 'Something went wrong during updating'})


# class UpdateUserProfileView(APIView):
#     def post(self, request, format=None):
#         try:
#             user = self.request.user
#             username = user.username
#             data = self.request.data
#             first_name = data['first_name']
#             last_name = data['last_name']
#             phone = data['phone']
#             address = data['address']
#             city = data['city']

#             user = User.objects.get(id=user.id)
#             UserProgile.objects.filter(user=user).update(first_name=first_name, last_name=last_name, phone=phone, address=address, city=city)

#             user_profile = UserProfile.objects.get(user=user)
#             user_profile = UserProfileSerializer(user_profile)
#             return Response({'profile': user_profile.data, 'username':str(username)})
#         except:
#             return Response({'error': 'Something went wrong during updating'})

