/**Ejercicio 1
 * Determinar si una persona puede votar
 * utilizando if / else
 */
function puedeVotar(edad) {
    //Determinamos el valor de 18 años como el mínimo para votar
    if (edad >= 18) {
        console.log("La persona tiene la edad para votar");
    } else {
        console.log("La persona no tiene la edad para votar");
    }
}

let edadPersona = parseInt(prompt("Ingresa la edad de la persona:"));


puedeVotar(edadPersona);

/**Ejercicio 2
 * Promedio de un alumno con 4 calificaciones
 */
function obtenerPromedio(calif1, calif2, calif3, calif4) {
    
    let promedio = (calif1 + calif2 + calif3 + calif4) / 4;

    // Demostrar si el promedio es aprobatorio
    if (promedio >= 7) {
        console.log("Aprobado con un promedio de calificaciones de: " + promedio);
    } else {
        console.log("Reprobado con un promedio de calificaciones de: " + promedio);
    }
}

let calif1 = parseFloat(prompt("Ingrese la primera calificación:"));
let calif2 = parseFloat(prompt("Ingrese la segunda calificación:"));
let calif3 = parseFloat(prompt("Ingrese la tercera calificación:"));
let calif4 = parseFloat(prompt("Ingrese la cuarta calificación:"));


obtenerPromedio(calif1, calif2, calif3, calif4);

/** Ejercicio 4
 * Encontrar si un número que puede dividir entre 7 y 8
 */
function esDivisibleEntre7y8(numero) {
    // Demostrar si es posible dividir entre 7 y 8
    if (numero % 7 === 0 && numero % 8 === 0) {
        console.log("Verdadero, este número es divisible entre 7 y 8");
    } else {
        console.log("Falso, este número no es divisible entre 7 y 8");
    }
}

//Datos de prueba
let numero = parseInt(prompt("Ingrese un número para verificar si es divisible entre 7 y 8:"));


esDivisibleEntre7y8(56);  


/**Ejercicio 5
 * Encontrar si un número se puede dividir entre 4 y 9
 */
function esDivisibleEntre4y9(numero) {
    //Demostrar que es divisible entre 4 y 9
    if (numero % 4 === 0 && 9 === 0) {
        console.log("Verdadero, este número es divisible entre 4 y 9");
    } else {
        console.log("Falso, este número no es divisible entre 4 y 9");
        
    }
}

let numeroAleatorio = parseInt(prompt("Ingrese un número aleatorio para verificar si es divisible entre 4 y 9:"));
//Dato aleatorio
esDivisibleEntre4y9(numeroAleatorio);

/**Ejercicio 6
 * Realizar una calculadora simple con operaciones aritméticas básicas
 */
function calculadora(operacion, num1, num2) {
    let resultado;

    switch(operacion) {
        case 1:
            resultado = num1 + num2;
            break;
        case 2:
            resultado = num1 - num2;
            break;
        case 3:
            resultado = num1 * num2;
            break;
        case 4:
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                resultado = "Error: División por el cero da valores imaginarios";
            }
            break;
        default:
            resultado = "Sintax Error";
    }

    return resultado;
}

// Ingresar operación y datos:
let operacion = parseInt(prompt("Seleccione la operación a realizar:\n1. Suma\n2. Resta\n3. Multiplicación\n4. División"));

let num1 = parseInt(prompt("Ingrese el primer número:"));
let num2 = parseInt(prompt("Ingrese el segundo número:"));

let resultado = calculadora(operacion, num1, num2);
console.log("El resultado de la operación es: " + resultado);

//Ejercicio 7
// Recomendaciones de películas
function recomendarPelicula(categoria) {
    let recomendacion;

    switch(categoria.toLowerCase()) {
        case 'Acción':
            recomendacion = "Te recomiendo ver Indiana Jones";
            break;
        case 'Drama':
            recomendacion = "Te recomiendo ver La vida es bella";
            break;
        case 'Comedia':
            recomendacion = "Te recomiendo ver Entrenando a Papá";
            break;
        case 'Romance':
            recomendacion = "Te recomiendo ver Yo antes de ti";
            break;
        case 'Suspenso':
            recomendacion = "Te recomiendo ver ¡Huye!";
            break;
        case 'Terror':
            recomendacion = "Te recomiendo ver El Exorcista";
            break;
        default:
            recomendacion = "No tenemos una recomendación para tu solicitud";
    }

    console.log(recomendacion);
}


let categoria = prompt("Ingrese una categoría de película: Acción,  Drama,  Comedia,  Romance,  Suspenso,  Terror");
recomendarPelicula(categoria);


//Ejercicio 8
//Interfaz de cajero ATM

function atmInterf(opcion) {
    if (opcion === 1) {
        console.log("Seleccionó: Retirar dinero.");
    } else if (opcion === 2) {
        console.log("Seleccionó: Transferencia.");
    } else if (opcion === 3) {
        console.log("Seleccionó: Depósito.");
    } else if (opcion === 4) {
        console.log("Seleccionó: Pago de servicios.");
    } else {
        console.log("La opción no existe, selecciona solamente una opción del 1 al 4");
    }
}


let opcion = parseInt(prompt("Ingrese la opción que desea realizar:\n1. Retirar dinero\n2. Transferencia\n3. Depósito\n4. Pago de servicios"));
atmInterf(opcion);