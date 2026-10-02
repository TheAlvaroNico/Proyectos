# Nombre: Alvaro Delgado Ibáñez
# Fecha: 9/10/2024
# Objetivo: 

num=input("introduce un numero mayor que cero: ")

r1=eval(num)

if r1>0:
    divisores= [i for i in range(1,r1 +1) if r1%1==0]
    print("los divisores de", r1, "son", divisores)

else:
    print("le he pedido un numero entero mayor que cero")

