//datos de entrada del ususario 
const peso= parseFloat(prompt("introduzca su peso en kg"));
const altura= parseFloat(prompt("introduzca su altura en metros"));

// sumar de los pesos
const IMC= peso / altura**2
// mostramos la informacion al usuario
alert("su indice de masa corporal es " + IMC);

// clasificacion segun el rango 
if (IMC < 18.5) {
    alert("Tu imc es de Bajo peso");
} else if (IMC >= 18.5 && IMC < 24.9) {
    alert("Tu imc es Normal");
} else if (IMC >= 25 && IMC < 29.9) {
    alert("Tu imc es de Sobrepeso");
} else {
    alert("Tu imc es de Sobrepeso");
}

