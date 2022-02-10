'use strict';
// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том,
//  что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, 
// собери значения полей в объект, где имя поля будет именем свойства,
//  а значение поля - значением свойства.
// Для доступа к элементам формы используй свойство elements.
// Выведи объект с введенными данными в консоль и очисти значения полей формы методом reset.

const formRef = document.querySelector('form.login-form')
formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const formData = { email, password };
    if (email && password) {
        console.log(formData)
        } else {
        alert('Please complete all fields')
    }
    formRef.reset();
};