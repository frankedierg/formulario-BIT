var datosPersona = []
var array_datos = []
var datos = {}
var contador = 1

var leerdatos = function(){
    array_datos = JSON.parse(localStorage.getItem('datosPersona'))
    datosPersona = JSON.parse(localStorage.getItem('datosPersona'))
    console.log(array_datos)
    if (array_datos==null) {
       array_datos = [];  
    }
    if (datosPersona==null) {
        datosPersona = []  
    }

    document.getElementById('registros').innerHTML = ''
    for (let i = 0; i < array_datos.length; i++) {
        contador= i+1
        document.getElementById('registros').innerHTML += '<tr><td>'+ contador +'</td><td>'+array_datos[i].Fname+'</td><td>'+array_datos[i].Lname+'</td><td>'+array_datos[i].Address+'</td><td  class="btn btn-primary btn-sm btn-danger" onclick="eliminar('+ i +')">Borrar</td></tr>'
          
    }
}

var guardar = function(){
    var nombre = document.getElementById('nombre').value
    console.log(nombre)
    var apellido = document.getElementById('apellido').value
    console.log(apellido)
    var direccion = document.getElementById('direccion').value
    console.log(direccion)
    var datos = {
        Fname: nombre,
        Lname: apellido,
        Address: direccion
    }
    datosPersona.push(datos)
    localStorage.setItem('datosPersona',JSON.stringify(datosPersona))
    leerdatos()
  
   
}
var eliminar = function(indice){
    console.log(indice)
    datosPersona.splice(indice,1)
    localStorage.setItem('datosPersona',JSON.stringify(datosPersona))
    leerdatos()
}

leerdatos()


