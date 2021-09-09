const menu = document.querySelector('.menu');

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
  

  const y = wantedSection.getBoundingClientRect().top + window.scrollY;
    window.scroll({
    top: y,
    behavior: 'smooth'
  });
})