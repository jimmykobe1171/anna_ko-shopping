from django.contrib import admin
from django.urls import path, include
from . import views
# from django.conf.urls import url, patterns
from . views import SignupView, GetCSRFToken, LoginView, LoggoutView, CheckAuthenticatedView
from rest_framework import routers, serializers, viewsets
router = routers.DefaultRouter()
# router.register(r'products', views.ProductViews, 'product')


urlpatterns = [
    # path('admin/', admin.site.urls),
    # path('api/', include(router.urls),
    # url(r'api/users^$', views.UserCreate.as_view(), name='account-create')
    # path('api-auth/', include('rest_framework.urls')),
    path('authenticated', CheckAuthenticatedView.as_view),
    path('register', SignupView.as_view()),
    path('csrf_cookie', GetCSRFToken.as_view()),
    path('login', LoginView.as_view()),
    path('logout', LoggoutView.as_view()),
   
 ]
