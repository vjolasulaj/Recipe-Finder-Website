"use client"

import React, { useState, useEffect } from "react";
import styles from "../styles/Modal.module.css"
import axios from "axios";

interface RecipeModalProps {
  isOpen: boolean;
  onClose: () => void;
  recipeId: number | null;
}

interface Ingredient {
  id: number;
  original: string;
}

interface Recipe {
  title: string;
  image: string;
  servings: number;
  readyInMinutes: number;
  extendedIngredients: Ingredient[];
  dishTypes: string[];
}

const RecipeModal: React.FC<RecipeModalProps> = ({
  isOpen,
  onClose,
  recipeId,
}) => {
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    if (!isOpen || !recipeId) return;

    const fetchRecipe = async () => {
      try {
        const res = await axios.get(
          `https://api.spoonacular.com/recipes/${recipeId}/information`,
          {
            params: {
              apiKey: process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY,
            },
          }
        );
        setRecipe(res.data);
      } catch (err) {
        console.error("Error fetching recipe:", err);
      }
    };

    fetchRecipe();
  }, [isOpen, recipeId]);

  if (!isOpen || !recipe) return null;

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} width="100%" />

        <p><strong>Servings:</strong> {recipe.servings}</p>
        <p><strong>Ready In:</strong> {recipe.readyInMinutes} minutes</p>

        <h3>Ingredients:</h3>
        <ul>
          {recipe.extendedIngredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
        </ul>

        <h3>Dish Type:</h3>
        <p>{recipe.dishTypes?.join(", ") || "N/A"}</p>
      </div>
    </div>
  );
};

export default RecipeModal;
