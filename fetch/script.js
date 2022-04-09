// $('.search-button').on('click', function () {
//   $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=c0630bdd&s=' + $('.input-keyword').val(),
//     success: (results) => {
//       const movies = results.Search;
//       let cards = '';
//       movies.forEach((m) => {
//         cards += showCard(m);
//       });
//       $('.movie-container').html(cards);

//       // ketika tombol modal diklik
//       $('.modal-detail-button').on('click', function () {
//         $.ajax({
//           url: 'http://www.omdbapi.com/?apikey=c0630bdd&i=' + $(this).data('imdbid'),
//           success: (m) => {
//             const movieDetail = showDetail(m);
//             $('.modal-body').html(movieDetail);
//           },
//           error: (e) => console.log(e.responsText),
//         });
//       });
//     },
//     error: (e) => console.log(e.responsText),
//   });
// });

/// Menggunakan Fetch

// const searchButton = document.querySelector('.search-button');
// searchButton.addEventListener('click', function () {
//   const inputKeyword = document.querySelector('.input-keyword');

//   fetch('http://www.omdbapi.com/?apikey=c0630bdd&s=' + inputKeyword.value)
//     .then((response) => response.json())
//     .then((response) => {
//       const movies = response.Search;
//       let cards = '';
//       movies.forEach((m) => (cards += showCard(m)));
//       const movieContainer = document.querySelector('.movie-container');
//       movieContainer.innerHTML = cards;

//       // ketika tombol modal di click
//       const modalDetailButton = document.querySelectorAll('.modal-detail-button');
//       modalDetailButton.forEach((btn) => {
//         btn.addEventListener('click', function () {
//           const imdbid = this.dataset.imdbid;
//           fetch('http://www.omdbapi.com/?apikey=c0630bdd&i=' + imdbid)
//             .then((response) => response.json())
//             .then((m) => {
//               const movieDetail = showDetail(m);
//               const modalBody = document.querySelector('.modal-body');
//               modalBody.innerHTML = movieDetail;
//             });
//         });
//       });
//     });
// });

// Akhir menggunakan fetch

// Mengunakan fetch await
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function () {
  const inputKeyword = document.querySelector('.input-keyword');
  const movies = await getMovies(inputKeyword.value);
  updateUI(movies);
});

// Event binding
document.addEventListener('click', async function (e) {
  if (e.target.classList.contains('modal-detail-button')) {
    const imdbid = e.target.dataset.imdbid;
    const movieDetail = await getMoviesDetail(imdbid);
    updateUIDetail(movieDetail);
  }
});

function getMoviesDetail(imdbid) {
  return fetch('http://www.omdbapi.com/?apikey=c0630bdd&i=' + imdbid)
    .then((response) => response.json())
    .then((m) => m);
}

function updateUIDetail(m) {
  const movieDetail = showDetail(m);
  const modalBody = document.querySelector('.modal-body');
  modalBody.innerHTML = movieDetail;
}

function getMovies(keyword) {
  return fetch('http://www.omdbapi.com/?apikey=c0630bdd&s=' + keyword)
    .then((response) => response.json())
    .then((response) => response.Search);
}

function updateUI(movies) {
  let cards = '';
  movies.forEach((m) => (cards += showCard(m)));
  const movieContainer = document.querySelector('.movie-container');
  movieContainer.innerHTML = cards;
}

// Akhir menggunakan fetch awaait

// Menampilkan Card
const showCard = (m) => {
  return `<div class="col-md-4 my-3">
              <div class="card" >
                  <img src="${m.Poster}" class="card-img-top"  />
                  <div class="card-body">
                      <h5 class="card-title">${m.Title}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                      <a href="#" class="btn btn-primary modal-detail-button"  data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
                  </div>
              </div>
          </div>`;
};

// function untuk menampilkan detail
function showDetail(m) {
  return `<div class="container-fluid">
              <div class="row">
              <div class="col-md-3">
                  <img src="${m.Poster}" class="img-fluid" />
              </div>
              <div class="col-md">
                  <ul class="list-group">
                  <li class="list-group-item"><h4>${m.Title}(${m.Year})</h4></li>
                  <li class="list-group-item"><strong>Sutradara: </strong>${m.Director}</li>
                  <li class="list-group-item"><strong>Actors: </strong>${m.Actors}</li>
                  <li class="list-group-item"><strong>Writer: </strong>${m.Writer}</li>
                  <li class="list-group-item"><strong>Plot: </strong>${m.Plot}</li>
                  </ul>
              </div>
              </div>
          </div>`;
}
