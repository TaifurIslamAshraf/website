/*------------- header start -----------*/

// toggle
const header = document.querySelector(".header-container");
const toggleBtn = document.querySelector(".toggle__btn");
const showElement = document.querySelector(".show__element");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("toggle__btn__click");
  showElement.classList.toggle("show");
});

//Active Page
const activePage = window.location.pathname;
const navLink = document.querySelectorAll(".nav a");
navLink.forEach((link) => {
  console.log(link);
  if (link.href.includes(activePage)) {
    link.classList.add("active__page");
  }
});

/*------------- header end -----------*/
