from django.contrib import admin
from django.urls import path, include
from . import views
from django.conf.urls import url
from core.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('main_app.urls')),
    path('api-auth/', include('rest_framework.urls'))
]
