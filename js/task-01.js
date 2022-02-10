'use strict';

// Задача 1
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).

const listItem = document.querySelectorAll('.item');
console.log('Number of categories:', listItem.length);

listItem.forEach(function (category) {
    console.log('Category: ', category.firstElementChild.textContent);
    console.log('Element: ', category.lastElementChild.children.length);
});