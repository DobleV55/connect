from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return render(request, "index.html")
# Create your views here.


def select(request):
    return render(request, "select.html")


def dashboard(request):
    return render(request, "profile")
