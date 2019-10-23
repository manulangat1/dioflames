from rest_framework import serializers
from .models import Home,About,Service,Subscriber,Projects,Contact,Message

from .email import send_welcome_email
from .tasks import send_async_email
class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = '__all__'
class HomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Home
        fields = '__all__'
class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = About
        fields = '__all__'
class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'
class ProjectsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Projects
        fields = '__all__'
class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'
class SubscriberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subscriber
        fields = '__all__'
    def create(self,validated_data):
        email = validated_data.get("email",None)
        validated_data.pop('email')
        name = validated_data.get("name",None)
        validated_data.pop('name')
        send_async_email.delay(name,email)
        return Subscriber.objects.create(name=name,email=email,**validated_data)