import Image from 'next/image'; // Import Image component from Next.js for optimized images
import Link from 'next/link'; // Import Link component from Next.js for client-side navigation

import { createSlug, getHeroRecipie } from '@/app/lib/helper'; // Import helper functions for slug creation and fetching data

export default async function Hero() {
  // Fetch the hero recipe details
  const heroRecipie = await getHeroRecipie();

  return (
    <section className="mb-16 bg-orange-50">
      {/* Grid container to hold the image and text sections */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left section: Image of the dessert */}
        <div>
          <Image
            src={`/thumbs/${heroRecipie.thumbnail}`} // Path to the image (must be in the public folder in Next.js)
            alt="Mighty Super Cheesecake" // Image description for accessibility
            className="w-full h-[450px] object-cover rounded-lg" // Tailwind CSS for styling and responsiveness
            height={450} // Height of the image
            width={500} // Width of the image
          />
        </div>
        
        {/* Right section: Heading, description, and link */}
        <div>
          {/* Recipe title */}
          <h1 className="text-4xl font-bold mb-4">
            {heroRecipie.title}
          </h1>
          {/* Recipe description */}
          <p className="text-gray-600 mb-4">
            {heroRecipie.description}
          </p>
          {/* Link to the recipe or blog details page */}
          <Link
            href={`/${heroRecipie.category_id}/${createSlug(heroRecipie.title)}`} // Link to the recipe or blog details page
            className="bg-orange-500 text-white px-6 py-2 rounded-full inline-block hover:bg-orange-600" // Tailwind CSS for button styling
          >
            View Recipe
          </Link>
        </div>
      </div>
    </section>
  );
}
