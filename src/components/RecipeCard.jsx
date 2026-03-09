import { Link } from "react-router-dom";
import { useState } from "react";

export default function RecipeCard({ meal }) {

  const [fav,setFav] = useState(false);

  const addFavorite = () => {

    let favorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    favorites.push(meal);

    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );

    setFav(true);
  };

  return (

    <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 overflow-hidden">


      <Link to={`/recipe/${meal.idMeal}`}>
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-48 object-cover"
        />
      </Link>

      <div className="p-4 flex justify-between items-center">

        <h2 className="font-semibold text-sm">
          {meal.strMeal}
        </h2>

        <button
          onClick={addFavorite}
          className="text-red-500 text-xl"
        >
          {fav ? "❤️" : "🤍"}
        </button>

      </div>

    </div>
  );
}
