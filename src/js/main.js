const apiKey = '174adc51d8f19be240a958a5c42d2c8e';
// Definir una constante para la clave de API de TMDb.

const imgApi = 'https://image.tmdb.org/t/p/w1280';
// Definir una constante para la URL base de las imágenes de películas.

const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;
// Definir una constante para la URL de búsqueda de películas en TMDb, incluyendo la clave de API.

const form = document.getElementById('search-form');
// Obtener una referencia al elemento del formulario con el id 'search-form'.

const query = document.getElementById('search-input');
// Obtener una referencia al elemento de entrada de búsqueda con el id 'search-input'.

const result = document.getElementById('result');
// Obtener una referencia al elemento donde se mostrarán los resultados de búsqueda con el id 'result'.

let page = 1;
// Inicializar una variable para rastrear la página actual de resultados.

let isSearching = false;
// Inicializar una variable para evitar múltiples búsquedas simultáneas.

//Fetch JSON data from Url
// Función para realizar una solicitud de red a una URL y devolver los datos en formato JSON.

async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        return await response.json();
    } catch (error) {
        return null;
    }
}

// Fetch and show results based on url
// Función para obtener datos de películas desde una URL y mostrar los resultados.

async function fetchAndShowResult(url) {
    const data = await fetchData(url);
    if (data && data.results) {
        showResults(data.results);
    }
}

// Create movie card html template
// Función para crear una plantilla HTML para mostrar información sobre una película.

function createMovieCard(movie) {
    const { poster_path, original_title, release_date, overview } = movie;
    const imagePath = poster_path ? imgApi + poster_path : './img-01.jpeg';
    const truncatedTitle = original_title.length > 15 ? original_title.slice(0, 15) + '...' : original_title;
    const formattedDate = release_date || 'No release date';
    const cardTemplate = `
        <div class='column'>
            <div class='card'>
                <a class='card-media' href='./img-01.jpeg'>
                    <img src='${imagePath}' alt='${original_title}' width='100%' />
                </a>
                <div class='card-content'>
                    <div class='card-header'>
                        <div class='left-content'>
                            <h3 style='font-weight: 600'>${truncatedTitle}</h3>
                            <span style='color: #12efec'>${formattedDate}</span>
                        </div>
                        <div class='right-content'>
                            <a href='${imagePath}' target='_blank' class='card-btn'>See Cover</a>
                        </div>
                    </div>
                    <div class='info'>${overview || 'No overview yet...'} 
                    </div>
                </div>
            </div>
        </div>
        `;
        return cardTemplate;
}

// Clear result element for search
// Función para borrar el contenido del elemento 'result' y prepararlo para nuevos resultados.

function clearResults() {
    result.innerHTML = '';
}

// Show results in page
// Función para mostrar los resultados de búsqueda en la página.

function showResults(item) {
    const newContent = item.map(createMovieCard).join('');
    result.innerHTML += newContent || '<p>No results found.</p>';
}

// Load More results
// Función para cargar más resultados de búsqueda.

async function loadMoreResults() {
    if (isSearching) {
        return;
    }
    page++;
    const searchTerm = query.value;
    const url = searchTerm ? `${searchUrl}${searchTerm}&page=${page}` : `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&page=${page}`;
    await fetchAndShowResult(url);
}

// Detect end of page and load more results
// Función para detectar cuándo el usuario llega al final de la página y cargar más resultados.

function detectEnd() {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 20) {
        loadMoreResults();
    }
}

// Handle search
// Función para manejar la búsqueda de películas cuando el usuario envía el formulario.

async function handleSearch(e) {
    e.preventDefault();
    const searchTerm = query.value.trim();
    if (searchTerm) {
        isSearching = true;
        clearResults();
        const newUrl = `${searchUrl}${searchTerm}&page=${page}`;
        await fetchAndShowResult(newUrl);
        query.value = '';
    }
}

// Event listeners
// Agregar event listeners para escuchar eventos en el formulario, desplazamiento y redimensionamiento de la ventana.

form.addEventListener('submit', handleSearch);
window.addEventListener('scroll', detectEnd);
window.addEventListener('resize', detectEnd);

// Initialize the page
// Inicializar la página y mostrar resultados populares de películas.

async function init() {
    clearResults();
    const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&page=${page}`;
    isSearching = false;
    await fetchAndShowResult(url);
}

init();