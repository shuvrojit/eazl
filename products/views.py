from django.views.generic import TemplateView


class HomePageView(TemplateView):
    """Home page view class"""

    template_name = "ea/index.html"
