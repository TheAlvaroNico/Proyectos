from pathlib import Path

import pygame

pygame.init()

ventana = pygame.display.set_mode((800, 600))
pygame.display.set_caption("Mi primer juego")

logo = pygame.image.load(Path(__file__).parent / "img" / "logo.png")
pygame.display.set_icon(logo)

ejecutando = True

while ejecutando:

    for evento in pygame.event.get():
        if evento.type == pygame.QUIT:
            ejecutando = False

    ventana.fill((30, 30, 30))

    pygame.display.flip()

pygame.quit()