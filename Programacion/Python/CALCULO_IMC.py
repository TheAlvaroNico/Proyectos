#autor:Álvaro Delgado ibáñez 
#fecha: 23 de septiembre de 2024
#objetivo del programa: caslcular el indice de masa corporal

peso= float(input("Introduce tu peso en kg: "))
altura= float(input("Introduce tu altura en metros: "))

imc = peso / (altura ** 2) 

print (f"su indice de masa corporal es {imc}")

print (f"su indice de masa corporal es {peso} / ({altura} ** 2)={imc}")
