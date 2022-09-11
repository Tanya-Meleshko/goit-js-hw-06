// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
//     подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка "Anonymous".

const inputEl = document.querySelector('#name-input');
const titleNameEl = document.querySelector('#name-output');


const handleInputChange = (event) => {

    if (event.currentTarget.value === '') {
    return titleNameEl.textContent = 'Anonymous';
    }
    
    titleNameEl.textContent = event.currentTarget.value;
}

inputEl.addEventListener('input', handleInputChange);


