import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients}) => {
  return(
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li> 
        ))}
      </ol>
      <p>{'Total calories: ' + Math.round(calories)}</p>
      <img className={style.image} src={image} alt={"Image of " + title}/>
    </div>
  );
}

export default Recipe;