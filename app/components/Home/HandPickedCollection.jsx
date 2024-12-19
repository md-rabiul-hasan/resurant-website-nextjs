import { createSlug, getHandPickedRecipes } from "@/app/lib/helper";
import Image from "next/image";
import Link from "next/link";

export default async function HandPickedCollection() {
  const handPickedRecipies = await getHandPickedRecipes();
  return (
    <section className="mb-16">
      {/* Section title */}
      <h2 className="text-3xl font-bold mb-8 animate-fade-in-down">
        Hand-Picked Collections
      </h2>

      {/* Grid container for two items */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Loop through handPickedRecipies */}
        {handPickedRecipies.map((handPickedRecipe) => (
          <div
            key={handPickedRecipe.id} // Ensure you add a unique key for each element
            className="relative group overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform cursor-pointer"
          >
            <Image
              src={`/thumbs/${handPickedRecipe.thumbnail || "default.jpg"}`}  // Default image if thumbnail is missing
              alt={handPickedRecipe.title} // Image description for accessibility
              className="w-full h-[400px] rounded-lg object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
              height={400}
              width={500}  // Set width to 0, since we are using w-full for full width in CSS
            />

            {/* Overlay for the image */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
              <h3 className="text-xl font-semibold mb-2">
                {handPickedRecipe.title}
              </h3>
              {/* Link to the collection */}
              <Link  href={`/${handPickedRecipe.category_id}/${createSlug(handPickedRecipe.title)}`} className="text-orange-300 hover:underline">
                View Collection
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
