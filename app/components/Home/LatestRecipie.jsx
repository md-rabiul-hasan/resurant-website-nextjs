import { createSlug, getLatesRecipes } from "@/app/lib/helper";
import Image from "next/image";
import Link from "next/link";

export default async function LatestRecipie() {
  const latestRecipies = await getLatesRecipes();
  
  return (
    <section className="mb-16">
      {/* Section title */}
      <h2 className="text-3xl font-bold mb-8">Latest Recipes</h2>

      {/* Grid container for recipe items */}
      <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-8">
        {latestRecipies.map((recipe) => (
          <Link href={`/${recipe.category_id}/${createSlug(recipe.title)}`} key={recipe.id}>
            <div  className="flex flex-col items-center">
            {/* Recipe Image */}
            <Image
              src={`/thumbs/${recipe.thumbnail}`}  // Path to the image (must be in the public folder in Next.js)
              alt={recipe.title} // Image description for accessibility
              className="w-full h-[300px] object-cover rounded-lg mb-4"  // Tailwind CSS for styling and responsiveness
              height={300} // Fixed height to ensure layout consistency
              width={300}  // Fixed width for consistency, could be dynamic depending on design
            />
            
            {/* Recipe Title */}
            <h3 className="text-lg font-semibold mb-2">{recipe.title}</h3>

            {/* Recipe Author */}
            <p className="text-gray-600">{recipe.author}</p>
          </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
