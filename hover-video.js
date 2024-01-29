// handle genshin hover trailer
const genshinContainer = document.getElementById("genshin-container");
const genshinThumbnail = document.getElementById("genshin-thumbnail");
const genshinTrailer = document.getElementById("genshin-trailer");

genshinContainer.addEventListener("mouseover", (e) => {
  e.preventDefault();
  genshinThumbnail.classList.add("hidden");
  genshinTrailer.classList.remove("hidden");
});

genshinContainer.addEventListener("mouseleave", (e) => {
  e.preventDefault();
  genshinThumbnail.classList.remove("hidden");
  genshinTrailer.classList.add("hidden");
});

// handle star rail hover trailer
const starRailContainer = document.getElementById("star-rail-container");
const starRailThumbnail = document.getElementById("star-rail-thumbnail");
const starRailTrailer = document.getElementById("star-rail-trailer");

starRailContainer.addEventListener("mouseover", (e) => {
  e.preventDefault();
  starRailThumbnail.classList.add("hidden");
  starRailTrailer.classList.remove("hidden");
});

starRailContainer.addEventListener("mouseleave", (e) => {
  e.preventDefault();
  starRailThumbnail.classList.remove("hidden");
  starRailTrailer.classList.add("hidden");
});

// handle mobile legends hover trailer
const mlContainer = document.getElementById("ml-container");
const mlThumbnail = document.getElementById("ml-thumbnail");
const mlTrailer = document.getElementById("ml-trailer");

mlContainer.addEventListener("mouseover", (e) => {
  e.preventDefault();
  mlThumbnail.classList.add("hidden");
  mlTrailer.classList.remove("hidden");
});

mlContainer.addEventListener("mouseleave", (e) => {
  e.preventDefault();
  mlThumbnail.classList.remove("hidden");
  mlTrailer.classList.add("hidden");
});

// handle clash of clans hover trailer
const cocContainer = document.getElementById("coc-container");
const cocThumbnail = document.getElementById("coc-thumbnail");
const cocTrailer = document.getElementById("coc-trailer");

cocContainer.addEventListener("mouseover", (e) => {
  e.preventDefault();
  cocThumbnail.classList.add("hidden");
  cocTrailer.classList.remove("hidden");
});

cocContainer.addEventListener("mouseleave", (e) => {
  e.preventDefault();
  cocThumbnail.classList.remove("hidden");
  cocTrailer.classList.add("hidden");
});