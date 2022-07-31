from django.contrib import admin
from django.urls import path, include
from . import views


from .views import ProductView, SignupView, LoginView, LogoutView, UserProfileView, ProductDetailView




urlpatterns = [
    path('product/', ProductView.as_view(), name='product' ),
    path('users/signup', SignupView.as_view(), name='signup' ),
    path('users/login', LoginView.as_view(), name='login' ),
    path('users/logout', LogoutView.as_view(), name='logout' ),
    path('users/profile', UserProfileView.as_view(), name='profile'),
    path('product/<int:product_id>/', ProductDetailView.as_view(), name='product'),

    # path('users/profile', UserProfileView.as_view(), name='profile')
]

    
    



