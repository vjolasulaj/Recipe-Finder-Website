"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/RecipeList.module.css";

const RecipeList = () => {
  type Recipe = {
    id: number;
    title: string;
    image: string;
  };

  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const API_KEY = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;

  const fetchRecipesByCuisine = async (cuisine: string) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisine}&number=6&sort=popularity&apiKey=${API_KEY}`
      );
      const data = await response.json();
      setRecipes(data.results || []);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.recipeContainer}>
      <h2>Find your favorite recipe</h2>

      <div className={styles.cuisineImages}>
        <div
          className={styles.cuisineImage}
          onClick={() => fetchRecipesByCuisine("Greek")}
        >
          <Image
            src="/greek.jpg"
            alt="Greek Cuisine"
            width={150}
            height={150}
            style={{ objectFit: "cover", borderRadius: "50%" }}
          />
          <p>Greek</p>
        </div>
        <div
          className={styles.cuisineImage}
          onClick={() => fetchRecipesByCuisine("Italian")}
        >
          <Image
            src="/italian.jpg"
            alt="Italian Cuisine"
            width={150}
            height={150}
            style={{ objectFit: "cover", borderRadius: "50%" }}
          />
          <p>Italian</p>
        </div>
        <div
          className={styles.cuisineImage}
          onClick={() => fetchRecipesByCuisine("Mexican")}
        >
          <Image
            src="/mexican.jpg"
            alt="Mexican Cuisine"
            width={150}
            height={150}
            style={{ objectFit: "cover", borderRadius: "50%" }}
          />
          <p>Mexican</p>
        </div>
        <div
          className={styles.cuisineImage}
          onClick={() => fetchRecipesByCuisine("Japanese")}
        >
          <Image
            src="/japanese.jpg"
            alt="Japanese Cuisine"
            width={150}
            height={150}
            style={{ objectFit: "cover", borderRadius: "50%" }}
          />
          <p>Japanese</p>
        </div>
      </div>

      {/* {loading && <p>Loading recipes...</p>} */}

      <div className={styles.recipeResults}>
        {recipes.map((recipe) => (
          <div key={recipe.id} className={styles.recipeCard}>
            <Image
              src={recipe.image}
              alt={recipe.title}
              width={200}
              height={150}
              style={{ objectFit: "cover", borderRadius: "10px" }}
            />
            <p>{recipe.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
