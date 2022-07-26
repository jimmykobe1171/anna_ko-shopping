from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse

# from .serializers import MyTokenObtainPairSerializer, RegisterSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.views import APIView
from . serializers import *
from . models import *

# Create your views here.


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token/',
        '/api/register/',
        '/api/token/refresh/',
        '/api/prediction/'
    ]
    return Response(routes)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def testEndPoint(request):
    if request.method == 'GET':
        data = f"Congratulation {request.user}, your API just responded to GET request"
        return Response({'response': data}, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        text = request.POST.get('text')
        data = f'Congratulation your API just responded to POST request with text: {text}'
        return Response({'response': data}, status=status.HTTP_200_OK)
    return Response({}, status.HTTP_400_BAD_REQUEST)


class ProductView(APIView):
    serializer_class = ProductSerializer
    def get(self, request):

        products = [{'brand': product.brand,'descriprion': product.description, 'name': product.name, 'price': product.price,  'category':product.category } for product in Product.objects.all()]
        return Response(products)

    # def get(self, request):
    #     product = Product.objects.all()
        
    #     serializer = ProductSerializer(product, many = True)

    #     return Response({"product": serializer.data})



# from django.shortcuts import render
# from . models import *
# from . serializers import *
# from rest_framework.views import APIView
# from rest_framework import status
# from rest_framework.response import Response
# from rest_framework import viewsets  
# from django.contrib import auth
# from rest_framework import permissions 
# from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect, csrf_exempt
# from django.views.decorators.csrf import ensure_csrf_cookie
# from django.utils.decorators import method_decorator
# from django.contrib.auth.models import User
# from django.urls import re_path


# # from django.core.exceptions import PermissionDenied

# # def edit(request, pk):
# #     if not request.user.is_staff:
# #         raise PermissionDenied
# @method_decorator(csrf_exempt, name='dispatch')
# class CheckAuthenticatedView(APIView):
#     def get(self, request, format=None):
#         try:
#             isAuthenticated = User.is_authenticated
#             if isAuthenticated:
#                 return Response({'isAuthenticated': 'success'})
#             else:
#                 return Response({'isAuthenticated': 'error'})
#         except:        
#             return Response({'error': 'Something went wrong during authenticated'})

# @method_decorator(csrf_exempt, name='dispatch')
# class SignupView(APIView):
#     permission_classes =(permissions.AllowAny, )

#     def post(self, request, format=None):
#         data = self.request.data
#         username = data['username']
#         password = data['password']
#         re_password == data['password']
#         try:
#             if password == re_password:
#                     if User.objects.filter(username=username).exists():
#                         return Response({'error': 'Username already exists'})
#                     else:
#                         if len(password)< 6:
#                             return Response({'error': 'Password must be at least 6 characters'})
#                         else: 
#                             user = User.objects.create_user(username=username, password=password)
#                             user.save()
#                             user = User.objects.get(id=user.id)
#                             user_profile = UserProfile(user=user.id, first_name='', last_name='', phone='', city='', address='')
#                             user_profile.save()
#                             return Response({'success': 'User created successfully'})
#             else: 
#                 return Response({ 'error': 'Passwords do not match'}) 
#         except:
#             return Response({'error': 'Something went wrong during register'})

# @method_decorator(ensure_csrf_cookie, name='dispatch')
# class GetCSRFToken(APIView):
#     permission_classes = (permissions.AllowAny, )

#     def get(self, request, format=None):
#         return Response({'succeess': 'CSRF cookie set'})

# @method_decorator(csrf_protect, name='dispatch')
# class LoginView(APIView):
#     permission_classes = (permissions.AllowAny, )
#     def post(self, request, format=None):
#         data= self.request.data
#         username = data['username']
#         password = password['password']
#         try:

#             user = auth.authenticate(username=username, password=password)
#             if user is not None:
#                 auth.login(request, user)
#                 return Response({'success': 'User authenticated', 'username': username})
#             else:
#                 return Response({'error': 'error Authenticating'})
#         except:
#             return Response({'error': 'Something went wrong during Log In'})

# class LogoutView(APIView):
#     def post(self, request, format=None):
#         try:
#             auth.logout(request)
#             return Response({'success': 'Loggout '})
#         except:
#             return Response({'error': 'Something went wrongduring logging out'})

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



#     # def post(self, request, format='json'):
#     #     serializer = UserSerializer(data=request.data)
#     #     if serializer.is_valid():
#     #         user = serializer.save()
#     #         if user:
#     #             token = Token.objects.create(user=user)
#     #             json = serializer.data
#     #             json['token'] = token.key
#     #             return Response(json, status=status.HTTP_201_CREATED)
#     #     retuen Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# # class ProductViews(APIView):
# #     serializer_class = ProductSerializer
# #     queryset = Product.object.all()

# # Create your views here.
# # from django.http import HttpResponse

# # # Define the home view
# # def home(request):
# #   return HttpResponse('<h1>Hello shopping app</h1>')
