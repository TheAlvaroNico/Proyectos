# Nombre: Alvaro Delgado Ibáñez
# Fecha: 9/10/2024
# Objetivo: 
print("Suma entre valores")

a= input("Escriba un número positivo ")
a_num= eval(a)

if a_num<0:
    print("¡Le he pedido un número entero positivo!")
elif a_num>=0:
    b = input(f"Escriba un número entero positivo mayor que {a_num} ")
    b_num=eval(b)
    if b_num<=a_num:
        print("Le he pedido un número entero positivo mayor que", a)
    else:
        suma = 0
        for n in range(a_num,b_num+1):
            suma = suma + n
        print("la suma desde", a_num, "hasta", b_num, "es", suma)
        