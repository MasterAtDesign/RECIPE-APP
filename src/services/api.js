import axios from "axios";

const API = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1/"
});

export const searchMeals = (query) =>
  API.get(`search.php?s=${query}`);

export const getMealById = (id) =>
  API.get(`lookup.php?i=${id}`);

export const getCategories = () =>
  API.get(`categories.php`);

export const filterByCategory = (category) =>
  API.get(`filter.php?c=${category}`);
