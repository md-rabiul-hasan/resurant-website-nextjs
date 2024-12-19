import { createSlug, getSuperDelicious } from '@/app/lib/helper';
import Image from 'next/image';
import Link from 'next/link';

export default async function SuperDelicious() {
  // Pass the actual recipes data to getSuperDelicious
  const superDeliciousRecipies = await getSuperDelicious();

  return (
    <section className="mb-16" id="super_delicious">
      <h2 className="text-3xl font-bold mb-8">Super Delicious</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {superDeliciousRecipies.map((recipe, index) => (
          <Link href={`/${recipe.category_id}/${createSlug(recipe.title)}`}  key={index}>
          <div >
            {/* Ensure width is specified for the Image component */}
            <Image
              src={`/thumbs/${recipe.thumbnail}`}
              alt={recipe.title}
              className="w-full h-[300px] object-cover rounded-lg mb-4"
              height={300}
              width={500}  // Specify a valid width, such as 500 or any appropriate value
            />
            <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
            <div className="flex items-center text-yellow-500 mb-2">
              {/* Ensure average_rating exists before mapping stars */}
              {recipe.rating && recipe.rating.average_rating ? (
                Array(Math.round(recipe.rating.average_rating)).fill().map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))
              ) : (
                <p>No rating available</p> // Handle cases where there is no rating
              )}
            </div>
            <p className="text-gray-600">{recipe.cooking_time}</p>
          </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
