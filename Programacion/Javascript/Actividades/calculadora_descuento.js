const precio= parseFloat(prompt("introduce el precio"));
const descuento= parseFloat(prompt("introduce el porcentaje de descuento"));

const precio_descuento =(precio*descuento)/100;

alert("el precio de descuento es de " + (precio-precio_descuento))


