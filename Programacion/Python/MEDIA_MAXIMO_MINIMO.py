# Nombre: Alvaro Delgado Ibáñez
# Fecha: 9/10/2024
# Objetivo: 
print("Mayor, Menor, y Media Aritmética")

a= input("¿Cuántos valores va a introducir? ")
a_num = eval(a)

if a_num < 0:
    print("¡Imposible!")
elif a_num == 0:
    print("Pruebe a iniciar el programa otra vez y poner un número mayor que 0")
else:
    media = 0
    max= 0
    min = 99999
    for n in range(1,a_num+1):
        b= input(f"Escribe el número {n} ")
        b_num = eval(b)
        media = media + b_num
        if b_num > max:
            max = b_num
        if b_num < min:
            min = b_num
        media = media / a_num
    
    print("El número más pequeño es", min )
    print("El número más grande es", max )
    print("La media de los números introducidos es", media)        