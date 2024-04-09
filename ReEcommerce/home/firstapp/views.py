from django.http.response import HttpResponse
from django.shortcuts import render
from django.http import HttpResponse
from table.models import *

# Create your views here.
def Index(request):
    return render(request,'Index.html')

def rent(request):
    return render(request,'rent.html')

def categories(request):
    return render(request,'categories.html')

def Index(request):
    image_paths = [
        'images/banglow.png',
        'images/CarRental.png',
        'images/Furniturerental.png',
        # Add other image paths as needed
    ]
    return render(request, 'Index.html', {'image_paths': image_paths})


# def my_view(request):
#     data = [
#         {"image_src": "Furniturerental.png", "link": "rent.html"},
#         {"image_src": "banglow.jpg", "link": "#"},
#         {"image_src": "furniture.jpg", "link": "#"},
#         {"image_src": "Furniturerental.png", "link": "#"},
#         {"image_src": "CarRental.png", "link": "#"},
#         {"image_src": "banglow.png", "link": "#"},
#         {"image_src": "CarRental.webp", "link": "#"},
#         {"image_src": "mainback.png", "link": "#"},
#         {"image_src": "Furniturerental.png", "link": "#"},
#     ]
#     return render(request, 'Index.html', {'data': data})

def show_categories(request):
    cate = Category.objects.all()
    return render(request,'Index.html',{'cate':cate})