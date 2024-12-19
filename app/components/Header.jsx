import Image from "next/image"; // Importing Next.js Image component for optimized images
import Link from "next/link"; // Importing Next.js Link component for client-side navigation

// Header component definition
export default function Header() {
  return (
    // Header container with a fixed position at the top, shadow for depth, and styling for responsiveness
    <header className="mx-auto px-4 py-4 shadow-lg fixed top-0 bg-white z-50 w-full">
      {/* Navigation bar */}
      <nav className="flex justify-between items-center">
        {/* Logo section with a link to the homepage */}
        <Link href="/" className="text-3xl font-bold">
          <Image
            src="/lws-kitchen.png" // Path to the logo image
            alt="LWS Kitchen Logo" // Alt text for accessibility
            width={100} // Image width
            height={100} // Image height
            className="h-10" // Custom height to ensure consistent scaling
          />
        </Link>

        {/* Navigation links (hidden on smaller screens, visible on medium and larger screens) */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="hover:text-orange-500">
              Home {/* Link to the Home page */}
            </Link>
          </li>
          <li>
            <Link href="/categories" className="hover:text-orange-500">
              Categories {/* Link to the Categories page */}
            </Link>
          </li>
          <li>
            <Link href="./recipes.html" className="hover:text-orange-500">
              Latest Recipes {/* Link to the Latest Recipes page */}
            </Link>
          </li>
        </ul>

        {/* Search icon section */}
        <div className="flex items-center space-x-4">
          <Link href="#" className="hover:text-orange-500">
            {/* SVG icon for search */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6" // Size of the icon
              fill="none" // No background fill
              viewBox="0 0 24 24" // Viewbox dimensions
              stroke="currentColor" // Icon stroke color
            >
              {/* Path defining the search icon */}
              <path
                strokeLinecap="round" // Rounded stroke ends
                strokeLinejoin="round" // Rounded stroke corners
                strokeWidth={2} // Stroke width
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" // Icon path coordinates
              />
            </svg>
          </Link>
        </div>
      </nav>
    </header>
  );
}
