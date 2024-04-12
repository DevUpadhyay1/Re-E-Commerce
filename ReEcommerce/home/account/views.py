from django.http.response import HttpResponse
from django.shortcuts import render,redirect
from django.http import HttpResponse
from account.forms import UserRegisterForm
from django.contrib.auth import login,authenticate
from django.contrib import messages
from table.models import *

# Create your views here.
def register_view(request):

    if request.method == 'POST':
        form = UserRegisterForm(request.POST or None)
        if form.is_valid():
                new_user = form.save()
                username = form.cleaned_data.get("username")
                messages.success(request,f"Hey {username}, your account created successfully")
                new_user = authenticate(username=form.cleaned_data['email'],
                                        password=form.cleaned_data['password1']
                )
                login(request,new_user)
                return redirect("Index")
    else:
        form = UserRegisterForm()
    
    context = {
        'form':form
    }

    return render(request,'sign-up.html',context)

