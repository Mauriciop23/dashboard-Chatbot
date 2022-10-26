from django import forms

class addAsesorForm(forms.Form):
    nombre = forms.CharField()
    telefono = forms.CharField()
    correo = forms.CharField()
