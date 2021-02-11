from django.shortcuts import render


# Create your views here.

def index(request):
    return render(request, 'index.html')

def aboutUs(request):
    return render(request, 'aboutUs.html')

def services(request):
    return render(request, 'services.html')

def contactUs(request):
    return render(request, 'contactUs.html')