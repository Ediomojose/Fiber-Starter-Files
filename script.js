const primaryNav = document.querySelector(".nav__links");
const navToggle = document.querySelector(".mobile__nav__toggle");
const pageHeader = document.querySelector(".webpage__header");
const webpageBody = document.querySelector("body");

// Hambuger Menu Funtionality

// Listening for Click Event
navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");
  
    // Check for visibility and apply using conditional statement
    if (visibility === "false") {
      primaryNav.setAttribute("data-visible", true);
      navToggle.setAttribute("aria-expanded", true);
      webpageBody.classList.add('body__position');
      navToggle.classList.add("menu__open")
    } else if (visibility === "true") {
      primaryNav.setAttribute("data-visible", false);
      navToggle.setAttribute("aria-expanded", false);
      webpageBody.classList.remove('body__position');
      navToggle.classList.remove("menu__open")
    }
  });

  window.addEventListener('scroll', ()=>{
    pageHeader.classList.toggle('sticky', window.scrollY > 0);
  });


  