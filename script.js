const randomImage = document.querySelector("#random-image");

var accessKeyUnsplash = "fSAYhKApDP1hl0lBUlNfOecS5hJHtVYPuTZfDuieDJY";

const urlUnsplash = `https://api.unsplash.com/photos/random/?client_id=${accessKeyUnsplash}`;

let output = "";

const randomPhoto = (photo) => {
  console.log(photo);
  output += `
  <div id="center">
  <img src=${photo.urls.small}>
  <p>Description: ${photo.description || "Sem Descrição"}</p>
  <p>Bio: ${photo.user.bio || "Sem Bio"}</p>
  <p>Go to profile: ${photo.user.links.html}</p>
  </div>
`;
  randomImage.innerHTML += output;
};

fetch(urlUnsplash)
  .then((res) => res.json())
  .then((data) => randomPhoto(data));
