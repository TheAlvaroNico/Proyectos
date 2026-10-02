#autor:Álvaro Delgado ibáñez 
#fecha: 03 de octubre de 2024
#objetivo del programa: division cero

num1= int(input("escriba el dividendo: "))
num2= int(input("escriba el divisor: "))

if num2 !=0:
    division= num1/num2
    cociente= num1//num2
    resto= num1%num2 

    if num1 % num2 ==0:
        print(f"la division es exacta. cociente:{cociente} ")
    else: 
        print(f"la division no es exacta. cociente:{cociente } resto:{resto } ")
else:
    print("no se puede dividir por cero")        