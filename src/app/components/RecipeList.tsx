"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "../styles/RecipeList.module.css";

const RecipeList = () => {
  const router = useRouter();

  const handleCuisineClick = (cuisine: string) => {
    console.log("Navigating to:", cuisine); 
    router.push(`/recipe/${cuisine}`);
  };


  return (
    <div className={styles.recipeContainer}>
      <h2>Find your favorite recipe</h2>

      <div className={styles.cuisineImages}>
        <div
          className={styles.cuisineImage}
          onClick={() => handleCuisineClick("Greek")}
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
          onClick={() => handleCuisineClick("Italian")}
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
          onClick={() => handleCuisineClick("Mexican")}
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
          onClick={() => handleCuisineClick("Japanese")}
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
        <div
          className={styles.cuisineImage}
          onClick={() => handleCuisineClick("French")}
        >
          <Image
            src="/french.jpg"
            alt="French Cuisine"
            width={150}
            height={150}
            style={{ objectFit: "cover", borderRadius: "50%" }}
          />
          <p>French</p>
        </div>
        <div
          className={styles.cuisineImage}
          onClick={() => handleCuisineClick("Indian")}
        >
          <Image
            src="/indian.jpg"
            alt="Indian Cuisine"
            width={150}
            height={150}
            style={{ objectFit: "cover", borderRadius: "50%" }}
          />
          <p>Indian</p>
        </div>
        <div
          className={styles.cuisineImage}
          onClick={() => handleCuisineClick("Spanish")}
        >
          <Image
            src="/spanish.jpg"
            alt="Spanish Cuisine"
            width={150}
            height={150}
            style={{ objectFit: "cover", borderRadius: "50%" }}
          />
          <p>Spanish</p>
        </div>
        <div
          className={styles.cuisineImage}
          onClick={() => handleCuisineClick("Thai")}
        >
          <Image
            src="/thailand.jpg"
            alt="Thailand Cuisine"
            width={150}
            height={150}
            style={{ objectFit: "cover", borderRadius: "50%" }}
          />
          <p>Thailand</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeList;
