from django.contrib import admin
from django.urls import path, include
from . import views
# from django.conf.urls import url, patterns
# from . views import SignupView, GetCSRFToken, LoginView, LogoutView, CheckAuthenticatedView, DeleteUserView, GetUserProfileView, UpdateUserProfileView
# from rest_framework import routers, serializers, viewsets
# router = routers.DefaultRouter()
# router.register(r'products', views.ProductViews, 'product')
from . import views
from . views import ProductView

# from rest_framework_simplejwt.views import (
#     TokenRefreshView,
# )

urlpatterns = [
    # path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # path('register/', views.RegisterView.as_view(), name='auth_register'),
    # path('test/', views.testEndPoint, name='test'),
    # path('', views.getRoutes),
    path('product/', ProductView.as_view(), name='product' )
]


# urlpatterns = [
    
#     # path('api/', include(router.urls),
#     # url(r'api/users^$', views.UserCreate.as_view(), name='account-create')
#     # path('api-auth/', include('rest_framework.urls')),
#     path('authenticated', CheckAuthenticatedView.as_view()),
#     path('register', SignupView.as_view()),
#     path('login', LoginView.as_view(), name='login'),
#     path('logout', LogoutView.as_view()),
#     # path('api/users/delete', DeleteUserView.as_view),
#     path('csrf_cookie', GetCSRFToken.as_view()),
#     path('user', GetUserProfileView.as_view()),
#     path('update', UpdateUserProfileView.as_view()),
    
   
#  ]
