# MD-LINKS

## 1. Indice
## 2. Descripción
  `mdlinks` es una librería que lee y analiza los links que contiene los archivos en formato md, para verificar sus estados, generando un resultado de estadítica y a detalle de cada link.
## 3. Instalación
Podemos instalar la librería de la siguiente forma:

`npm install ElinAlice/LIM012-fe-md-links`
## 4. Uso
### API javascript
- Para poder hacer uso en la API es importando la librería. Al invocar la función, se puede enviar de dos maneras, la primera manera enviamos solo un parámetro `(path-to-file)`, y la segunda manera es enviando dos parámetros `(path-to-file, { validate : true })`.
Ejemplo:

``` javascript
    const { MDLinks } = require('@elinalice/md-links');

    MDLinks.mdLinks('./file.md')
      .then((result) => {
          console.log(result);
      }).catch((error) => {
          console.log(error);
      })
    // [{ file, href, text }]
```
``` javascript
    const { MDLinks } = require('@elinalice/md-links');

    MDLinks.mdLinks('./file.md', { validate : true })
      .then((result) => {
          console.log(result);
      }).catch((error) => {
          console.log(error);
      })
    // [{ file, href, text, status, statusText }]
```
### CLI
- Para poder hacer uso en el CLI (Command Line Interface), podemos ingresar la siguiente línea:
`md-links <path-to-file> [options]`
* El comportamiento de la librería por defecto solo identicará el archivo markdown e imprimirá los links que vaya encontrando.
Por ejemplo:
[Datos-Obtenidos-Por-Defecto]()

##### Options
`--validate`
* Al pasar la opción `--validate`, el módulo hara un petición HTTP y verficará si el link funciona o no. Por lo que nos imprimirá los links con sus respectivos datos agregando su estado y el texto del estado.
Por ejemplo:

`--status`
* Al pasar la opción `--status`, el output (salida) será un texto con estadísticas básicas sobre los links.
Por ejemplo:

`--status --validate`
* También podemos pasar las dos opciones a la vez `--status --validate`, se obtendrá la estadística considerando la validación de los links.
Por ejemplo:

## 4. Diagrama de flujo

### API JAVASCRIPT

![API JAVASCRIPT](https://github.com/ElinAlice/LIM012-fe-md-links/blob/master/docs/img/dfApiJavascript.png)

### CLI

![CLI](https://github.com/ElinAlice/LIM012-fe-md-links/blob/master/docs/img/dfCLI.png)

