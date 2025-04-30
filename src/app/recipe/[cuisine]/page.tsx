
import { notFound } from "next/navigation";
import Image from "next/image";

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
    `https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisine}&number=9&sort=popularity&apiKey=${API_KEY}`,
  );

  if (!res.ok) {
    console.error("Failed to fetch recipes");
    return [];
  }

  const data = await res.json();
  return data.results || [];
}

export default async function CuisinePage({
  params,
}: {
  params: { cuisine: string };
}) {
  const { cuisine } = params;
  const recipes = await fetchRecipes(cuisine);

  if (!recipes.length) {
    return notFound();
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{cuisine} Recipes </h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6rem"}}>
        {recipes.map((recipe) => (
          <div key={recipe.id} style={{ width: "200px" }}>
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
    </div>
  );
}
