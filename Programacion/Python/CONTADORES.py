# Nombre: Alvaro Delgado Ibáñez
# Fecha: 9/10/2024
# Objetivo: 

print("Números Negativos")

a= input("¿Cuántos valores va a introducir? ")
a_num = eval(a)

if a_num < 0:
    print("¡Imposible!")
elif a_num == 0:
    print("No ha escrito ningún número negativo")
else:
    cont = 0
    for n in range(1,a_num+1):
        b= input(f"Escribe el número {n} ")
        b_num = eval(b)
        if b_num < 0:
            cont=cont +1
    print("Ha escrito", cont, "números negativos")
