from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from django.forms import ModelForm

from .models import User,Article

from django.forms import CharField, Form, PasswordInput
from django import forms


class CreateArticle(ModelForm):
    class Meta:
        model = Article
        fields = ['title', 'text', 'checked']

class RegisterUserForm(forms.ModelForm):
    password1 = forms.CharField(widget=forms.PasswordInput(attrs={'class':'input'}))
    password2 = forms.CharField(widget=forms.PasswordInput(attrs={'class':'input'}))
    class Meta:
        model=User
        fields=['username','password1','password2']
        widgets = {
            'username':forms.TextInput(attrs={'class':'input'}),
            'password1': forms.TextInput(attrs={'class': 'input'}),
            'password2': forms.TextInput(attrs={'class': 'input'}),

        }
class CreateUserForm(UserCreationForm):
	class Meta:
		model = User
		fields = ['username', 'password1', 'password2']

class LoginUserForm(AuthenticationForm):
    password = forms.CharField(widget=forms.PasswordInput(attrs={'class':'input'}))
    class Meta:
        model=User
        fields=['username','password']
        widgets = {
            'username':forms.TextInput(attrs={'class':'input'}),
            'password': forms.TextInput(attrs={'class': 'input'}),
        }
