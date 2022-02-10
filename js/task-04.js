'use strict';

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const valueRef = document.querySelector('#value');
const decrRef = document.querySelector('button[data-action="decrement"]');
const incrRef = document.querySelector('button[data-action="increment"]');
let counterValue = 0;

decrRef.addEventListener('click', () => {
    counterValue -= 1;
    return valueRef.textContent = counterValue;
});
incrRef.addEventListener('click', () => {
    counterValue += 1;
    return valueRef.textContent = counterValue;
});