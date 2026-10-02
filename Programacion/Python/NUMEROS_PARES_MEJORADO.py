# Nombre: Alvaro Delgado Ibáñez
# Fecha: 9/10/2024
# Objetivo: 
print ("Cuenta Pares")
otro = "S"
cont=0
while otro == 'S' or otro =='s':
    a= input("Escriba un número par ")
    a_num=eval(a)
    if a_num % 2==0:
        cont=cont+1
        otro=""
        while otro!='S' and otro!="s" and otro!="N" and otro!="n":
            otro= input("¿Quiere escribir otro número par? (S/N) ")
    elif a_num % 2==1:
        print(a_num, "no es un número par, Inténtelo de nuevo")
print("Ha escrito", cont, "números pares")        