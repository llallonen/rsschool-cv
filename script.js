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

console.log(`
  PR: /*link*/
  
  Score 150/160

  1. Вёрстка валидная +10
  Для проверки валидности вёрстки используйте сервис https://validator.w3.org/
  Надпись "Document checking completed. No errors or warnings to show." +10

  2. Вёрстка семантическая +20
  В коде страницы присутствуют семантические теги HTML5, например, article, aside, figure, figcaption, footer, header, main, nav, section, используются заголовки h1-h6. Заголовок h1 может быть только один.
  2 балла за каждый уникальный семантический тег HTML5 и за каждый уникальный заголовок h1-h6, но не больше 20 баллов

  3. Для оформления СV используются css-стили +10
  За каждый стилизованный элемент 1 балл, но не больше 10 баллов

  4. Контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы +10

  5. Вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется +10

  6. Есть адаптивное бургер-меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным. +10

  7. На странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым) +10

  8. Контакты для связи и перечень навыков оформлены в виде списка ul > li +10

  9. CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10

  10. CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода. Для подсветки кода может использоваться js-библиотека, например, highlight.js +10

  11. CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий. +10

  12. CV выполнено на английском языке +10

  13. Выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт) +10
  Вниманию проверяющих. Так как сабмитится ссылка на деплой CV, вам необходимо будет самостоятельно найти Pull Request для проверки. Для этого по ссылке в футере перейдите на гитхаб автора CV, найдите там репозиторий rsschool-cv, в нём открытый PR из ветки cv-html-css в ветку main с названием CV и проверьте его описание.

  14. Есть видеорезюме автора CV на английском языке. Видеорезюме встраивается в страницу CV как видео, а не в виде кнопки или ссылки. Продолжительность видео 3-5 минут (±15 секунд). +0

  15. Дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию (это дополнительные 10 баллов, поэтому некоторый субъективизм в оценке может присутствовать) +10
`)