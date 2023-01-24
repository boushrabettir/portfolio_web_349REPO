"use strict";

const link = document
  .querySelector("#scroll")
  .addEventListener("click", scrollToSection);

function scrollToSection(event) {
  event.preventDefault();
  const section = document.querySelector("#about");
  section.scrollIntoView({ behavior: "smooth" });
}

const module = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".close-modal");
const btnShow = document.querySelectorAll(".box");
const title = document.querySelector(".title");
const desc = document.querySelector(".desc");
const techstack = document.querySelector(".techstack");

console.log(btnShow);

for (let i of btnShow) {
  btnShow.forEach((button) => {
    button.addEventListener("click", () => {
      module.classList.toggle("hidden");
      overlay.classList.toggle("hidden");
      fetch("./descriptions.json")
        .then((response) => response.json())
        .then((data) => {
          const project = data.find((p) => p.id === button.dataset.id);
          title.innerHTML = project.title;
          techstack.innerHTML = project.techstack;
          desc.innerHTML = project.description;
        });
    });
  });
}

const closeModule = () => {
  module.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};

btnClose.addEventListener("click", closeModule);
overlay.addEventListener("click", closeModule);

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape" && !module.classList.contains("hidden")) {
    closeModule();
  }
});
