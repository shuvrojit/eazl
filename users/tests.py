from django.contrib.auth import get_user_model
from django.test import TestCase
from django.urls import reverse, resolve

from .forms import CustomUserCreationForm
from .views import SignUpPageView

class CustomUserTest(TestCase):


    def test_create_user(self):
        user = get_user_model().objects.create_user(
            username="williamsoon",
            email="luckthedog@gm.co",
            password="testpass12"
            )

        self.assertEqual(user.username, "williamsoon")
        self.assertEqual(user.email, "luckthedog@gm.co")
        self.assertTrue(user.is_active)
        self.assertFalse(user.is_staff)
        self.assertFalse(user.is_superuser)

    def test_create_superuser(self):
        admin_user = get_user_model().objects.create_superuser(
            username="superadmin",
            email="bik@gmai.c",
            password="testpass12",
            )
        self.assertEqual(admin_user.username, "superadmin")
        self.assertEqual(admin_user.email, "bik@gmai.c")
        self.assertTrue(admin_user.is_active)
        self.assertTrue(admin_user.is_staff)
        self.assertTrue(admin_user.is_superuser)



class SignUpTest(TestCase):

    username = 'newuser'
    email = 'newuser@gmail.com'

    def setUp(self):
        url = reverse("account_signup")
        self.response = self.client.get(url)


    def test_signup_template(self):
        self.assertEqual(self.response.status_code, 200)
        self.assertTemplateUsed(self.response, "account/signup.html")
        self.assertContains(self.response, "Sign Up")
        self.assertNotContains(self.response, "bigbam")


    def test_signup_form(self):
        new_user = get_user_model().objects.create_user(self.username, self.email)
        self.assertEqual(get_user_model().objects.all().count(), 1)
        self.assertEqual(get_user_model().objects.all()[0].username, "newuser")
        self.assertEqual(get_user_model().objects.all()[0].email, "newuser@gmail.com")
