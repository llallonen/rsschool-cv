const menu = document.querySelector('.menu');
const burger = document.querySelector('.burger-menu');
const photo = document.querySelector('.photo');

menu.addEventListener('click', (event) => {
  let target = event.target;
  let elem = target;
  let name = target.tagName;
  let attr;

  if (name === 'LI') {
    attr = elem.querySelector('A').getAttribute('href');
   }
   
  if (name === 'A') {
    event.preventDefault();
    attr = elem.getAttribute('href');
  }

  let wantedSection = document.getElementById(attr.slice(1));
  console.log(wantedSection);
  
  openCloseBurger();
  const y = wantedSection.getBoundingClientRect().top + window.scrollY;
    window.scroll({
    top: y,
    behavior: 'smooth'
  });
})

burger.onclick = openCloseBurger;

function openCloseBurger() {
  burger.classList.toggle("burger-menu--open");
  document.querySelector('.menu').classList.toggle('menu--active');

  if (window.matchMedia("(min-width: 560px)" && "(max-width: 768px)").matches) {
    photo.classList.toggle('photo--translated');
  }
}

window.addEventListener('resize', () => {
  if (window.matchMedia("(min-width: 900px)").matches) { 
    if (burger.classList.contains('burger-menu--open')) {
      openCloseBurger();
    }
  }
})