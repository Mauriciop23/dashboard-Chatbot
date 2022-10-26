from djongo import models
import datetime


class Asesor(models.Model):
    AsesorId = models.AutoField(primary_key=True)
    Nombre = models.CharField(max_length=500)
    Telefono = models.CharField(max_length=10)
    Correo = models.CharField(max_length=256)
    Prospectos = models.IntegerField(blank=True, null=True, default=0)


class Prospecto(models.Model):
    prospectoId = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=500, blank=True, null=True)
    telefono = models.CharField(max_length=10, blank=True, null=True)
    correo = models.EmailField()
    nss = models.CharField(max_length=11, blank=True, null=True)
    curp = models.CharField(max_length=18, blank=True, null=True)
    vivienda = models.CharField(max_length=256, blank=True, null=True)
    fraccionamiento = models.CharField(max_length=100, blank=True, null=True)
    cotizacion = models.CharField(max_length=256, blank=True, null=True)
    recomendacion =  models.CharField(max_length=256, blank=True, null=True) 
    estatus = models.CharField(max_length=100, blank=True, null=True)
    asesor = models.CharField(max_length=100, blank=True, null=True)
    plazo =  models.CharField(max_length=256, blank=True, null=True)
    enganche = models.CharField(max_length=100, blank=True, null=True)
    precioCasa = models.CharField(max_length=100, blank=True, null=True)
    satisfaccion = models.IntegerField(blank=True, null=True, default=0)
    registro = models.DateField(default=datetime.date.today)
    

class Vivienda(models.Model):
    viviendaId = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=500, blank=True, null=True)
    precio = models.CharField(max_length=100, blank=True, null=True)
    caracteristicas = models.CharField(max_length=100, blank=True, null=True)
    area = models.CharField(max_length=100, blank=True, null=True)
    fraccionamiento = models.CharField(max_length=100, blank=True, null=True)
    imagen = models.CharField(max_length=500, blank=True, null=True)