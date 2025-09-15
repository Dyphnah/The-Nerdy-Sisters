from django.contrib import admin
from .models import Blog

# Register your models here.

@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'category', 'last_updated')  
    list_filter = ('category', 'author')                           
    search_fields = ('title', 'description')                       


