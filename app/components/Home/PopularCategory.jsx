import { getPopularCategories } from "@/app/lib/helper";
import Link from "next/link";

export default async function PopularCategory() {
    const popularCategories = await getPopularCategories();
    return (
      <section className="mb-16">
        <div className="flex justify-between items-top mb-8">
          <h2 className="text-3xl font-bold">Popular Categories</h2>
          <Link href="/categories" className="text-orange-500 hover:underline">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {popularCategories.map((category, index) => (
            <Link  href={`/categories/${category.id}`} key={index} >
              <div className="cursor-pointer text-center group">
                <div className="overflow-hidden rounded-full mb-2 w-20 h-20 mx-auto">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <p className="transition-transform duration-300 group-hover:scale-105">{category.name}</p>
              </div>
            </Link>
            
          ))}
        </div>
      </section>
    );
  }
  