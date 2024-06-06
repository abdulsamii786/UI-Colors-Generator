let alphabetsAndNumb = "ABCDEF0123456789";
let getContainer = document.querySelector(".container");
let getBody = document.querySelector("body");
let getModal = document.getElementById("modal");

function generateColor() {
  getContainer.innerHTML = "";
  for (let i = 0; i < 28; i++) {
    let randomClr = "#";
    for (let j = 0; j < 6; j++) {
      randomClr +=
        alphabetsAndNumb[Math.floor(Math.random() * alphabetsAndNumb.length)];
    }
    getContainer.innerHTML += `<div onclick="copyColor('${randomClr}')" class="box" style="background-color:${randomClr}"><h5>${randomClr}</h5><div class="copy">COPY</div></div>`;
  }
}
function copyColor(copy) {
  navigator.clipboard.writeText(copy);
  getModal.classList.add("showModal");
  getModal.innerHTML = `<h2>COPIED</h2><h3>${copy}</h3>`;
  getModal.style.backgroundColor = `${copy}`;

  setTimeout(function () {
    getModal.classList.remove("showModal");
    document.body.style.overflow = "hidden";
  }, 800);
}
