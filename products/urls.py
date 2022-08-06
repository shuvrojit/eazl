from django.urls import path
from .views import HomePageView, NewArrivalsListView, SalesPageView, BestSellersPageView, ProductDetailView

urlpatterns = [
    path("product/<int:pk>", ProductDetailView.as_view(), name="product_detail"),
    path("new_arrivals", NewArrivalsListView.as_view(), name="new_arrivals"),
    path("sales", SalesPageView.as_view(), name="sales"),
    path("best_sellers", BestSellersPageView.as_view(), name="best_sellers"),
    path('', HomePageView.as_view(), name='home'),
    ]
