# Ejercicio 1 FIS
Repositorio para la realización del ejercicio 1 de la asignatura Fundamentos de Ingeniería del Software.

# Importante :warning:
Poner nombre y número de estudiante en la línea siguiente (sustituir XXXXXXXX por el nombre y número de estudiante):  
* Nombre: XXXXXXXX  
* Numero de estudiante: XXXXXXXX


## Parte A
Dada la siguiente imagen de un grafo de "depedencias" entre las ramas de un repositorio git y partiendo de que el repositorio está en la nube, y que el repositorio local está sincronizado con el remoto, se pide:

* Poner en orden cronologico los comandos gits que se utilizaron para poder realizar el grafo de la imagen.

![Image](https://i.imgur.com/iqAABQ6.png)


### Aclaraciones:
* Cada nodo es un commit.
* Hay tres ramas con su nombre correspondiente.
* Se "lee" de izquierda a derecha

**Poner la solución en un issue en el mismo repositorio con el nombre "Parte A"**

## Parte B
Usted es el encargado de implementar dos nuevas funcionalidades en un proyecto legacy. El código se encuentra en la rama main (dentro de la carpeta src).
Es una ToDoApp que permite crear tareas, marcarlas como completadas y eliminarlas. También se pueden crear Pomodoros y removerlos.

Se tienen dos clases:
* Task: Representa una tarea con su nombre y si está completada o no
* Pomodoro: Representa un pomodoro con su nombre, su duración, si está completado o no.

## Importante 
La funcionalidad 1 debe ser implementada en una nueva rama llamada "funcionalidad1" y la funcionalidad 2 debe ser implementada en una nueva rama llamada "funcionalidad2 y hacer un merge a la rama main

A continuación las funcionalidades que se deben implementar:

### Funcionalidad 1

Se quiere poder "desmarcar" una tarea que fue completada y que su nuevo estado sea "no completada". 
La firma del metodo será la siguiente:
```javascript 
const markTaskAsUncompleted = (task) => {
    // TODO
}
```

### Funcionalidad 2
Se quiere poder modificar la clase pomodoro permitiendo que también puede tener una lista de tareas asociadas.
También se quiere poder agregar una tarea a un pomodoro. La firma del método será la siguiente
```javascript
const addTaskToPomodoro = (pomodoro, task) => {
    // TODO
}
```




