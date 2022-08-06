from django.test import SimpleTestCase
from django.urls import reverse, resolve

from .views import HomePageView, NewArrivalsPageView, SalesPageView, BestSellersPageView

class HomePageTest(SimpleTestCase):


    def setUp(self):
        url = reverse('home')
        self.response = self.client.get(url)

    def test_homepage_status_code(self):
        self.assertEqual(self.response.status_code, 200)

    def test_homepage_template(self):
        self.assertTemplateUsed(self.response, "index.html")

    def test_homepage_contains_correct_html(self):
        self.assertContains(self.response, "home")

    def test_homepage_does_not_contain_incorrect_html(self):
        self.assertNotContains(self.response, "Hi, I am a resonse")

    def test_homepage_url_resolves_homepageview(self):
        view = resolve("/")
        self.assertEqual(view.func.__name__, HomePageView.as_view().__name__)


class NewArrivalsPageTest(SimpleTestCase):
    """New Arrivals Page Test Cases"""

    def setUp(self):
        url = reverse("new_arrivals")
        self.response = self.client.get(url)

    def test_new_arrivals_page_status_code(self):
        self.assertEqual(self.response.status_code, 200)

    def test_new_arrivals_template(self):
        self.assertTemplateUsed(self.response, "new_arrivals.html")

    def test_new_arrivals_contains_correct_html(self):
        self.assertContains(self.response, "new_arrivals")

    def test_new_arrivals_does_not_contain_incorrect_html(self):
        self.assertNotContains(self.response, "Hi, I am a response")

    def test_new_arrivals_url_resovles_newarrivalsview(self):
        view = resolve("/new_arrivals")
        self.assertEqual(view.func.__name__, NewArrivalsPageView.as_view().__name__)


class SalesPageTest(SimpleTestCase):
    """New Arrivals Page Test Cases"""

    def setUp(self):
        url = reverse("sales")
        self.response = self.client.get(url)

    def test_sales_page_status_code(self):
        self.assertEqual(self.response.status_code, 200)

    def test_sales_template(self):
        self.assertTemplateUsed(self.response, "sales.html")

    def test_sales_contains_correct_html(self):
        self.assertContains(self.response, "sales")

    def test_sales_does_not_contain_incorrect_html(self):
        self.assertNotContains(self.response, "Hi, I am a response")

    def test_sales_url_resovles_sales_view(self):
        view = resolve("/sales")
        self.assertEqual(view.func.__name__, SalesPageView.as_view().__name__)


class BestSellersPageTest(SimpleTestCase):
    """New Arrivals Page Test Cases"""

    def setUp(self):
        url = reverse("best_sellers")
        self.response = self.client.get(url)

    def test_best_sellers_page_status_code(self):
        self.assertEqual(self.response.status_code, 200)

    def test_best_sellers_template(self):
        self.assertTemplateUsed(self.response, "best_sellers.html")

    def test_best_sellers_contains_correct_html(self):
        self.assertContains(self.response, "best_sellers")

    def test_best_sellers_does_not_contain_incorrect_html(self):
        self.assertNotContains(self.response, "Hi, I am a response")

    def test_best_sellers_url_resovles_best_sellers_view(self):
        view = resolve("/best_sellers")
        self.assertEqual(view.func.__name__, BestSellersPageView.as_view().__name__)
