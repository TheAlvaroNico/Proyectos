#autor:Álvaro Delgado ibáñez 
#fecha: 03 de octubre de 2024
#objetivo del programa: comparar multiplos 

num1= int(input("escriba un numero: "))
num2= int(input("escriba otro numero: "))

if num1 > 0 and num2 >0:
        if num1%num2==0 or num2%num1 ==0:
                print(f"{num1} es multiplo de {num2}.")
        else:
                print(f"{num1} no es multiplo de {num2}")
else:
    print("lo siento, este programa no admite valores negativos. ")   
    print("lo siento, este programa no admite valores nulos. ")     
