function validacion(){//Creamos funcion de validacion
    console.log("Validando los datos del formulario")
    
    re = /^[A-Z]/;//ponemos la expresion regular para que se valide
    if(nombre.value.match(re)){
        console.log("Nombre ok")
    }
    else{
        alert('ERROR! Debe rellenar correctamente el nombre');//En caso de que no se cumpla, nos devuelve error.
        return false;
    }

    if(direccion.value.match() == ""){
        console.log("Direccion ok")
    }
    else{
        alert('ERROR! Debe rellenar la dirección para recibir la pizza!');//En caso de que no se rellene, nos devuelve error.
        return false;
    }

    re = /^[6-7]+[0-9]{8}/;//ponemos la expresion regular para que se valide
    if(telefono.value.match(re)){
        console.log("Telefono ok")
    }
    else{
        alert('ERROR! Debe rellenar correctamente el teléfono');//En caso de que no se cumpla, nos devuelve error.
        return false;
    }

    re = /\w+@{1}\w+([.])/;//ponemos la expresion regular para que se valide
    if(email.value.match(re)){
        console.log("Email ok")
    }
    else{ 
        alert('ERROR! Debe rellenar correctamente el email');//En caso de que no se cumpla, nos devuelve error.
        return false;
    }

    tamaño = document.getElementsByName("tamaño");
    var tamañoSelec = false;
    for(var i=0; i<tamaño.length; i++) {
        if(!tamaño[i].checked) {
            tamañoSelec = true;
            console.log("Tamaño ok")
            break;
        }
        if (!tamañoSelec) {
        alert('ERROR! Debe seleccionar un tamaño de pizza.');//En caso de que no se cumpla, nos devuelve error.
        console.log("Error al validar");
        return false;
        }
    }

    ingedientes = document.getElementsByName("ingedientes");
    var ingedientesSelec = false;
    for(var i=0; i<ingedientes.length; i++) {
        if(!ingedientes[i].checked) {
            ingedientesSelec = true;
            console.log("ingedientes ok")
            break;
        }
        if (!ingedientesSelec) {
        alert('ERROR! Debe seleccionar un tamaño de pizza.');//En caso de que no se cumpla, nos devuelve error.
        console.log("Error al validar");
        return false;
        }


    /*ingredientes = document.getElementsByName("ingredientes");
    var ingredSelec = false;
    for(var i=0; i<ingredientes.length; i++) {
        if(ingredientes[i].checked) {
            ingredSelec = true;
            console.log("Ingredientes ok")
            break;
        }
        if (!ingredSelec) {
        alert('ERROR! Debe seleccionar mínimo un ingrediente para la pizza.');//En caso de que no se cumpla, nos devuelve error.
        console.log("Error al validar");
        return false;
        }
    }*/
    alert("Tramitando su pedido")
    return true;
}

window.onload = function(){
    formulario.onsubmit = validacion;//Se activa cuando pulsamos procesar pedido.
}
}