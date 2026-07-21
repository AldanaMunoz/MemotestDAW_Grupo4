# Memotest Mundial 2026

## Descripcion

Juego de memoria (memotest) ambientado en el Mundial de Futbol 2026. El jugador
debe encontrar los pares de banderas de las selecciones participantes en la
menor cantidad de intentos, errores y tiempo posible.

## Tematica

Mundial de Futbol 2026. Las cartas representan las banderas de 20 selecciones
participantes. La paleta de colores (verde cancha y dorado), la tipografia y
los textos acompanan esta tematica en todo el sitio.

## Reglas del juego

- El tablero esta formado por una cantidad par de cartas, cada una con su pareja.
- Al iniciar la partida, las cartas se mezclan de forma aleatoria y se muestran boca abajo.
- El jugador selecciona una primera carta y luego una segunda.
- Si ambas coinciden, quedan descubiertas y se suman puntos.
- Si no coinciden, se aplica una penalizacion y vuelven a ocultarse luego de un breve tiempo.
- La partida termina cuando se encuentran todos los pares del tablero.
- Se puede reiniciar la partida sin recargar la pagina, conservando o modificando el nombre y el nivel.

## Sistema de niveles

- Facil: tablero 4x4, 8 pares, penalizacion baja por error.
- Medio: tablero 5x4, 10 pares, penalizacion media por error.
- Dificil: tablero 6x6, 18 pares, penalizacion alta por error.

## Sistema de puntaje

- Par correcto: +100 puntos.
- Error en nivel facil: -10 puntos.
- Error en nivel medio: -20 puntos.
- Error en nivel dificil: -30 puntos.
- Bonus por finalizar la partida: +300 puntos.
- Penalizacion por tiempo: -1 punto por cada segundo transcurrido.
- El puntaje nunca baja de 0.

## Funcionalidades implementadas

- [] Pantalla de inicio con validacion de nombre y nivel
- [] Tablero dinamico con 3 niveles de dificultad
- [] Temporizador y contador de intentos/errores
- [] Sistema de puntaje
- [] Ranking de partidas con LocalStorage
- [] Modo oscuro y modo claro
- [] Pagina de contacto con validaciones

## Como jugar

1. Ingresar un nombre de al menos 3 letras.
2. Elegir un nivel de dificultad (facil, medio o dificil).
3. Presionar "Comenzar partida".
4. Hacer click sobre dos cartas por turno para buscar los pares.
5. Al completar el tablero se muestra el resultado final y se guarda en el ranking.

## Link a GitHub Pages
*Agregar link*

## Integrantes del grupo

Virginia Martinez 
Yamile Mensur
Aldana Muñoz 
Cecilia Nuñez
