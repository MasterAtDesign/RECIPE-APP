import { useEffect,useState } from "react";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import {
  searchMeals,
  getCategories,
  filterByCategory
} from "../services/api";

export default function Home(){

  const [meals,setMeals] = useState([]);
  const [search,setSearch] = useState("");
  const [categories,setCategories] = useState([]);
  const [loading,setLoading] = useState(false);

  const fetchMeals = async () => {

    setLoading(true);

    const res = await searchMeals(search);

    setMeals(res.data.meals || []);

    setLoading(false);
  };

  const fetchCategories = async () => {

    const res = await getCategories();

    setCategories(res.data.categories);
  };

  const handleFilter = async(category)=>{

    if(!category) return fetchMeals();

    const res = await filterByCategory(category);

    setMeals(res.data.meals);
  };

  useEffect(()=>{
    fetchMeals();
    fetchCategories();
  },[]);

  return(

    <div className="p-6">
         <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl p-8 mb-8 shadow-lg">

  <h1 className="text-4xl font-bold mb-3">
    Discover Delicious Recipes
  </h1>

  <p className="text-lg">
    Search thousands of recipes and find your next favorite meal 🍜
  </p>

</div>

      <SearchBar
        search={search}
        setSearch={setSearch}
        handleSearch={fetchMeals}
      />

      <Filter
        categories={categories}
        handleFilter={handleFilter}
      />

      {loading && (
        <p className="text-center text-lg">
          Loading recipes...
        </p>
      )}
      {loading && (
  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

    {[...Array(8)].map((_,i)=>(
      <div
        key={i}
        className="animate-pulse bg-gray-200 h-60 rounded-xl"
      ></div>
    ))}

  </div>
)}


     


    </div>
  );
}
