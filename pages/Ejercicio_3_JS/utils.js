//Variables
//  Usuario y contraseña
let usuario = document.getElementById("usuario");
let password = document.getElementById("passwd");
//  Mensajes de error y validacion
let userRequired = document.getElementById("user-req");
let userLength = document.getElementById("user-length");
let passwdRequired = document.getElementById("passwd-req");
let passwdLength = document.getElementById("passwd-length");
let validacionCorrecta = document.getElementById("validacion-correcta");

//Funcion
let validar = function(){
    //Si la longitud de alguno de los campos es menor a 3:
    if(usuario.value.length < 3 || password.value.length < 3){
        //Si alguno de los campos está vacío:
        if(usuario.value === "" || password.value === ""){
            //Si el campo del usuario está vacio:
            if(usuario.value === ""){
                validacionCorrecta.style.display = 'none';
                userLength.style.display = 'none';
                userRequired.style.display = 'block';
            } else if(usuario.value !== "") {
                userRequired.style.display = 'none';
            }
            //Si el campo de la contraseña está vacio:
            if(password.value === ""){
                validacionCorrecta.style.display = 'none';
                passwdLength.style.display = 'none';
                passwdRequired.style.display = 'block';
            } else if(password.value !== ""){
                passwdRequired.style.display = 'none';
            }

        } 
        //Si el campo del usuario no está vacio, pero la longitud es menor a 3 caracteres:
        if(usuario.value.length < 3 && usuario.value !== ""){
            validacionCorrecta.style.display = 'none';
            userRequired.style.display = 'none';
            userLength.style.display = 'block';
        } else {
            userLength.style.display = 'none';
        }
        //Si el campo de la contraseña no está vacio, pero la longitud es menor a 3 caracteres:
        if(password.value.length < 3 &&  password.value !== ""){
            validacionCorrecta.style.display = 'none';
            passwdRequired.style.display = 'none';
            passwdLength.style.display = 'block';
        } else {
            passwdLength.style.display = 'none';
        }
        //Si ninguna de las condiciones anteriores se cumplen:
    } else {
        userRequired.style.display = 'none';
        userLength.style.display = 'none';
        passwdRequired.style.display = 'none';
        passwdLength.style.display = 'none';
        validacionCorrecta.style.display = 'block';
    }
}