import './Recepts.css'
export default function Recepts({title,calories,image,ingredients}){
    return (
        <div className="recipe">
          <h1>{title}</h1>
          <ol>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient.text}</li>
            ))}
          </ol>
          <p>Calories: {Math.round(calories)}</p>
          <img className='image' src={image} alt={title} />
        </div>
      );
    }