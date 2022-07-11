# Desafio entregable - API RESTful

Consigna: Realizar un proyecto de servidor basado en node.js y express que ofrezca una API RESTful de productos. En detalle, que incorpore las siguientes rutas:

- GET '/api/productos' -> devuelve todos los productos.
- GET '/api/productos/:id' -> devuelve un producto según su id.
- POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id asignado.
- PUT '/api/productos/:id' -> recibe y actualiza un producto según su id.
- DELETE '/api/productos/:id' -> elimina un producto según su id.

# Notas

 En la carpeta **src** se encuentra el codigo fuente de la API RESTful, realizado con Typescript.

En la carpeta **dist** se encuentra la transpilacion a Javascript

Para correr el proyecto en local, ejecutar el siguiente comando:

```
npm run dev
```

Para transpilar el codigo a Javascript, ejecutar el siguiente comando:

```
npm run tsc
```


# Explicación

Para el desafio se utilizará un soporte de base de datos en un archivo **data.txt**, que se encuentra en la raiz del proyecto.

Para la escritura y lectura del archivo se utilizara la clase **contenedor** en un archivo separado con todos sus metodos.

Para el desarrollo de la API se utilizara express con la estructura de rutas y controladores definidos en sus propios directorios.






