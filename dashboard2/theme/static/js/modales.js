
    const modal_InfoContent = (nombre, telefono, registro, estatus, correo, vivienda, fraccionamiento, satisfaccion) =>{
    const title = document.getElementById('modalTitle')
    const body = document.getElementById('modalBody')
    const footer = document.getElementById('modalFooter')

    title.innerHTML = 'Información de: <span class="font-light ">' + nombre + "</span>"
    body.innerHTML =
    '<ul class="max-w-md mb-4 space-y-1 text-gray-500 list-disc list-inside font-extralight dark:text-gray-400">' +
    '<li><span class="font-semibold text-primary-300 dark:text-blue-100">Nombre: </span>'+ nombre +'</li>' +
    '<li><span class="font-semibold text-primary-300 dark:text-blue-100">Telefono: </span>'+ telefono +'</li>' +
    '<li><span class="font-semibold text-primary-300 dark:text-blue-100">Registro: </span>'+ registro +'</li>' +
    '<li><span class="font-semibold text-primary-300 dark:text-blue-100">Estatus: </span><span class="px-3 py-1 ml-2 text-xs text-purple-600 bg-purple-200 rounded-full">'+ estatus +'</span></li>' +
    '</ul><hr>' +
    '<div class="flex flex-wrap justify-between w-full" >' +
    '<div class="inline-flex items-center w-5/12 pb-2 pl-3 my-2 mr-5 border-b border-gray-200">' +
    '<svg  class="w-12 h-12 p-0 mr-2 text-primary-300 dark:text-blue-100" stroke-width="1.2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>' +
    '<div class="leading-3" ><span class="text-xs font-semibold text-primary-300 dark:text-blue-100">Correo</span><p class="text-sm dark:text-gray-200">'+ correo +'</p></div> </div>' +
    '<div class="inline-flex items-center w-5/12 pb-2 pl-3 my-2 mr-5 border-b border-gray-200">' +
    '<svg  class="w-12 h-12 p-0 mr-2 text-primary-300 dark:text-blue-100" stroke-width="1.2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>' +
    '<div class="leading-3" ><span class="text-xs font-semibold text-primary-300 dark:text-blue-100">Tipo de vivienda</span><p class="text-sm dark:text-gray-200">'+ vivienda +'</p></div>' +
    '</div>' +
    '<div class="inline-flex items-center w-5/12 pb-2 pl-3 my-2 mr-5 border-b border-gray-200">' +
    '<svg  class="w-12 h-12 p-0 mr-2 text-primary-300 dark:text-blue-100" stroke-width="1.2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>' +
    '<div class="leading-3" ><span class="text-xs font-semibold text-primary-300 dark:text-blue-100">Fraccionamiento</span><p class="text-sm dark:text-gray-200">'+ fraccionamiento +'</p></div>' +
    '</div>' +
    '<div class="inline-flex items-center w-5/12 pb-2 pl-3 my-2 mr-5 border-b border-gray-200"><svg  class="w-12 h-12 p-0 mr-2 text-primary-300 dark:text-blue-100" stroke-width="1.2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round"  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>' +
    '<div class="leading-3" ><span class="text-xs font-semibold text-primary-300 dark:text-blue-100">Satisfacción</span><span class="px-3 py-1 ml-2 text-xs text-green-600 bg-green-200 rounded-full">'+ satisfaccion +'</span></div>' +
    '</div> </div>'
    footer.innerHTML = ''

  }
  const modal_MailContent = (prospecto) =>{
    const title = document.getElementById('modalTitle')
    const body = document.getElementById('modalBody')
    const footer = document.getElementById('modalFooter')

    title.innerHTML = 'Escribir a: <span class="font-light ">' + prospecto + "</span>"
    body.innerHTML = '<label for="message" class="block mb-2 text-sm font-light text-gray-900 dark:text-gray-400"><span class="font-semibold text-blue-500">Correo:</span> mauperezcar@gmail.com</label><textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escriba un mensaje para Mauricio..."></textarea>'
    footer.innerHTML =
    '<button data-modal-toggle="table_Modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar</button>'

  }
  const modal_DeleteContent = (prospecto) =>{
    const title = document.getElementById('modalTitle')
    const body = document.getElementById('modalBody')
    const footer = document.getElementById('modalFooter')

    title.innerHTML = 'Eliminar a: <span class="font-light ">' + prospecto + "</span>"
    body.innerHTML = 
    '<div class="text-center">' +
    '<svg aria-hidden="true" class="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>' +
    '<h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">¿Seguro de eliminar a Mauricio?</h3>' +
    '</div>'
    footer.innerHTML =
    '<button data-modal-toggle="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center ">Eliminar</button>'
  }

  const modal_addAsesor = (prospecto, form) =>{
    const title = document.getElementById('modalTitle')
    const body = document.getElementById('modalBody')
    const footer = document.getElementById('modalFooter')

    title.innerHTML = 'Nuevo asesor'
    body.innerHTML =
    '<form class="">'+
      '<div class="mb-6">'+
        '<label for="addAsesor_nombre" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nombre</label>'+
        '<input type="text" id="addAsesor_nombre" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>'+
      '</div>'+
      '<div class="flex justify-between ">'+
        '<div class="mb-6">'+
          '<label for="addAsesor_telefono" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Teléfono</label>'+
          '<input type="number" id="addAsesor_telefono" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>'+
        '</div>'+
        '<div class="mb-6">'+
          '<label for="addAsesor_correo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Correo electrónico</label>'+
          '<input type="email" id="addAsesor_correo" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>'+
        '</div>'+
      '</div>'+
    '</form>'
    footer.innerHTML =
    '<button data-modal-toggle="table_Modal" type="button" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Agregar</button>'


  }
