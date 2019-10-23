from django.db import models

# Create your models here.
class Home(models.Model):
    name = models.CharField(max_length=150)
    text = models.TextField()
    picture = models.ImageField(upload_to='articles/home/')

    def __str__(self):
        return self.name
class About(models.Model):
    title = models.CharField(max_length=150)
    text = models.TextField()
    pub_date = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.title

class Service(models.Model):
    pic = models.ImageField(upload_to='articles/serices/')
    caption = models.TextField()
    pub_date = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.caption

class Projects(models.Model):
    pic = models.ImageField(upload_to='articles/projects/')
    pub_date = models.DateTimeField(auto_now_add=True)

class Brands(models.Model):
    logo = models.ImageField(upload_to='articles/brands/')
    name = models.CharField(max_length=150)
    pub_date = models.DateTimeField(auto_now_add=True)

class Contact(models.Model):
    address = models.CharField(max_length=200)
    Phone = models.CharField(max_length=150)
    email = models.EmailField()

    def __str__(self):
        return self.email
class Subscriber(models.Model):
    name = models.CharField(max_length=150)
    message = models.TextField()
    email = models.EmailField()

    def __str__(self):
        return self.message
class Message(models.Model):
    name = models.CharField(max_length=170)
    message = models.TextField()
    pub_date = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return self.name