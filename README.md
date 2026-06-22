# Memorice

## Problema

Desarrollar el código JavaScript para completar el juego Memorice. El objetivo del juego es encontrar los pares en la menor cantidad de turnos posibles.

En cada turno, el usuario selecciona dos cartas, las cuales se dan vuelta. Si son iguales, el par se retira del tablero. El juego termina cuando el jugador encuentra todas las parejas (no quedan cartas en el tablero).

---

## 2. Programa

Deberá desarrollar el código JavaScript que complemente los archivos HTML y CSS existentes, realizando las siguientes tareas:

### 1. Seleccionar carta

El jugador selecciona una carta al hacer click con el mouse sobre ella.

La carta seleccionada debe recibir la clase `card-front` y además debe mostrar el valor que la representa, el cual está definido en el atributo `data-val`.

---

### 2. Turno

El jugador selecciona dos cartas, estas se comparan:

- Si son iguales: se eliminan del tablero (clase `hidden`)
- Si no son iguales: se vuelven a voltear a su estado original

Al terminar el turno se debe aumentar el contador de turnos.

---

### 3. Usabilidad

Para que el jugador pueda visualizar el valor de las cartas en un turno, se debe agregar una pausa entre que se da vuelta la segunda carta y la resolución de la jugada.

Para esto se debe utilizar `setTimeout`, que recibe:

- Una función
- Un tiempo de espera en milisegundos (600 ms)

Luego de ese tiempo se ejecuta la función entregada.

---

### 4. Revolver valores

Incorporar una función que permita mezclar los valores de las cartas al momento de cargar la página (ejecutada en `DOMContentLoaded`).

Para esto:

- Obtener los valores actuales de las cartas (`data-val`)
- Reordenarlos usando `Array.toSorted`
- Usar una función de comparación aleatoria basada en `Math.random()`

Esto permite asignar un orden aleatorio a las cartas.

#### Nota sobre `Array.toSorted`

La función de comparación recibe dos elementos:

- Si el resultado es negativo → el primero es menor
- Si es positivo → el segundo es menor

El uso de valores aleatorios permite mezclar el orden.

---

## Restricciones

- No se pueden modificar los archivos HTML y CSS
- Solo se debe modificar el archivo JS
- Se debe utilizar paradigma funcional

---

## 3. Funciones JavaScript útiles

Se puede acceder a atributos `data-*` de un elemento HTML mediante `dataset`.

Ejemplo:

```html
<div id="id1" data-name="NN"></div>
```

Acceso en JavaScript:

```js
document.getElementById("id1").dataset.name;
```
