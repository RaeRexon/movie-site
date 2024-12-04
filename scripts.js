const API_URL = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=2&api_key=96cde52316a9e478e9312e7c06d4dfff";
const imgPath = "https://image.tmdb.org/t/p/w500";
const searchAPI = "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&api_key=96cde52316a9e478e9312e7c06d4dfff&query=";

generateMovies(API_URL);

async function generateMovies(URL) {
  const response = await fetch(URL);
  const responseData = await response.json();
  let movieCardHTML = "";
  console.log(responseData.title);
  console.log(responseData);

  responseData.results.forEach(movie => {
    movieCardHTML += `
      <div class="movie-desc">
        <div class="thumbnail-container">
          <img src="${imgPath + movie.poster_path}" onerror="this.src='https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'" class="thumbnail">
        </div>
        
        <div class="movie-title">
          ${movie.title}
        </div>
      </div>
    `;
  });

  document.querySelector('.js-movie-grid')
    .innerHTML = movieCardHTML;
}

document.querySelector('.js-search-box')
  .addEventListener('keydown', key => {
    if (key.code === 'Enter') {
      document.querySelector('.js-movie-grid').innerHTML = '';
      const searchKeywords = document.querySelector('.js-search-box').value;
      console.log(searchKeywords);
      
      generateMovies(searchAPI + searchKeywords);
    }
  });

function testFunc() {
  let movieCardHTML = "";

  for (let index = 0; index <10; index++) {
    movieCardHTML += `
      <div class="movie-desc">
        <div class="thumbnail-container">
          <img src="./sample-img.jpg" class="thumbnail">
        </div>
        
        <div class="movie-title">
          Movie Title
        </div>
      </div>
    `;

  }
    
  document.querySelector('.js-movie-grid')
    .innerHTML = movieCardHTML;
}

//testFunc();