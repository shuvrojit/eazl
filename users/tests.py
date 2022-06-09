from django.contrib.auth import get_user_model
from django.test import TestCase


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
