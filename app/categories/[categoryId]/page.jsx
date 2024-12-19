import { getCategoryInfo, getCategoryRecipes } from "@/app/lib/helper";

export default async function page(props) {
    const { categoryId } = await props.params;
    const category = await getCategoryInfo(categoryId);
    const recipies = await getCategoryRecipes(categoryId);
    console.log(recipies);
    return (
        <main className="container mx-auto px-4 py-8 mt-[100px]">
  <div className="flex justify-between items-center mb-8">
    <div>
      <h1 className="text-4xl font-bold mb-2">
        {category.name}{" "}
        <span className="text-gray-500 text-2xl font-normal">({recipies.length} Recipes)</span>
      </h1>
      <p className="text-gray-600">
        One thing I learned living in the Canarsie section of Brooklyn, NY was
        how to cook a good Italian meal. Here is a recipe I created after having
        this dish in a restaurant. Enjoy!
      </p>
    </div>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

    {
        recipies.map((recipe) => (
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src={`/thumbs/${recipe.thumbnail}`}
              alt="Tripple Chocolate Mousse Cake"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg mb-2">
                {recipe.title}
              </h2>
            </div>
          </div>
        ))
    }


    {/* Repeat the above div structure for the remaining dessert items */}
  </div>
</main>

    )
}
