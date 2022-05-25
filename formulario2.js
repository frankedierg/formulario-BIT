var datosPersona = []
var array_datos = []
var datos = {}

var leerdatos = function(){

    array_datos = JSON.parse(localStorage.getItem('datosPersona'))
    
    console.log(array_datos)
    document.getElementById('registros').innerHTML = ''
    for (let i = 0; i < array_datos.length; i++) {
        document.getElementById('registros').innerHTML += '<tr><td>#</td><td>'+datosPersona[i] +'</td></tr>' 
        
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
guardar()
leerdatos()
array_datos = datosPersona


