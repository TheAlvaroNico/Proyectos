# Nombre: Alvaro Delgado Ibáñez
# Fecha: 9/10/2024
# Objetivo: 
num1=int(input("escribe un numero entero: "))
num2=int(input("escribe otro numero entero: "))

if num1 > num2:
    num1, num2 =num2,num1

print(list(range(num1,num2 + 1)))

