import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import {
  searchMeals,
  getCategories,
  filterByCategory
} from "../services/api";

export default function Home() {

  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch meals by search
  const fetchMeals = async () => {

    setLoading(true);

    try {

      const res = await searchMeals(search);

      setMeals(res.data.meals || []);

    } catch (error) {

      console.log(error);

    }

    setLoading(false);
  };

  // Fetch categories
  const fetchCategories = async () => {

    try {

      const res = await getCategories();

      setCategories(res.data.categories);

    } catch (error) {

      console.log(error);

    }
  };

  // Filter by category
  const handleFilter = async (category) => {

    if (!category) {
      fetchMeals();
      return;
    }

    try {

      const res = await filterByCategory(category);

      setMeals(res.data.meals);

    } catch (error) {

      console.log(error);

    }
  };

  // Load data on page start
  useEffect(() => {

    fetchMeals();
    fetchCategories();

  }, []);

  return (

    <div className="p-6">

      {/* Hero Section */}

      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl p-8 mb-8 shadow-lg">

        <h1 className="text-4xl font-bold mb-3">
          Discover Delicious Recipes
        </h1>

        <p className="text-lg">
          Search thousands of recipes and find your next favorite meal 🍜
        </p>

      </div>

      {/* Search */}

      <SearchBar
        search={search}
        setSearch={setSearch}
        handleSearch={fetchMeals}
      />

      {/* Category Filter */}

      <Filter
        categories={categories}
        handleFilter={handleFilter}
      />

      {/* Loading Text */}

      {loading && (
        <p className="text-center text-lg mt-6">
          Loading recipes...
        </p>
      )}

      {/* Skeleton Loader */}

      {loading && (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">

          {[...Array(8)].map((_, i) => (

            <div
              key={i}
              className="animate-pulse bg-gray-200 h-60 rounded-xl"
            ></div>

          ))}

        </div>
      )}

      {/* Recipe Cards */}

      {!loading && meals.length > 0 && (

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">

          {meals.map((meal) => (

            <RecipeCard
              key={meal.idMeal}
              meal={meal}
            />

          ))}

        </div>

      )}

      {/* No Results */}

      {!loading && meals.length === 0 && (

        <p className="text-center text-gray-500 mt-6">
          No recipes found. Try another search.
        </p>

      )}

    </div>
  );
}