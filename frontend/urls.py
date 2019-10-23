from django.urls import path
from . import views
from .sitemaps import StaticViewSitemap
from django.contrib.sitemaps.views import sitemap
sitemaps = {
    'static':StaticViewSitemap
}
urlpatterns = [
    path('',views.index),
    path('sitemap.xml',sitemap,{'sitemaps':sitemaps})
]