const navOpenButton = document.getElementById("nav-open-btn");
const navCloseButton = document.getElementById("nav-close-btn");
const navContent = document.getElementById("nav-content");
const navCollapse = document.getElementById("nav-collapse");

const openNav = () => {
  // Show Nav Content
  console.log(navCollapse);
  navCollapse.classList.add("nav-collapse--open");
  navContent.classList.add("nav-content--open");
};

const closeNav = () => {
  navCollapse.classList.remove("nav-collapse--open");
  navContent.classList.remove("nav-content--open");
};

navOpenButton.addEventListener("click", openNav);
navCloseButton.addEventListener("click", closeNav);
