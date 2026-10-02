#autor:Álvaro Delgado ibáñez 
#fecha: 23 de septiembre de 2024
#objetivo del programa: pasar de segundas a horas y minutos 

seg = input ("Introduce una cantidad de segundos..")

a = int(seg)

b = (a / 60) 

c = int(b)

d = ((a / 60) - c ) * 60

e = int(d)

f =  (( ((a / 60) - e ) * 60 ) - c) * 60

print (seg, "segundos son", c, "horas y ", round (d), "minutos y", round (f)  )