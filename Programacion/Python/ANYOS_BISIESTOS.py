#autor:Álvaro Delgado ibáñez 
#fecha: 03 de octubre de 2024
#objetivo del programa: que pida los años y que escroiba si es bisiesto o no. 

año= int(input("escriba un año y le dire si es bisiesto: "))
if (año % 4 == 0 and año % 100 != 0) or (año % 400 == 0):
    print(f"El año {año} es bisiesto.")
else:
    print(f"El año {año} no es bisiesto.")
    