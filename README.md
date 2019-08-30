![Adalab](_src/assets/images/logoname.png)


# English Homeland. Web de academia de inglés 🤓👩🏼‍🏫
Esta web fue realizada en su totalidad desde cero tanto en diseño como en maquetación a partir de un logotipo proporcionado por el cliente, que era el que utilizaba en todas sus redes sociales. Para el proyecto se ha utilizado Adalab Starter Kit e imágenes libres de derecho de autor. Para reutilizar este proyecto de código abierto, recomendamos clonar el repositorio y dentro clonar Adalab Starter Kit en esta URL https://github.com/Adalab/Adalab-web-starter-kit

## Fase de diseño 🎨

Aquí esta el PDF de cómo quedó la maqueta después del diseño. Para el diseño usé ADOBE XD. Y empezamos con una plantilla para orientarnos con las proporciones, obtenida del siguiente enlace:
https://www.xdguru.com/web-hosting-free-xd-landing-page/

PDF:
https://drive.google.com/file/d/18471s-TQdQ0IIwYcsfrj46XvGYpF7w_n/view?usp=sharing.pdf


## Guía de inicio rápido
Necesitarás instalar [Node.js](https://nodejs.org/) y [Gulp](https://gulpjs.com) para trabajar con este Starter Kit, luego:
1. Descarga o clona el repositorio
2. Instala las dependencias locales con `$ npm install`
3. Arranca el kit con `$ gulp`

## Instalación
> ### Solo una vez al principio en cada ordenador que utilicemos:
- Instalamos node
- Instalamos el comando de gulp de forma global para poder usarlo desde cualquier carpeta usando `npm install --global gulp-cli`

> ### Cada vez que descarguemos o clonemos un repo:
- `npm install` para instalar los paquetes necesarios para convertir Sass a CSS, minizarlo, etc.

> ### Cada vez que estemos trabajando con nuestro código:
- Desde nuestra terminal, ejecutamos el comando `gulp` para que realice la tarea por defecto, que en el caso del `gulpfile.js` que tenemos en adalab-web-starter-kit estará pendiente de nuestros archivos Sass, html y JavaScript y los compilará, minificará y/o recargará el servidor cada vez que hagamos un cambio

## Tareas de gulp incluidas ✌🏼
### Inicio de un web server para desarrollo
```
$ gulp
```
Lanza un webserver con BrowserSync y varios watchers estarán pendientes de los archivos SCSS/JS/HTML, en la carpeta **public/**, para recargar el navegador cuando se necesite.

### Versión lista para subir a producción 🚀
```
$ gulp docs
```
En la carpeta **docs/** genera los CSS y JS minimizados y sin sourcemaps listos para subir al repo y activar GitHub Pages en `master/docs`.


## Estructura del proyecto
Nuestro **gulpfile.js** usa un JSON de configuración con las rutas de los archivos a generar/vigilar.

La estructura de carpetas📂 tiene esta pinta:
```
/
`- _src
   |- assets
   |  |- icons
   |  |- images
   |  |- js
   |  `- scss
   |     `- core
   |
   `- templates
      `- partials
/
`- .git
    docs
    node_modules
    public

```
👣 Ayúdame a mejorar: Siempre dispuesta a escuchar tus sugerencias para mejorar la funcionalidad de esta web y ofrecerte un mejor servicio

💙 Proyecto hecho con cariño por una alumna de la promoción Grace de Adalab. Muchas gracias por haber llegado hasta aquí.
