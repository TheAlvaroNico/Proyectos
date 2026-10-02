#autor:Álvaro Delgado ibáñez 
#fecha: 03 de octubre de 2024
#objetivo del programa: comparar numeros

num1= float(input("escriba un numero: "))
num2= float(input("escriba otro numero: "))
num3= float(input("escriba otro numero mas: "))

if num1==num2==num3:
        print("has escrito tres veces el mismo numero.")
elif num1 == num2 or num1 == num3 or num2 == num3:
        print("has escrito uno de los numeros dos veces")
else:
    print("los tres numeros que has escrito son distintos. ")        
