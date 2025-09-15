from django.db import models
from django.utils.text import slugify
from django.contrib.auth.models import User  

CATEGORY_CHOICES = [
    ('Business', 'Business'),
    ('Technology', 'Technology'),
    ('Lifestyle', 'Lifestyle'),
    ('Education', 'Education'),
]


class Blog(models.Model):
    id = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=60) 
    author = models.ForeignKey(User, on_delete=models.CASCADE)  
    description = models.TextField()
    last_updated = models.DateTimeField(auto_now=True)  
    category = models.CharField(choices=CATEGORY_CHOICES, default='Business', max_length=50)
    image = models.ImageField(upload_to='blog_images/', blank=True, null=True)
    slug = models.SlugField(unique=True, blank=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    class Meta:
        ordering = ['-last_updated']

    def __str__(self):
        return  self.title


