from rest_framework import serializers
from dashboard.models import Asesor, Prospecto, Vivienda


class AsesorSerializer (serializers.ModelSerializer):
    class Meta:
        model = Asesor
        fields = ('AsesorId', 'Nombre', 'Telefono', 'Correo', 'Prospectos')

class ProspectoSerializer (serializers.ModelSerializer):
    class Meta:
        model = Prospecto
        fields = ('prospectoId', 'nombre', 'telefono', 'correo', 'nss', 'curp', 'vivienda', 'fraccionamiento', 'cotizacion', 'recomendacion', 'estatus', 'asesor', 'plazo', 'enganche', 'precioCasa')

class ViviendaSerializer (serializers.ModelSerializer):
    class Meta:
        model = Vivienda
        fields = ('viviendaId', 'nombre', 'precio', 'caracteristicas', 'area', 'fraccionamiento', 'imagen')