from django.http.response import HttpResponse
from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def Index(request):
    return render(request,'Index.html')

def Index(request):
    image_paths = [
        'images/banglow.png',
        'images/CarRental.png',
        'images/Furniturerental.png',
        # Add other image paths as needed
    ]
    return render(request, 'Index.html', {'image_paths': image_paths})