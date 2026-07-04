from django.urls import path, re_path
from brzeg import views
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.auth import views as auth_views
from django.urls import path


app_name = 'brzeg'
urlpatterns = [
    path('', views.Index.as_view(), name='index'),
]
if settings.DEBUG:
        urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)