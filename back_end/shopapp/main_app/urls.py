from django.contrib import admin
from django.urls import path, include
from . import views
# from django.conf.urls import url, patterns
from . views import SignupView, GetCSRFToken, LoginView, LogoutView, CheckAuthenticatedView, DeleteUserView, GetUserProfileView, UpdateUserProfileView
from rest_framework import routers, serializers, viewsets
router = routers.DefaultRouter()
# router.register(r'products', views.ProductViews, 'product')


urlpatterns = [
    
    # path('api/', include(router.urls),
    # url(r'api/users^$', views.UserCreate.as_view(), name='account-create')
    # path('api-auth/', include('rest_framework.urls')),
    path('authenticated', CheckAuthenticatedView.as_view()),
    path('register', SignupView.as_view()),
    path('login', LoginView.as_view(), name='login'),
    path('logout', LogoutView.as_view()),
    # path('api/users/delete', DeleteUserView.as_view),
    path('csrf_cookie', GetCSRFToken.as_view()),
    path('user', GetUserProfileView.as_view()),
    path('update', UpdateUserProfileView.as_view()),
    
   
 ]
