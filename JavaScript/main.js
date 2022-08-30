/*------------- header start -----------*/
const header = document.querySelector(".header-container");
const toggleBtn = document.querySelector(".toggle__btn");
const showElement = document.querySelector(".show__element");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("toggle__btn__click");
  showElement.classList.toggle("show");
});

window.addEventListener("scroll", function () {
  header.classList.toggle("scrolled", window.pageYOffset > 0);
  showElement.classList.toggle("scrolled", window.pageYOffset > 0);
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

/*------------- Home page about us start -----------*/

const counterSection = document.querySelector(".work-section");
const workObserver = new IntersectionObserver(
  (entries, observer) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;

    const displayValue = document.querySelector(".home-about-num");
    let interval = 800;

    const aboutUsCounter = () => {
      let startValue = 0;
      let endValue = parseInt(displayValue.getAttribute("data-val"));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(() => {
        startValue++;
        displayValue.textContent = startValue + "+" + " Users";
        if (startValue === endValue) {
          clearInterval(counter);
        }
      }, duration);
    };
    aboutUsCounter();
  },
  {
    root: null,
    threshold: 0,
  }
);

workObserver.observe(counterSection);
/*------------- Home page about us end -----------*/

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
