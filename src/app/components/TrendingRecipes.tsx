"use client"

import React, { useEffect, useState } from "react";
import styles from "../styles/TrendingRecipes.module.css";

const API_KEY = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;

type Recipe = {
    id: number;
    title: string;
    image: string;
  };

const TrendingRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPopularRecipes = async () => {
    try {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?sort=popularity&number=6&apiKey=${API_KEY}`
      );
      const data = await res.json();
      setRecipes(data.results || []);
    } catch (err) {
      console.error("Failed to fetch recipes:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPopularRecipes();
  }, []);

  return (
    <div className={styles.trendingrecipesContainer}>
      <h2>Trending Recipes</h2>
        <div className={styles.recipeGrid}>
          {recipes.map((recipe) => (
            <div key={recipe.id} className={styles.recipeCard}>
              <img src={recipe.image} alt={recipe.title} />
              <h3>{recipe.title}</h3>
            </div>
          ))}
        </div>
    </div>
  );
};

export default TrendingRecipes;
