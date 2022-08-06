from django.forms import ModelForm
from .models import Product

class ProductForm(ModelForm):


    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['images'] = forms.FileField(widget=forms.ClearableFileInput(attrs={'multiple':True}))

    class Meta:
        model = Product
        fields = '__all__'
