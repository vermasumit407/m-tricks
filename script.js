
let myNav = document.getElementById('mynav');
let addNavClass = () => {
  if (window.scrollY > 100) {
    myNav.classList.add('home-bg-dark');
  } else {
    myNav.classList.remove('home-bg-dark');
  }
}

window.addEventListener("scroll",addNavClass);
window.addEventListener("load",addNavClass);
