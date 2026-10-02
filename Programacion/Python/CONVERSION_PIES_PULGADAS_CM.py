#autor:Álvaro Delgado ibáñez 
#fecha: 23 de septiembre de 2024
#objetivo del programa: escribir una distancia en pues y pulgadas y que escriba esa distancia en centimetros 

pies = input ("Escriba una cantidad de pies:")
pulgadas = input ("Escriba una cantidad de pulgadas")

a = float(pies) 
b = float(pulgadas)

print ( pies, "pies y", pulgadas, "pulgadas son", (( a * 12 ) * 2.54) + (b * 2.54), "cm")