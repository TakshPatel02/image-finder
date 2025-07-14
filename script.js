// I am requesting you to if you want to make this project by seeing this file dont use this accesskey kindly create your own accesskey it is so simple create a account on unsplash and then go to settings and API then you can make your own api key .

const accessKey = "Orxli06KJO-AR7jUBnookWoUXzT9W8XqRpQa7RBpADE";

const formEl = document.querySelector("form");
const inputEl = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results");
const showMoreBtn = document.getElementById("show-more-button");

let inputData = "";
let page = 1;

async function searchImages() {
  inputData = inputEl.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

  const response = await fetch(url);
  const data = await response.json();

  const results = data.results;

  if (page === 1) {
    searchResults.innerHTML = "";
  }

  results.map((result) => {
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("search-result");
    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;

    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description;

    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    searchResults.appendChild(imageWrapper);
  });

  page++;
  if (page > 1) {
    showMoreBtn.style.display = "block";
  }
}

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});
showMoreBtn.addEventListener("click", () => {
  searchImages();
});
