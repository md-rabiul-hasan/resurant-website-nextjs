import { createSlug, getCategoryPopularRecipies, getRecipieDetails } from "@/app/lib/helper";

// Component to display recipe details along with popular recipes
export default async function RecipeDetailsPage(props) {
  // Extract categoryId and slug from the props.params
  const { categoryId, slug } = await props.params;

  // Fetch recipe details based on the slug
  const recipie = await getRecipieDetails(slug);

  // Fetch popular recipes for the given categoryId
  const popularRecipies = await getCategoryPopularRecipies(categoryId);

  // Log popular recipes to the console for debugging purposes
  console.log(popularRecipies);

  return (
    <main className="container mx-auto px-4 py-8 mt-16">
      {/* Recipe details section */}
      <article>
        {/* Recipe title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{recipie.title}</h1>

        {/* Recipe metadata: author, cooking time, and published date */}
        <div className="flex items-center space-x-4 mb-6">
          <img
            src="/avater.png"
            alt="Author"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-gray-600">{recipie.author}</span>
          <span className="text-gray-400">|</span>
          <span className="text-gray-600">{recipie.cooking_time}</span>
          <span className="text-gray-400">|</span>
          <span className="text-gray-600">{recipie.published_date}</span>
        </div>

        {/* Action buttons: Share and Save */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex space-x-4">
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full">
              {/* Share button icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline-block mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
              Share
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full">
              {/* Save button icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline-block mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
              Save
            </button>
          </div>
        </div>

        {/* Recipe thumbnail */}
        <img
          src={`/thumbs/${recipie.thumbnail}`}
          alt="Cooking Image"
          className="w-full h-auto mb-8 rounded-lg"
        />

        {/* Recipe description */}
        <p className="text-gray-600 mb-8">{recipie.description}</p>
      </article>

      {/* Popular recipes section */}
      <section className="my-12">
        {/* Section heading */}
        <h2 className="text-3xl font-bold mb-8">You might also like</h2>

        {/* Grid layout for popular recipes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {popularRecipies.map((recipe, index) => (
            <Link  href={`/${recipe.category_id}/${createSlug(recipe.title)}`} key={index}>
              <div >
                {/* Thumbnail for each recipe */}
                <img
                  src={`/thumbs/${recipe.thumbnail}`}
                  alt="Recipe"
                  className="w-full h-60 object-cover rounded-lg mb-2"
                />
                {/* Recipe title */}
                <h3 className="font-semibold">{recipe.title}</h3>
              </div>
            </Link>
            
          ))}
        </div>
      </section>
    </main>
  );
}
