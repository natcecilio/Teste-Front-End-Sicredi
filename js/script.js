let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  loginForm.classList.remove("active");
  headForm.classList.remove("active");
};

let loginForm = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
  navbar.classList.remove("active");
  headForm.classList.remove("active");
};

let headForm = document.querySelector(".head-form");

document.querySelector("#head-btn").onclick = () => {
  headForm.classList.toggle("active");
  navbar.classList.remove("active");
  loginForm.classList.remove("active");
};

let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.add("active");
};

document.querySelector("#close-search").onclick = () => {
  searchForm.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  loginForm.classList.remove("active");
  headForm.classList.remove("active");
};
