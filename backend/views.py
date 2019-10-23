from django.shortcuts import render
from .models import Home,Service,Contact,About,Projects,Subscriber,Message
from .serializers import MessageSerializer,HomeSerializer,ServiceSerializer,ProjectsSerializer,SubscriberSerializer,ContactSerializer,AboutSerializer
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.reverse import reverse
from rest_framework.permissions import AllowAny
# Create your views here.
from django.core.cache import cache
class ApiRoot(generics.GenericAPIView):
    name = 'api-root'
    def get(self,request,*args,**kwargs):
        return Response({
            'home':reverse(HomeApi.name,request=request),
            'about':reverse(About.name,request=request),
            'projects':reverse(ProjectsApi.name,request=request),
            'services':reverse(ServicesApi.name,request=request),
            'contact':reverse(ContactApi.name,request=request),
            'subscriber':reverse(SubscriberApi.name,request=request),
            'message': reverse(MessageApi.name,request=request)
        })

class MessageApi(generics.ListAPIView):
    queryset = Message.objects.all()
    serializer_class= MessageSerializer
    name = 'mission'
from django.views.decorators.cache import cache_page
# @cache_page(60*10)
class HomeApi(generics.ListAPIView):
    queryset = Home.objects.all()
    serializer_class = HomeSerializer
    name = 'home-list'

class AboutApi(generics.ListAPIView):
    queryset = About.objects.all()
    serializer_class = AboutSerializer
    name = 'about-list'
class ServiceApi(generics.ListAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
    name = 'services-list'
class ProjectsApi(generics.ListAPIView):
    queryset = Projects.objects.all()
    serializer_class = ProjectsSerializer
    name = 'projects-list'
class SubscriberApi(generics.CreateAPIView):
    queryset = Subscriber.objects.all()
    permission_classes = [AllowAny]
    serializer_class = SubscriberSerializer
    name = 'subscribers-list'
class ContactApi(generics.ListAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    name = 'contact-list'


