""" from rest_framework import serializers
from .models import Blog

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model =Blog
        fields = '__all__'
 """
from rest_framework import serializers
from .models import Blog

class BlogSerializer(serializers.ModelSerializer):
    author = serializers.StringRelatedField()
    # last_updated = serializers.DateTimeField(format="%d %B %Y")   

    class Meta:
        model = Blog
        fields = [
            'last_updated', 
            'image',
            'title',
            'author',
            'category',
            'description',
            'slug',
            'id',  
        ]

