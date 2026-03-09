import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { getMealById } from "../services/api";

export default function RecipeDetails(){

  const {id} = useParams();
  const [meal,setMeal] = useState(null);

  useEffect(()=>{

    const fetchMeal = async()=>{

      const res = await getMealById(id);

      setMeal(res.data.meals[0]);

    };

    fetchMeal();

  },[id]);

  if(!meal) return <p>Loading...</p>;

  const ingredients = [];

  for(let i=1;i<=20;i++){

    if(meal[`strIngredient${i}`]){

      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      );

    }
  }

  return(

    <div className="p-6 max-w-4xl mx-auto">

      <h1 className="text-3xl font-bold mb-4">
        {meal.strMeal}
      </h1>

      <img
        src={meal.strMealThumb}
        className="w-full rounded-lg mb-6"
      />

      <h2 className="text-xl font-bold mb-3">
        Ingredients
      </h2>

      <ul className="list-disc ml-6 mb-6">

        {ingredients.map((item,index)=>(
          <li key={index}>{item}</li>
        ))}

      </ul>

      <h2 className="text-xl font-bold mb-3">
        Instructions
      </h2>

      <p className="mb-6 whitespace-pre-line">
        {meal.strInstructions}
      </p>

      {meal.strYoutube && (
        <a
          href={meal.strYoutube}
          target="_blank"
          className="text-blue-600 underline"
        >
          Watch Cooking Video
        </a>
      )}

    </div>
  );
}
