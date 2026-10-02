//datos de entrada del ususario 
const gastos_alojamiento= parseFloat(prompt("introduce los gastos de alojamiento de tu viaje"));
const gastos_alimentacion= parseFloat(prompt("introduce los gastos de alojamiento de tu viaje"));
const gastos_entretenimiento= parseFloat(prompt("introduce los gastos de alojamiento de tu viaje"));
// suma de los gastos
const suma= gastos_alimentacion + gastos_alojamiento + gastos_entretenimiento 
// mostramos la informacion al usuario
alert("el coste total del viaje es" + suma);