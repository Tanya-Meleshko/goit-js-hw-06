// Напиши скрипт, который изменяет цвета фона элемента < body > через инлайн стиль
// при клике на button.change - color и выводит значение цвета в span.color.

// Для генерации случайного цвета используй функцию getRandomHexColor.

const buttonChangeColorEl = document.querySelector('.change-color');
const textColorEl = document.querySelector('.color');

buttonChangeColorEl.addEventListener('click', onChangeBodyColor);

function onChangeBodyColor() {
  textColorEl.textContent = document.body.style.background = getRandomHexColor();
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
