from django.views.generic import TemplateView, ListView, DetailView

from .models import Product


class HomePageView(TemplateView):
    """Home page view class"""

    template_name = "index.html"


class NewArrivalsListView(ListView):
    """New Arrivals Page"""

    model = Product
    context_object_name = "product_list"
    template_name = "new_arrivals.html"


class SalesPageView(TemplateView):
    """ Sales page view"""

    template_name = "sales.html"


class BestSellersPageView(TemplateView):
    """ Best Sellers view"""

    template_name = "best_sellers.html"

class ProductDetailView(DetailView):

    model = Product
    context_object_name = "product"
    template_name = "product_page.html"
