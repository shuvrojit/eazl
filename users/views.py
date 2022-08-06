from django.urls import reverse_lazy
from django.views import generic

from .forms import CustomUserCreationForm


class SignUpPageView(generic.CreateView):
    form_class = CustomUserCreationForm
    succes_url = reverse_lazy('login')
    template_name = 'create_account_page.html'



