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
const navLink = document.querySelector(".nav-link-service");

if (navLink.href.includes(activePage)) {
  navLink.classList.add("active__page__service");
}

/*------------- header end -----------*/

/*------------- our Work section start -----------*/

const targetElem = document.querySelector(".number-section");
const ourObserver = new IntersectionObserver(
  (entries, observer) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;

    const counterNums = document.querySelectorAll(".work-num");
    const speed = 100;

    counterNums.forEach((curElem) => {
      const updateNUmber = () => {
        const targetNumber = parseInt(curElem.getAttribute("data-number"));
        const initialNum = parseInt(curElem.innerHTML);

        const incrementNum = Math.trunc(targetNumber / speed);

        if (initialNum < targetNumber) {
          curElem.textContent = `${initialNum + incrementNum}+`;

          setTimeout(updateNUmber, 10);
        }
      };
      updateNUmber();
    });
    observer.unobserve(targetElem);
  },
  {
    root: null,
    threshold: 0,
  }
);
ourObserver.observe(targetElem);
/*------------- our Work section end -----------*/

/*------------- review section start -----------*/
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
/*------------- review section end -----------*/
