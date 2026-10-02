#autor:Álvaro Delgado ibáñez 
#fecha: 23 de septiembre de 2024
#objetivo del programa: pasar de segundos a minutos 

seg = input ("Introduce una cantidad de segundos..")

a = int(seg)

b = (a / 60) 

c = int(b)

d = ((a/ 60) - c ) * 60

e = int(d)

print (seg, "segundos son", c, "minutos y ", round (d), "segundos" )