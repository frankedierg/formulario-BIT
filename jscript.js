var arraynombre = [];
var arrayapellido = [];
var arraydireccion = [];
var nombreconvertido = [];
var apellidoconvertido = [];
var direccionconvertida = [];

var leerinformacion = function(){
    nombreconvertido = arraynombre
    apellidoconvertido = arrayapellido
    direccionconvertida = arraydireccion
    nombreconvertido = JSON.parse(localStorage.getItem('arraynombre'))
    apellidoconvertido = JSON.parse(localStorage.getItem('arrayapellido'))
    direccionconvertida = JSON.parse(localStorage.getItem('arraydireccion'))
    console.log(nombreconvertido)
    console.log(apellidoconvertido)
    console.log(direccionconvertida)
    
    document.getElementById('resultado').innerHTML =''
    for (let i = 0; i <= nombreconvertido.length; i++) {
        document.getElementById('resultado').innerHTML += '<tr><th scope="row">'+i+'</th><td>'+nombreconvertido[i] +'</td><td>'+apellidoconvertido[i]+'</td><td>'+direccionconvertida[i]+'</td><td  class="btn btn-danger" onclick="eliminar('+ i +')">Borrar</td></tr>'

        
    } 
    
}
var guardar = function(){
    var datonombre = document.getElementById('fname').value
    var datoapellido = document.getElementById('lname').value
    var datodireccion = document.getElementById('address').value


    console.log(datonombre)
    arraynombre.push(datonombre)
    arrayapellido.push(datoapellido)
    arraydireccion.push(datodireccion)

    localStorage.setItem('arraynombre',JSON.stringify(arraynombre))
    localStorage.setItem('arrayapellido',JSON.stringify(arrayapellido))
    localStorage.setItem('arraydireccion',JSON.stringify(arraydireccion))
    leerinformacion()
   
}

var eliminar = function(indice){
    console.log(indice)
    arraynombre.splice(indice,1)
    arrayapellido.splice(indice,1)
    arraydireccion.splice(indice,1)
    localStorage.setItem('arraynombre',JSON.stringify(arraynombre))
    localStorage.setItem('arrayapellido',JSON.stringify(arrayapellido))
    localStorage.setItem('arraydireccion',JSON.stringify(arraydireccion))
    leerinformacion()
}

//guardar()

nombreconvertido =arraynombre
leerinformacion()
