from django.contrib import admin
from django.urls import path,include

admin.site.site_header="SALVUD admin"
admin.site.site_title="SALVUD admin portal"
admin.site.index_title="Welcome to SALVUD admin portal"
urlpatterns = [    
    path('',include("app.urls")),
    path('admin/',admin.site.urls),
    ]






