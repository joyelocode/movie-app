const apiKey = '174adc51d8f19be240a958a5c42d2c8e';
const imgApi = 'https://image.tmdb.org/t/p/w1280';
const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;
const form = document.getElementById('search-form');
const query = document.getElementById('search-input');
const result = document.getElementById('result');

let page = 1;
let isSearching = false;

//Fetch JSON data from Url

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

async function fetchAndShowResult(url) {
    const data = await fetchData(url);
    if (data && data.results) {
        showResults(data.results);
    }
}

// Create movie card html template

function createMovieCard(movie) {
    const { posterPath, originalTitle, releaseDate, overview } = movie;
    const imagePath = posterPath ? imgApi + posterPath : './img-01.jpeg';
    const truncatedTitle = originalTitle.length > 15 ? originalTitle.slice(0, 15) + '...' : originalTitle;
    const formattedDate = releaseDate || 'No release date';
    const cardTemplate = `
        <div class='column'>
            <div class='card'>
                <a class='card-media' href='./img-01.jpeg'>
                    <img src='${imagePath}' alt='${originalTitle}' width='100%' />
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

function clearResults() {
    result.innerHTML = '';
}

// Show results in page

function showResults(item) {
    const newContent = item.map(createMovieCard).join('');
    result.innerHTML = newContent || '<p>No results found.</p>';
}