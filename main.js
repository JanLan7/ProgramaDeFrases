import { frases, libros, chistes, reseñasDeDiscos, microcuentos } from './datos.js'


//funcion para la eleccion de citas filosoficas
function citaFilosofica(){ 
    let indiceAleatorio = Math.floor(Math.random() * frases.length);
    return frases[indiceAleatorio]; 
}

//Funcion para la opcion 2 de recomendaciones de libros
function librosSeleccion(){ 
    let indiceAleatorio = Math.floor(Math.random() * libros.length);
    return libros[indiceAleatorio]; 
}

// funcion para la opcion 3
function chistesSeleccion(){ 
    let indiceAleatorio = Math.floor(Math.random() * chistes.length);
    return chistes[indiceAleatorio]; 
}

//Funcion para la opcion 4
function discosSeleccion(){ 
    let indiceAleatorio = Math.floor(Math.random() * reseñasDeDiscos.length);
    return reseñasDeDiscos[indiceAleatorio]; 
}

//funcion para la opcion 5
function microcuentosSeleccion(){ 
    let indiceAleatorio = Math.floor(Math.random() * microcuentos.length);
    return microcuentos[indiceAleatorio]; 
}

//Funcion dejar propina
function dejarPropina(){
    let siGusto = confirm("Desearía dejar alguna propina al programador?😁")
    if(siGusto){
        let cuanto = Number(prompt("Cuantos $ le gustaría dar?:"))
        if(cuanto <= 0){
            alert("Tacaño/a 😛");
        }else if(cuanto >=1 && cuanto <= 30){
            alert("Tacaño pero generoso 😛")
        }else if (isNaN(cuanto)){
            alert("Operación cancelada. Tenías que ingresar un numero nomas 💩");
        }else if(cuanto > 30 && cuanto < 100){
            alert("Muchas Gracias por el aporte 😁")
        }else if(cuanto > 100){
            alert("Gracias Sr millonario 🤑😜")
        }
    }else{
        alert("No hay problema 😒.Nos vemos!")
    }
    
}
//Funcion contraseña
function pedirContraseña() {
    let contraseñaUsuario = prompt("Antes de empezar. Cree una contraseña");

    // Verificar si la contraseña creada es nula o está vacía
    if (contraseñaUsuario === null || contraseñaUsuario.trim() === "") {
        alert("Operación cancelada. No se ha creado una contraseña.");
        return false; // Indica que no se completó la creación de la contraseña
    }

    let intentos = 0;
    let maxIntentos = 4;

    while (intentos < maxIntentos) {
        let contraseña = prompt("Compruebe la contraseña");

        if (contraseña === null) {
            alert("Operación cancelada.");
            return false; // Indica que se canceló el proceso
        }

        // Validar que la contraseña ingresada no esté vacía
        if (contraseña.trim() === "") {
            alert("La contraseña no puede estar vacía.");
            continue;
        }

        if (contraseña === contraseñaUsuario) {
            alert("Contraseña correcta! has ingresado a la matrix 😎");
            return true; // Indica que la autenticación fue exitosa
        } else {
            alert("La contraseña es incorrecta");
            intentos++;
        }
    }

    if (intentos === maxIntentos) {
        alert("Has excedido el número máximo de intentos.");
        return false; // Indica que se alcanzó el límite de intentos
    }
}

// Llamar a la función pedirContraseña y verificar su resultado
if (pedirContraseña()) {
    // Si la autenticación es exitosa, continuar con el siguiente paso
    let nombreUsuario = prompt("Ingrese su nombre");
    alert("Bienvenido, " + nombreUsuario);
} else {
    // Si la autenticación no es exitosa, detener el flujo del programa
    alert("No puedes continuar sin autenticarte.");
}


//El programa arranca pidiendo al usuario crear una contraseña antes de arrancar
//el programa pide que ingrese un nombre para nombrarle y darle las opciones de lo que puede hacer

function principal(){
    pedirContraseña();

    let nombre = prompt("Ingrese su nombre");
    if (nombre === null){ 
        alert("Operación cancelada.");
        return;
    }
    let seguir = true
    while (seguir){
        let inicio = Number(prompt(`Hola! ${nombre}!\nElegí una de las opciones del 1 al 5\n1. Cita filosofica para el día de hoy\n2. Recomendacion de libros\n3. Un chistesin\n4. Recomendacion de discos\n5. Un microcuento`));
    if (isNaN(inicio)){
        alert("Operación cancelada. Tenías que ingresar un numero nomas 💩");
        seguir = confirm("Queres ver el menu de vuelta?");
        continue;
        }
        switch(inicio){
            case 1:
            alert(citaFilosofica())
            alert("Espero que esto te haya hecho reflexionar 😌")
            seguir = confirm("Queres ver el menu de vuelta?")
            break
        case 2:
            alert(librosSeleccion())
            alert("Espero tus comentarios del libro 🤸‍♂️")
            seguir = confirm("Queres ver el menu de vuelta?")
            break
        case 3:
            alert(chistesSeleccion())
            alert(" 🤣 🤸‍♂️")
            seguir = confirm("Queres ver el menu de vuelta?")
            break
        case 4:
            alert(discosSeleccion())
            alert("Espero tus comentarios del disco 😎")
            seguir = confirm("Queres ver el menu de vuelta?")
            break
        case 5:
            alert(microcuentosSeleccion())
            alert("Espero tus comentarios del microcuento 😎")
            seguir = confirm("Queres ver el menu de vuelta?")
            break
        default:
            alert("Opcion no valida. Tenes que ingresar un numero del UNO AL CIN CO 😫")
            seguir = confirm("Queres ver el menu de vuelta?")
            break;
    }   
    }
    dejarPropina();
    alert("Adios pequeño saltamontes 🤸‍♂️") 
}
principal();