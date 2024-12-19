import Image from "next/image"; // Importing Next.js Image component for optimized image handling
import Link from "next/link"; // Importing Next.js Link component for client-side navigation

export default function Footer() {
  return (
    // Footer container with background and padding
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        {/* Grid layout for footer sections */}
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and description section */}
          <div>
            <Link href="/" className="text-3xl font-bold">
              <Image
                src="/lws-kitchen.png" // Corrected path for logo image
                alt="LWS Kitchen Logo" // Alt text for accessibility
                width={100} // Image width in pixels
                height={100} // Image height in pixels
                className="h-10" // Ensuring consistent height scaling
              />
            </Link>
            <p className="text-gray-600 mt-2 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* LWS Kitchen Links */}
          <div>
            <h4 className="font-semibold mb-4">LWS Kitchen</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-orange-500">
                  About us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-orange-500">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-orange-500">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-orange-500">
                  Feedback
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-orange-500">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-orange-500">
                  Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-orange-500">
                  Cookies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-orange-500">
                  Copyright
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="font-semibold mb-4">Follow</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-orange-500">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-orange-500">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-orange-500">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-orange-500">
                  Youtube
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
