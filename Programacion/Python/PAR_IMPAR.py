#autor:Álvaro Delgado ibáñez 
#fecha: 03 de octubre de 2024
#objetivo del programa: par o impar 

n1=input("introduce un numero par: ")
n2=input("introduce un numero impar: ")
 
s1=eval(n1) 
s2=eval(n2)

if s1%2==0 and s2%2!=0:   
    print("gracias por su colaboracion ")
else:
    print("uno o mas valores que ha escrito no son correctos")
    
print("ejecute de nuevo el programa para volver a intentarlo")