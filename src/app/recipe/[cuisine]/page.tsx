"use client"

import { useState, useEffect } from "react";
import styles from "../../styles/RecipeList.module.css";
import Image from "next/image";
import RecipeModal from "@/app/components/Modal";

type Recipe = {
  id: number;
  title: string;
  image: string;
};

const API_KEY = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;

async function fetchRecipes(cuisine: string): Promise<Recipe[]> {
  if (!API_KEY) {
    console.error("Missing Spoonacular API key");
    return [];
  }

  const res = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisine}&number=9&sort=popularity&apiKey=${API_KEY}`
  );

  if (!res.ok) {
    console.error("Failed to fetch recipes");
    return [];
  }

  const data = await res.json();
  return data.results || [];
}

export default function CuisinePage({
  params,
}: {
  params: { cuisine: string };
}) {
  const { cuisine } = params;
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [selectedRecipeId, setSelectedRecipeId] = useState<number | null>(null); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedRecipes = await fetchRecipes(cuisine);
      setRecipes(fetchedRecipes);
    };

    fetchData();
  }, [cuisine]);

  const openModal = (id: number) => {
    setSelectedRecipeId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false); 
    setSelectedRecipeId(null); 
  };

  return (
    <div style={{ padding: "2rem" }} className={styles.recipeContainer}>
      <h1>{cuisine} Recipes</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6rem", justifyContent:"center" }}>
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{ width: "200px", cursor: "pointer" }}
            onClick={() => openModal(recipe.id)} 
          >
            <Image
              src={recipe.image}
              alt={recipe.title}
              width={200}
              height={150}
              style={{ objectFit: "cover" }}
            />
            <p>{recipe.title}</p>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <RecipeModal
          isOpen={isModalOpen}
          onClose={closeModal}
          recipeId={selectedRecipeId} 
        />
      )}
    </div>
  );
}
