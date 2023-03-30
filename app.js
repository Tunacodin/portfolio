
var currentIndex = 0;
var imgElement = document.getElementById("slider-img");

var paths = [
    "../img/foto1.jpg",
    "../img/foto2.jpg",
    "../img/foto3.jpg",
]


setInterval(function () {
        
  imgElement.src = paths[currentIndex];
  currentIndex++;
    if (currentIndex >= paths.length) { 
        currentIndex = 0;
    }
         

}, 2000);

/* Sayfa yüklenince animasyonu tetikleyen kod */
window.addEventListener("load", function () {
  const div = document.getElementById("myDiv");
  const p = div.querySelector("p");
  setTimeout(() => {
    p.classList.add("animation-done");
    document.body.dataset.pageLoaded = true;
  }, 1500);
});
