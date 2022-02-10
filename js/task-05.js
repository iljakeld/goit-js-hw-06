'use strict';
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
//  подставляет его текущее значение в span#name - output.Если инпут пустой, в спане должна отображаться строка "Anonymous".

const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');
console.log(inputRef);
console.log(outputRef);

inputRef.addEventListener('change', event => {
    if (event.currentTarget.value === "") {
        outputRef.textContent = 'Anonymous';
    } else {
        outputRef.textContent = event.currentTarget.value;
    }

    return outputRef.textContent;
});
