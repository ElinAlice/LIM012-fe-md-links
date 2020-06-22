# :books: :link:  MD-LINKS :link: :books:
[![Build Status](https://travis-ci.com/ElinAlice/LIM012-fe-md-links.svg?branch=master)](https://travis-ci.com/ElinAlice/LIM012-fe-md-links)

## Indice
* [1. Descripción](#1-descripción)
* [2. Instalación](#2-instalación)
* [3. Uso](#3-uso)
* [4. Diagrama de flujo](#4-diagrama-de-flujo)

## 1. Descripción :book:
  `mdlinks` es una librería que lee y analiza los links que contiene los archivos en formato md, para verificar sus estados, generando un resultado de estadítica y a detalle de cada link.
## 2. Instalación :heavy_check_mark:
Podemos instalar la librería de la siguiente forma:

`npm install ElinAlice/LIM012-fe-md-links`
## 3. Uso :pencil:
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


![Datos-Obtenidos-Por-Defecto](https://github.com/ElinAlice/LIM012-fe-md-links/blob/master/docs/img/mdLinkCLI.PNG?raw=true)

##### Options
`--validate`
* Al pasar la opción `--validate`, el módulo hara un petición HTTP y verficará si el link funciona o no. Por lo que nos imprimirá los links con sus respectivos datos agregando su estado y el texto del estado.

Por ejemplo:


![Datos-con-validate](https://github.com/ElinAlice/LIM012-fe-md-links/blob/master/docs/img/mdLinkValidate.PNG?raw=true)

`--status`
* Al pasar la opción `--status`, el output (salida) será un texto con estadísticas básicas sobre los links.

Por ejemplo:


![Datos-con-status](https://github.com/ElinAlice/LIM012-fe-md-links/blob/master/docs/img/mdLinkStatus.PNG?raw=true)

`--status --validate`
* También podemos pasar las dos opciones a la vez `--status --validate`, se obtendrá la estadística considerando la validación de los links.

Por ejemplo:


![Datos-con-status-validate](https://github.com/ElinAlice/LIM012-fe-md-links/blob/master/docs/img/mdLinkStatusValidate.PNG?raw=true)

## 4. Diagrama de flujo :twisted_rightwards_arrows:

### API JAVASCRIPT

![API JAVASCRIPT](https://github.com/ElinAlice/LIM012-fe-md-links/blob/master/docs/img/dfApiJavascript.png)

### CLI

![CLI](https://github.com/ElinAlice/LIM012-fe-md-links/blob/master/docs/img/dfCLI.png)



## Objetivos de aprendizaje

Recuerda colocar en esta seccion los objetivos de aprendizaje que quedaron
pendientes de tu proyecto anterior.

### Javascript
- [ ] Uso de callbacks
- [ ] Consumo de Promesas
- [ ] Creacion de Promesas
- [ ] Modulos de Js
- [ ] Recursión

### Node
- [ ] Sistema de archivos
- [ ] package.json
- [ ] crear modules
- [ ] Instalar y usar modules
- [ ] npm scripts
- [ ] CLI (Command Line Interface - Interfaz de Línea de Comando)

### Testing
- [ ] Testeo de tus funciones
- [ ] Testeo asíncrono
- [ ] Uso de librerias de Mock
- [ ] Mocks manuales
- [ ] Testeo para multiples Sistemas Operativos

### Git y Github
- [ ] Organización en Github

### Buenas prácticas de desarrollo
- [ ] Modularización
- [ ] Nomenclatura / Semántica
- [ ] Linting

***

