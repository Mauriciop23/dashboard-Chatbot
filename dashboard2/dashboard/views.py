from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from dashboard.models import Asesor, Prospecto, Vivienda
from dashboard.serializers import AsesorSerializer, ProspectoSerializer, ViviendaSerializer

from .forms import addAsesorForm

from django.core.files.storage import default_storage
import requests
# Create your views here.

@csrf_exempt
def asesorApi(request, id=0):
    if request.method=='GET':
        asesores = Asesor.objects.all()
        asesores_serializer=AsesorSerializer(asesores,many=True)
        return JsonResponse(asesores_serializer.data,safe=False)
    elif request.method=='POST':
        asesor_data=JSONParser().parse(request)
        asesores_serializer=AsesorSerializer(data=asesor_data)
        if asesores_serializer.is_valid():
            asesores_serializer.save()
            return JsonResponse("Added ASESOR Successfully",safe=False)
        return JsonResponse("Failed to Add ASESOR",safe=False)
    elif request.method=='PUT':
        asesor_data=JSONParser().parse(request)
        asesor=Asesor.objects.get(AsesorId=asesor_data['AsesorId'])
        asesores_serializer=AsesorSerializer(asesor,data=asesor_data)
        if asesores_serializer.is_valid():
            asesores_serializer.save()
            return JsonResponse("Updated ASESOR Successfully",safe=False)
        return JsonResponse("Failed to Update ASESOR")
    elif request.method=='DELETE':
        asesor=Asesor.objects.get(AsesorId=id)
        asesor.delete()
        return JsonResponse("Deleted Successfully ASESOR",safe=False)

@csrf_exempt
def prospectoApi(request, id=0):
    if request.method=='GET':
        prospectos = Prospecto.objects.all()
        prospectos_serializer=ProspectoSerializer(prospectos,many=True)
        return JsonResponse(prospectos_serializer.data,safe=False)
    elif request.method=='POST':
        prospecto_data=JSONParser().parse(request)
        prospectos_serializer=ProspectoSerializer(data=prospecto_data)
        if prospectos_serializer.is_valid():
            prospectos_serializer.save()
            return JsonResponse("Added PROSPECTO Successfully",safe=False)
        return JsonResponse("Failed to Add PROSPECTO",safe=False)
    elif request.method=='PUT':
        prospecto_data=JSONParser().parse(request)
        prospecto=Prospecto.objects.get(prospectoId=prospecto_data['prospectoId'])
        prospectos_serializer=ProspectoSerializer(prospecto,data=prospecto_data)
        if prospectos_serializer.is_valid():
            prospectos_serializer.save()
            return JsonResponse("Updated PROSPECTO Successfully",safe=False)
        return JsonResponse("Failed to Update PROSPECTO")
    elif request.method=='DELETE':
        prospecto=Prospecto.objects.get(prospectoId=id)
        prospecto.delete()
        return JsonResponse("Deleted Successfully PROSPECTO",safe=False)

@csrf_exempt
def viviendaApi(request, id=0):
    if request.method=='GET':
        viviendas = Vivienda.objects.all()
        viviendas_serializer=ViviendaSerializer(viviendas,many=True)
        return JsonResponse(viviendas_serializer.data,safe=False)
    elif request.method=='POST':
        vivienda_data=JSONParser().parse(request)
        viviendas_serializer=ViviendaSerializer(data=vivienda_data)
        if viviendas_serializer.is_valid():
            viviendas_serializer.save()
            return JsonResponse("Added VIVIENDA Successfully",safe=False)
        return JsonResponse("Failed to Add VIVIENDA",safe=False)
    elif request.method=='PUT':
        vivienda_data=JSONParser().parse(request)
        vivienda=Vivienda.objects.get(viviendaId=vivienda_data['viviendaId'])
        viviendas_serializer=ViviendaSerializer(vivienda,data=vivienda_data)
        if viviendas_serializer.is_valid():
            viviendas_serializer.save()
            return JsonResponse("Updated VIVIENDA Successfully",safe=False)
        return JsonResponse("Failed to Update VIVIENDA")
    elif request.method=='DELETE':
        vivienda=Vivienda.objects.get(viviendaId=id)
        vivienda.delete()
        return JsonResponse("Deleted VIVIENDA Successfully",safe=False)


def index(request):
    return render(request, 'index.html')

def home(request):
    response = requests.get('http://127.0.0.1:8000/prospecto')
    prospectos = response.json()
    response_asesor = requests.get('http://127.0.0.1:8000/asesor')
    asesores = response_asesor.json()
    context = {
            'prospectos' : prospectos,
            'asesores' : asesores,
            'activo_home': "text-gray-800",
            'span_home': 'absolute inset-y-0 left-0 w-1 bg-blue-600 rounded-tr-lg rounded-br-lg'
        }
    return render(request, 'home.html', context)

def asesores(request):
    response = requests.get('http://127.0.0.1:8000/asesor')
    asesores = response.json()
    context = {
            'addForm' : addAsesorForm(),
            'asesores' : asesores,
            'activo_asesores': "text-gray-800",
            'span_asesores': 'absolute inset-y-0 left-0 w-1 bg-blue-600 rounded-tr-lg rounded-br-lg'
        }
    return render(request, 'asesores.html', context)
    pass





