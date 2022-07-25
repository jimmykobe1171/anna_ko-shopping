from django.shortcuts import render
from rest_framework.views import importAPIView
from . models import *
from . setializer import *
from rest_framework.response import Response



# Create your views here.
# from django.http import HttpResponse

# # Define the home view
# def home(request):
#   return HttpResponse('<h1>Hello shopping app</h1>')
