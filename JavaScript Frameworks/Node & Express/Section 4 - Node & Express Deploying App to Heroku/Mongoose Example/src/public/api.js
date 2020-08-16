const getButton = document.getElementById('user_form');
getButton.addEventListener('submit', getRequest);

function getRequest(event) {
   event.preventDefault();
   const movieId = event.target.movieId.value;

   fetch(`/movies/${movieId}`)
      .then(function(res) {
         return res.json();
      })
      .then(function(data) {
         console.log(data);
         console.log(JSON.stringify(data));     //Convert JSON to String representation

         document.getElementById("results").textContent = '';     // Clear results before displaying the new results

         if(!movieId) {
            for(var i in data) {
               document.getElementById("results").innerHTML += data[i].movieTitle + '<br>';
            };
         } else {
            document.getElementById('results').innerHTML += data.movieTitle;
         };
      });
};

const postButton = document.getElementById('user_form_post');
postButton.addEventListener('submit', newPost);

function newPost(event, post) {
   event.preventDefault();
   const movieTitle = event.target.movieTitle.value;
   const movieDirector = event.target.movieDirector.value;
   // console.log(movieTitle, movieDirector);

   post = {
      movieTitle,
      movieDirector
   };
   // console.log(post);

   const options = {
      method: 'POST',
      body: JSON.stringify(post),
      headers: new Headers({
         'Content-Type': 'application/json'
      })
   };

   // Contrast the GET Request above which does not use ES6 Arrow Function syntax
   return fetch('/movies', options)
      .then(res => res.json())
      .then(res => console.log(res))
      .then(error => console.error('error: ', error));
};

const putButton = document.getElementById('user_form_put');
putButton.addEventListener('submit', putPost);

function putPost(event) {
   event.preventDefault();
   const movieId = event.target.movieId.value;
   const movieTitle = event.target.movieTitle.value;
   const movieDirector = event.target.movieDirector.value;
   console.log('movieId: ', movieId, 'movieTitle: ', movieTitle, 'movieDirector: ', movieDirector);

   post = {
      movieTitle,
      movieDirector
   };
   // console.log(post);

   const options = {
      method: 'PATCH',
      body: JSON.stringify(post),
      headers: new Headers({
         'Content-Type': 'application/json'
      })
   };

   const URL = `/movies/${movieId}`;

   return fetch(URL, options)
      .then(res => res.json())
      .then(data => console.log('Movie updated to: ', data))
      .then(error => console.error('error: ', error));
};

const deleteButton = document.getElementById('user_form_delete');
deleteButton.addEventListener('submit', deletePost);

function deletePost(event) {
   event.preventDefault();
   const movieId = event.target.movieId.value;
   console.log('movieId: ', movieId);

   const options = {
      method: 'DELETE',
      body: JSON.stringify({
         movieId
      }),
      headers: new Headers({
         'Content-Type': 'application/json'
      })
   };

   const URL = `/movies/${movieId}`;

   return fetch(URL, options)
      .then(res => res.json())
      .then(data => console.log('Movie to delete: ', data))
      .then(error => console.error('error: ', error));
};


