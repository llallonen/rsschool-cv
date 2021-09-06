# Valeria Sycheva
### Junior web-developer.

## Contacts 

**Email:** [llallonen@gmail.com](llallonen@gmail.com)<br>
**GitHub:** [Llallonen](https://github.com/llallonen)<br>
**Telegram:** [Valeria Sycheva](https://t.me/nguoxtf)

## Skills

- HTML
- CSS/SCSS
- JavaScript
- Git
- Webpack, Gulp
- Figma, Avocode

## Languages 

- Russian - Native
- English - Intermediate
- French - Basic

## Education 

- [Hexlet JS interactive courses](https://ru.hexlet.io/categories/javascript/courses)
- [HTML Academy interactive courses](https://htmlacademy.ru/coursest )
- [FreeCodeCamp JS courses](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)
- [Udemy JS course 'Javascript full'](https://www.udemy.com/course/javascript_full/)

## About me

Hello world! I'm Lera, beginner web-developer.
I'm obsessed with idea to contribute to the web by creating responsive, accessible and enjoyable apps. My personal passion is beautiful animations in pure CSS, one day I want to be able to make my own ideal one.

### My strengths

- to be detail-oriented that means being able to pay close attention and notice minor details;
- ability to switch between tasks quickly or focusing on two or more objectives;
- learnability and a great desire to learn;
- sense of humor (hepls to deal with any kind of difficulties).

In my free time I am fond of clay modeling, anthropological stories of different nationalities, ecotourism, birdwatching and art of the 20th century.

## My projects 

[Freshnesecom Shop](https://freshnesecomshop.netlify.app/)<br>
[JS Calculator](https://github.com/llallonen/calc)

## Code example 
Here's my solution of Codewars Kata [Create Phone Number](https://www.codewars.com/kata/525f50e3b73515a6db000b83/javascript):

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
```
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
```

```
function scoreboard(string) {
  let template = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    nil: 0,
  };

  return string.split(" ").map((word) => {
    if (template.hasOwnProperty(word)) {
      return template[word]
    }
  }).filter(Number.isInteger);
}
```


