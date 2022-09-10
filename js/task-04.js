// Счетчик состоит из спана и кнопок, которые, при клике,
//     должны увеличивать и уменьшать его значение на единицу.

//     Создай переменную counterValue в которой будет храниться текущее значение счетчика
// и инициализируй её значением 0.

// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;

const decrementButtonEl = document.querySelector('[data-action="decrement"]');
const incrementButtonEl = document.querySelector('[data-action="increment"]');
const counterValueEl = document.querySelector('#value');

const handleDecrementButtonClick = () => {
    counterValueEl.textContent = counterValue -= 1;
};

const handleIncrementButtonClick = () => {
counterValueEl.textContent = counterValue += 1;
};

decrementButtonEl.addEventListener('click', handleDecrementButtonClick);
incrementButtonEl.addEventListener('click', handleIncrementButtonClick);

