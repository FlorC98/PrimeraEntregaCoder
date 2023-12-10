
//ingreso perfiles preexistentes
const aspirantes = [
  {nombre: 'carla perez', edad: '25', tel: '1157890600', mail: 'cperez@gmail.com', puesto: 'limpieza', exp:'2', estudios: 'si'},
  {nombre: 'marcos calandria', edad: '32', tel: '1155727190', mail: 'calandriamarcos5@gmail.com', puesto: 'seguridad',exp: '4', estudios: 'no'},
  {nombre:'marcelo rodriguez', edad: '29', tel: '1123441687', mail: 'marcelorodriguez@gmail.com', puesto: 'portero',exp: '2', estudios: 'si'},
  {nombre: 'paula dorrego', edad: '25', tel: '1140598788', mail: 'pauladorrego98@gmail.com', puesto: 'recepcion',exp: '0', estudios: 'no'},
  {nombre: 'roman aguero', edad: '38', tel: '1109007865', mail: 'agueroroman@gmail.com', puesto: 'atencion al cliente', exp: '0', estudios: 'si'},
];

//funcion de pedir usuario
function pedirusuario() {
  user = prompt("ingrese usuario")
  pass = prompt("ingrese contraseña")
}

//funcion pedido de datos//
const pedidodedatos= function() {
  nombre = prompt('Ingrese su nombre completo').toLowerCase()
  while (true) {
  edad = parseInt(prompt('Ingrese su edad'))
  if (edad > 0 && edad < 100) {
    break
  } else {
    alert('Porfavor ingrese su edad en numero')
   }
  }
  while (true) {
  tel =prompt('Ingrese un número de teléfono de contacto')
  if (tel.length == 10) {
    break
   } else {
    alert('Por favor, ingrese un número de teléfono válido (10 dígitos)')
   } 
  }
  mail = prompt('Ingrese un mail de contacto').toLowerCase()
  puesto = prompt('A cual de los siguientes puestos se esta postulando?'  + "\n" + "Recepcion"+ "\n" + "Atencion al cliente"+ "\n" + "Portero"+ "\n" + "Limpieza"+ "\n" + "Cocina"+ "\n" + "Community Manager"+ "\n" + "Seguridad"+ "\n" + "Ventas").toLowerCase()
  while (true) {
  exp = prompt('Ingrese experiencia en años')
  if (exp < 100) {
    break
  } else {
    alert('Por favor su experiencia en años en forma de numero')
   }
  }
  while (true) {
    estudios = prompt('¿Posee algún tipo de estudios? (si/no)').toLowerCase();
    if (estudios == 'si' || estudios == 'no') {
      break
    } else {
      alert('Por favor, indique si o no');
    }
  }
}
 //funcion nuevo perfil
const CrearNuevoPerfil = function () {
  aspirantes.push({nombre,edad,tel,mail,puesto,exp,estudios})
}

//funcion ver aspirantes
const VerAspirantes = function(){
  const nombres = []
  for (let i = 0; i < aspirantes.length; i++) {
    nombres.push(aspirantes[i].nombre + '\n')
  }
  alert('Aspirantes:\n\n' + nombres.join(''))
}

///////////////////////////////////////////////////////////////////////

//ingreso a la pagina

while (true) {
  ingreso = prompt("Bienvenido a Tourism SA." + "\n" + "¿Posee una cuenta en nuestra página? (SI/NO)").toLowerCase()
  if (ingreso == 'si') {
    pedirusuario()
    if (user == 'FlorenciaC' && pass == '12345678') {
      alert("Bienvenida Florencia, estos son nuestros aspirantes")
      VerAspirantes()
      break;  
  } else {
    alert('credenciales invalidas')
  }
    } else if (ingreso == 'no') {
      alert('Perfecto, a continuacion te pediremos una serie de datos para completar el registro')
      pedidodedatos()
      alert('Los datos ingresados son:'+ "\n" + 'NOMBRE:'+ nombre + "\n" + 'EDAD:'+ edad +
      "\n" + 'TELEFONO DE CONTACTO:'+ tel + "\n" + 'MAIL:'+ mail + "\n" + 'PUESTO:'+ puesto + "\n" + 'EXPERIENCIA EN AÑOS:'+ exp +
      "\n" + 'ESTUDIOS:'+ estudios )
      CrearNuevoPerfil()
      alert('Perfecto, tu postulacion quedó registrada!. Nos estaremos contactando con vos, gracias por elegiurnos!')
      console.log(aspirantes)
      break; 
  }  else {
    alert('Respuesta no válida. Por favor, responda con SI o NO.');
  }
}

//a que puesto se postula, modificar las opciones y poner un if si no pone lo correcto
//exp poner if no hayun si o no alerta
//cuenta con exp en el area, mismo euq el anterior y arreglar lo del salto de pagina
//poner para que veas los aspirantes y no por consola
//

