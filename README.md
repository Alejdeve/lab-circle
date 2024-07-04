# lab-brief-w4

# Proyecto Circle WebSite

## Descripción General

El objetivo de este Lab es Crear un sitio web responsivo utilizando HTML, CSS y JavaScript, utilizando diferentes propiedades de diseño como Flexbox y posicionamiento cuando sea necesario, al final debemos Implementar el sitio web activo en Netlify usando [Git.](https://github.com/Alejdeve/lab-circle.git)

Como base tenemos un diseño de [Figma](https://www.figma.com/?utm_medium=affiliate&utm_source=partnerstack&utm_campaign=kennyhuang7466&pscd=psxid.figma.com&ps_partner_key=a2VubnlodWFuZzc0NjY&sid=lb_4wiar7a&ps_xid=NaQoVFVMOdaIhj&gsxid=NaQoVFVMOdaIhj&gspk=a2VubnlodWFuZzc0NjY) y un [link a Google drive^](https://drive.google.com/drive/folders/1s48zMkVPVFViY2Go1H6_4prQ3sAS--FV) el cual contine archivos como:

- Imagenes
- Emoticones
- logos

## Imágenes Ejemplo

<p align="left">
  <img src="./drive-download-20240627T093913Z-001/logos/circle.svg" alt="Logo circle" width="200"/>  
</p>
Figura 1: Ejemplo de logo circle.
<p></p>
<p></p>
<p align="left">
  <img src="./drive-download-20240627T093913Z-001/projects-section/1.jpg" alt="Logo circle" width="200"/>  
</p>
Figura 2: Imagen utilizada en seccion proyecto.

## Pasos

## Visual Studio code

Para el desarrollo del proyecto debemos utilizar 3 lenguajes de programación principales que explicaremos más adelante.
-	HTML
-	CSS
-	JavaScript

Pero para poder utilizar estos lenguajes necesitamos una herramienta que nos permita comunicarnos con el ordenador y dar unas indicaciones para que el ordenador siga el orden que queremos y realice o ejecute las acciones requeridas en cada lenguaje.
Existen varios editores de código como, Atom, sublime o paginas web donde puedas escribir código de diferentes lenguajes, para este proyecto utilizare Visual studio code, no solo porque es el más popular, sino porque es gratuito, intuitivo y me ofrece lo que yo necesito para empezar a desarrollar mi código.


### Visual Studio Code (VS Code):

Es un editor de código fuente gratuito desarrollado por Microsoft que soporta diversas extensiones para agregar funcionalidades adicionales, incluyendo soporte para múltiples lenguajes de programación.

## [HTML (HyperText Markup Language):](./index.html)

HTML es el lenguaje de marcado estándar utilizado para crear y estructurar contenido en la web. Proporciona la estructura básica de las páginas web mediante el uso de etiquetas que definen elementos como encabezados, párrafos, enlaces y imágenes. 

HTML permite organizar el contenido y construir la estructura fundamental de una página web, estableciendo el esqueleto sobre el cual se pueden aplicar estilos y funcionalidades adicionales.

Para este proyecto lo primero que hice fue crear en VS un archivo HTML, donde empecé creando la estructura de mi página principal (index), al terminar mi primera estructura, la utilice de guía para crear los otros 2 archivos HTML requeridos (project y ContacUs).

Si quieres ver la estructura da click en el titulo.

## [CSS (Cascading Style Sheets):](./styles.css)

Es un lenguaje de estilo usado para definir la apariencia visual de las páginas web. este lenguaje me Permito aplicar estilos a los elementos HTML, como colores, fuentes, márgenes y diseño en general. 

CSS facilita la separación de la presentación del contenido, permitiendo que los desarrolladores cambien el diseño de una página sin modificar su estructura HTML subyacente, lo cual es esencial para crear sitios web visualmente atractivos y coherentes.

Este lenguaje también sirve para hacer el sitio web responsive (que se vea ordenado en cualquier dispositivo), aunque esta parte la realice al final del trabajo cuando ya tenia todo estructurado y terminado.

Si quieres ver la estructura da click en el titulo.

## [JavaScript (JS):](./contacus.js)

es un lenguaje de programación que permite añadir interactividad y dinamismo a las páginas web. A diferencia de HTML y CSS, que se encargan de la estructura y el estilo, JavaScript permite implementar funcionalidades complejas, como validación de formularios, manipulación del DOM y creación de animaciones. Este lenguaje es crucial para desarrollar aplicaciones web interactivas y mejorar la experiencia del usuario mediante la adición de comportamiento dinámico a los elementos de la página.

En este proyecto tal como se en el código, creamos unas funciones para validar el formulario de nuestro sitio web, las funciones validan:
1.	Que escriban el nombre completo.
2.	Que escriban un correo electrónico valido.
3.	Que se numérico el teléfono.
4.	Que se escriba un mensaje
5.	Que todo se valide hasta el momento de dar submit. 

Si quieres ver la estructura da click en el titulo.

## Git

Es un sistema de control de versiones distribuido que permite a los desarrolladores gestionar y realizar un seguimiento de los cambios en el código fuente a lo largo del tiempo. Facilita la colaboración entre múltiples desarrolladores al permitir la creación de ramas independientes para experimentar con nuevas características sin afectar el código principal. Git registra un historial detallado de los cambios, lo que ayuda a revertir modificaciones no deseadas y mantener un registro de la evolución del proyecto.

## [GitHub](https://github.com/Alejdeve/lab-circle.git)

En este punto del proyecto ya tenemos mucho trabajo adelantado, el cual hasta ahora se encuentra solo en la memoria de nuestro ordenador en nuestros archivos o carpetas de VS, es hora de almacenarlo en un lugar seguro donde podemos abrirlo desde cualquier lugar y podamos compartirlo con otros desarrolladores. 

Vamos a utilizar GitHub que es una plataforma de hospedaje basada en la web que utiliza Git para gestionar y almacenar repositorios de código fuente. Ofrece herramientas para la colaboración en proyectos de software, incluyendo la capacidad de compartir código, realizar revisiones de cambios y gestionar incidencias. GitHub facilita el trabajo en equipo mediante la integración de funciones como pull requests y la colaboración en línea, permitiendo a los desarrolladores trabajar juntos de manera más eficiente.

Debemos crear un repositorio en github donde vamos a enviar nuestro trabajo de Visual studio code, para ello vamos a fusionar nuestro repositorio, con nuestra carpeta de trabajo y de esta forma estar sincronizados con nuestro Git.
Podemos trabajar e ir actualizando nuestro repositorio cada que lo necesitamos utilizando desde Visual estudio code los comandos:
-	Git add . para adicionar todo lo trabajado desde la última actualización.
-	Git commit -m “comentario” para aceptar cambios y guardarlos en Github.
-	Git status para verificar que los datos se actualizaron y no hay pendientes.
-	Git push, para subir todos los cambios y se puedan ver en GitHub.

Si quieres acceder al git de este proyecto, da click en el titulo.

## Netlify

El trabajo que llevamos nos permite ir mirando como esta el proyecto, solo desde nuestro ordenador, ya que tenemos los archivos en nuestra carpeta, pero no podemos enviar un link o mostrarlo a un cliente o personas interesadas en mirarlo, por esto necesitamos una plataforma de despliegue y alojamiento para aplicaciones web modernas y sitios estáticos.

Netlify nos permite crear un sitio para compartir, para ello debemos subir todos nuestros archivos como imágenes, emoticones, logos etc… utilizados en la página, para hacer todo esto posible, debemos sincronizar GitHub, ya que en el repositorio esta todo lo requerido.

gracias a esta herramienta puedes ver mi proyecto haciendo click [aqui.](https://thriving-boba-7b56b8.netlify.app/).


