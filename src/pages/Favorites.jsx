import { useEffect,useState } from "react";
import RecipeCard from "../components/RecipeCard";

export default function Favorites(){

  const [favorites,setFavorites] = useState([]);

  useEffect(()=>{

    const fav =
      JSON.parse(localStorage.getItem("favorites")) || [];

    setFavorites(fav);

  },[]);

  return(

    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6">
        Favorite Recipes
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {favorites.map(meal=>(
          <RecipeCard
            key={meal.idMeal}
            meal={meal}
          />
        ))}

      </div>

    </div>
  );
}
