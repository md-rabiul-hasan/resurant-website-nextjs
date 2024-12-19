import Link from "next/link";
import { getAllCategory } from "../lib/helper";

export default async function CategoryPage() {
  const categories = await getAllCategory();
  return (
    <main className="container mx-auto px-4 py-8 mt-[100px]">
      <h1 className="text-5xl font-bold mb-12">Categories</h1>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {
          categories.map((category) => (
            <Link href={`/categories/${category.id}`} key={category.id}>
                <div className="text-center">
                  <div className="overflow-hidden rounded-full mb-4 relative cursor-pointer">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-auto transform transition-transform duration-300 ease-in-out hover:scale-110"
                    />
                  </div>
                  <h2 className="text-xl font-semibold">{category.name}</h2>
                </div>
            </Link>
          ))
        }
      </div>
    </main>
  );
}
