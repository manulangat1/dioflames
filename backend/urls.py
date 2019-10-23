from django.conf.urls import url
from  . import views
urlpatterns  = [
    url(r'^home/',views.HomeApi.as_view(),name=views.HomeApi.name),
    url(r'^about/',views.AboutApi.as_view(),name=views.AboutApi.name),
    url(r'^services/',views.ServiceApi.as_view(),name=views.ServiceApi.name),
    url(r'^projects/',views.ProjectsApi.as_view(),name=views.ProjectsApi.name),
    url(r'^contact/',views.ContactApi.as_view(),name=views.ContactApi.name),
    url(r'^subscribe/',views.SubscriberApi.as_view(),name=views.SubscriberApi.name),
    url(r'^mission/',views.MessageApi.as_view(),name = views.MessageApi.name)
]
