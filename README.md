[![Blog Personal]()]()

# Proyectos Css Componentes Web

Este repositorio contiene el proyecto MovieDB que he creado siguiendo el tutorial del YouTuber [Reza Mehdikhanlou](https://www.youtube.com/@AsmrProg/about).

## Acerca del YouTuber

- **Nombre del YouTuber**: [Reza Mehdikhanlou](https://www.youtube.com/@AsmrProg/about).
- **Enlace al Canal de YouTube**: [AsmrProg](https://www.youtube.com/@AsmrProg/featured)
- **Descripción**: El YouTuber es un experimentado desarrollador web que ofrece tutoriales en su canal de YouTube sobre la desarrollo web. Sus videos son educativos y están diseñados para ayudar a los aprendices a mejorar sus habilidades de desarrollo web.

# Proyecto de Búsqueda de Películas MovieDB con TMDb API

Este proyecto consiste en una aplicación web que permite a los usuarios buscar películas utilizando la base de datos de películas de The Movie Database (TMDb) y mostrar los resultados de búsqueda en una interfaz amigable. A continuación, se proporciona una descripción detallada del proyecto, incluyendo las características clave y la documentación del código.

## Características Clave

- **Búsqueda de Películas**: Los usuarios pueden buscar películas ingresando un término de búsqueda en el formulario de búsqueda.

- **Visualización de Resultados**: Los resultados de la búsqueda se muestran en tarjetas de película que incluyen la imagen de la película, el título, la fecha de lanzamiento y una descripción.

- **Carga de Más Resultados**: Los usuarios pueden cargar más resultados de búsqueda desplazándose hacia abajo en la página.

- **Interfaz Responsiva**: La aplicación se adapta a diferentes tamaños de pantalla para una experiencia de usuario óptima.

## Estructura del Código

El código de la aplicación está escrito en JavaScript y utiliza HTML y CSS para la interfaz de usuario. A continuación, se proporciona una breve descripción de la estructura del código:

- **Variables y Constantes**: El código incluye variables y constantes para almacenar la clave de API de TMDb, las URLs de búsqueda, referencias a elementos HTML y variables de estado.

- **Funciones**: Se definen varias funciones para realizar tareas específicas, como la obtención de datos de películas, la creación de tarjetas de películas, la limpieza de resultados y la detección del final de la página.

- **Event Listeners**: El código agrega event listeners para manejar la búsqueda de películas, la carga de más resultados y la detección del final de la página.

- **Inicialización**: La función `init()` se utiliza para inicializar la página y mostrar resultados populares de películas cuando se carga la aplicación.


## Uso

Para utilizar la aplicación, siga estos pasos:

1. Abra la página web en su navegador.

2. Ingrese un término de búsqueda en el formulario de búsqueda y haga clic en "Buscar".

3. Los resultados de la búsqueda se mostrarán en forma de tarjetas de película.

4. Si desea ver más resultados, simplemente desplácese hacia abajo en la página y se cargarán más resultados automáticamente.


## Documentación del Código JavaScript

Este documento proporciona una descripción detallada del código JavaScript que se utiliza para realizar búsquedas de películas en la base de datos de películas de The Movie Database (TMDb) y mostrar los resultados en una página web.

## Variables y Constantes

- `apiKey`: Almacena la clave de API de TMDb que se utilizará para acceder a la base de datos de películas.
- `imgApi`: Almacena la URL base para las imágenes de películas en el tamaño de 1280 píxeles de ancho.
- `searchUrl`: Almacena la URL de búsqueda de películas en TMDb, incluyendo la clave de API.
- `form`: Referencia al elemento del formulario con el id 'search-form'.
- `query`: Referencia al elemento de entrada de búsqueda con el id 'search-input'.
- `result`: Referencia al elemento donde se mostrarán los resultados de búsqueda con el id 'result'.
- `page`: Variable para rastrear la página actual de resultados.
- `isSearching`: Variable para evitar múltiples búsquedas simultáneas.

## Funciones

- `fetchData(url)`: Realiza una solicitud de red a la URL proporcionada y devuelve los datos en formato JSON.
- `fetchAndShowResult(url)`: Utiliza la función `fetchData` para obtener datos de películas desde una URL y luego muestra los resultados llamando a `showResults`.
- `createMovieCard(movie)`: Crea una plantilla HTML para mostrar información sobre una película, incluyendo su título, imagen, fecha de lanzamiento y descripción.
- `clearResults()`: Borra el contenido del elemento `result` para mostrar nuevos resultados de búsqueda.
- `showResults(item)`: Muestra los resultados de búsqueda en la página utilizando las plantillas de tarjetas generadas por `createMovieCard`.
- `loadMoreResults()`: Carga más resultados de búsqueda cuando el usuario desplaza la página hacia abajo.
- `detectEnd()`: Detecta cuándo el usuario ha llegado al final de la página y carga más resultados si es necesario.
- `handleSearch(e)`: Maneja la búsqueda de películas cuando el usuario envía el formulario de búsqueda. Llama a `fetchAndShowResult` con la nueva URL de búsqueda.

## Event Listeners

- `form.addEventListener('submit', handleSearch)`: Escucha el evento de envío del formulario de búsqueda y llama a `handleSearch`.
- `window.addEventListener('scroll', detectEnd)`: Escucha el evento de desplazamiento de la ventana y llama a `detectEnd`.
- `window.addEventListener('resize', detectEnd)`: Escucha el evento de redimensionamiento de la ventana y llama a `detectEnd`.

## Inicialización

- La función `init()` se llama al final del código para inicializar la página y mostrar resultados populares de películas.

Esperamos que esta documentación te ayude a comprender mejor el funcionamiento del código JavaScript.

## Cómo Mantenerse en Contacto

¡Sígueme en mis redes sociales para mantenerte actualizado sobre mis últimas publicaciones y proyectos!

<div style="display: inline-block;">
  <a href="https://www.youtube.com/channel/UCTEOU82zC2UHj-AUW9-OrBw"><img src="https://img.shields.io/badge/-YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white"></a>
  <a href="https://www.instagram.com/joyelocode/"><img src="https://img.shields.io/badge/-Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"></a>
  <a href="https://www.facebook.com/profile.php?id=61550597387264"><img src="https://img.shields.io/badge/-Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white"></a>
  <a href="https://twitter.com/joyelocode"><img src="https://img.shields.io/badge/-Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white"></a>
  <a href="https://www.tiktok.com/@joyelocode"><img src="https://img.shields.io/badge/-TikTok-000000?style=for-the-badge&logo=tiktok&logoColor=white"></a>
  <a href="https://www.linkedin.com/in/joyelocode/"><img src="https://img.shields.io/badge/-LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>
  <a href="https://discord.com/channels/@me"><img src="https://img.shields.io/badge/-Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white"></a>
</div>