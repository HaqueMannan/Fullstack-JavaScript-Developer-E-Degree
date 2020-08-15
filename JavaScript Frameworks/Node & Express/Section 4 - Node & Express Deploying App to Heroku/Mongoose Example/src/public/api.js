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
      movieDirector,
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