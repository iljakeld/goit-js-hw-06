const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обязательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.
const ingredientsRef = document.querySelector('#ingredients');
const ingredientsList = ingredients.map(ingredient => {
  const ingredientRef = document.createElement('li');
  ingredientRef.classList.add('item')
  ingredientRef.textContent = ingredient;
  return ingredientRef;
});

ingredientsRef.append(...ingredientsList);