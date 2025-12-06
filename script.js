function ej_1() {
    document.form.enunciado.value="Genera la siguiente serie para ello utilizar formularios y JavaScript: 0,1,1,2,3,5,8,......";
    let n = document.form.entrada.value;
      let n1 = 0;
      let n2 = 1;
      let salida = "0,1,";
      for (let i = 2; i < n; i++) {
        let temp = n1 + n2;
        salida += temp + ",";
        n1 = n2;
        n2 = temp;
      }
    document.form.salida.value=salida;
}

function ej_2() {
    document.form.enunciado.value="Genera la siguiente serie para ello utilizar formularios y JavaScript: 0,1,10,11,100,101...... ";
    let n = document.form.entrada.value;
    let binario = 0;
    let resultado = "";
    while (binario <= n-1) {
        let temp = binario;
        let binarioStr = "";
        while (temp > 0) {
            binarioStr = (temp % 2) + binarioStr;
            temp = Math.floor(temp / 2);
        }
        if (binarioStr === "") {
            binarioStr = "0";
        }
        resultado += binarioStr + ",";
        binario++;
    }
    document.form.salida.value=resultado;
}

function ej_3() {
    document.form.enunciado.value="Imprimir la generacion de los factoriales hasta un N, y calcular la suma: S = 1!+ 2! +3!+...........+N!";
    let n = document.form.entrada.value;
    let suma = 0;3
    let factorial = 1;
    let resultado = "";
    for (let i = 1; i <= n; i++) {
        factorial *= i;
        suma += factorial;
    }
    resultado += suma;
    document.form.salida.value=resultado;
}
function ej_4() {
    document.form.enunciado.value=" ";
}

function ej_5() {
    document.form.enunciado.value=" ";
}

function ej_6() {
    document.form.enunciado.value= "Dado un numero X > 100 mostrar los digitos repetidos";
    let numero = document.form.entrada.value;
    let numeroStr = numero.toString();
    let digitosRepetidos = [];

    for (let i = 0; i < numeroStr.length; i++) {
        for (let j = i + 1; j < numeroStr.length; j++) {
            if (numeroStr[i] === numeroStr[j] && !digitosRepetidos.includes(numeroStr[i])) {
                digitosRepetidos.push(numeroStr[i]);
            }
        }
    }
    if (digitosRepetidos.length > 0) {
        document.form.salida.value=digitosRepetidos.join(", ");
    }
    else {
        document.form.salida.value="No hay dígitos repetidos";
    }
}

function ej_7() {
    document.form.enunciado.value="Dado un numero entero positivo x, se desea saber si el numero es capicua"
    let num = document.form.entrada.value;
    num = num.toString();
    let esCapicua = num === num.split('').reverse().join('');
    if (esCapicua == true) {
        document.form.salida.value="ES CAPICUA";
    }
    else {
        document.form.salida.value="NO ES CAPICUA";
    }
}

function ej_8() {
    document.form.enunciado.value="Verificar si un numero introducido por teclado es primo";
    let num = document.form.entrada.value;
    let esPrimo = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0 && num > 1) {
            esPrimo = false;
            break;
        }
    }
    if (esPrimo && num > 1 ){
        document.form.salida.value="SI ES PRIMO";
    }
    else {
        document.form.salida.value="NO ES PRIMO";
    }
}

function ej_9() {
    document.form.enunciado.value="Generar los numeros primos para n";
    let n = document.form.entrada.value;
    let serie = "";
    let count = 0;
    let num = 2;
    while (count < n) {
        let esPrimo = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                esPrimo = false;
                break;
            }
        }
        if (esPrimo && num > 1) {
            serie += num + ",";
            count++;
        }
        num++;
    }
    document.form.salida.value=serie;
}

function ej_10() {
    document.form.enunciado.value="Vector Fibonacci, generar la serie de fibonacci hasta un N introducido por teclado"
    let n = document.form.entrada.value;
    let n1 = 0;
    let n2 = 1;
    let salida = "0,1,";
    for (let i = 2; i < n; i++) {
      let temp = n1 + n2;
      salida += temp + ",";
      n1 = n2;
      n2 = temp;
    }
    document.form.salida.value=salida;
}

function ej_11() {
    document.form.enunciado.value=" "
}

function ej_12() {
    document.form.enunciado.value="Realizar un programa JavaScript, que permita determinar si una palabra es palindromo"
    let cadena = document.form.entrada.value;
    let esPalindromo = true;

    for (let i = 0; i < cadena.length / 2; i++) {
        if (cadena[i] !== cadena[cadena.length - i - 1]) {
             esPalindromo = false;
             break;
         }
    }
    if (esPalindromo == true) {
        document.form.salida.value= "La cadena es palidromo";
    }
    else {
        document.form.salida.value="La cadena no es palidromo";
    }
}

function ej_13() {
    document.form.enunciado.value="Invertir una cadena de caracteres"
    let cadena = document.form.entrada.value;
    let cadenaInvertida = "";

    for (let i = cadena.length - 1; i >= 0; i--) {
    cadenaInvertida += cadena[i];
    }
    document.form.salida.value=cadenaInvertida;
}

function ej_14() {
    document.form.enunciado.value=" "
}

function ej_15() {
    document.form.enunciado.value="Convetir un numero entero a numeros romanos"
    let num = document.form.entrada.value;
    const valores = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const romanos = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let resultado = '';
    for (let i = 0; i < valores.length; i++) {
        while (num >= valores[i]) {
            resultado += romanos[i];
            num -= valores[i];
        }
    }
    document.form.salida.value=resultado
}

function ej_16() {
    document.form.enunciado.value=" "
}
