import React from "react";

const Ingredients = ({item}) => {

  const ingredients = getIngredients(item);

  return (
    <ul>
      {ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
      ))}
    </ul>
  );
}

function getIngredients(item) {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredientKey = `strIngredient${i}`;
    const ingredient = item[ingredientKey];
    if (ingredient) {
      ingredients.push(`${ingredient}`);
    }
  }
  return ingredients;
}

export default Ingredients;