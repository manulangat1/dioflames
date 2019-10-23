from django.contrib import sitemaps
from django.urls import reverse

class StaticViewSitemap(sitemaps.Sitemap):
    priority = 0.5
    changfreq = 'daily'
    def items(self):
        return ['index']
    def location(self,item):
        return reverse(item)