function onLoad () {
   var header = document.querySelector('#header');
   var input = document.querySelector('#input');

   function updateHeaderText(text) {
      header.innerText = text;
   };

   // input.onchange = function(event) {
   //   // updateHeaderText(event.target.value);
   //   updateHeaderText(this.value);
   // };

   // Does the same as the above commented out code but uses the .addEventListener function
   input.addEventListener('change', function(event) {
      updateHeaderText(this.value);
   }, true);
};

if (document.readyState === 'complete') {
   onLoad();
} else {
   window.addEventListener('DOMContentLoaded', onLoad, true);
};