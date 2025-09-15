"""
URL configuration for api_backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

""" I had to install pip install dj-rest-auth
pip install django-allauth for registration form """

from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from blog.views import BlogViewSet  
from django.conf import settings
from django.conf.urls.static import static


router = DefaultRouter()
router.register(r'blogs', BlogViewSet, basename='blog')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),          
    path('api/auth/', include('dj_rest_auth.urls')),
    path('api/auth/registration/', include('dj_rest_auth.registration.urls')), 
]

if settings.DEBUG:  # only serve media in development
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
