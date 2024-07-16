import React from "react";
import Ingredients from "./Ingredients";
import ExtractVideo from "./ExtractVideo";


const Main = ({item}) => {
  return (
    <div className="App">
      <article className="recipe">
      <h2>{item.strMeal}</h2>
      <img width="500" height="400" src={item.strMealThumb} alt={item.strMeal} />
      <h3>Ingredients</h3>
      <Ingredients item={item} />
      <h3>Instructions</h3>
      <p>{item.strInstructions}</p>
    </article>
      <ExtractVideo item={item} />
    </div>
  )
}
export default Main;