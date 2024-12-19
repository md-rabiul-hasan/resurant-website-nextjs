// Importing components for the Home page
import EmailSubscribe from "./components/Home/EmailSubscribe";
import HandPickedCollection from "./components/Home/HandPickedCollection";
import Hero from "./components/Home/Hero";
import LatestRecipie from "./components/Home/LatestRecipie";
import PopularCategory from "./components/Home/PopularCategory";
import SuperDelicius from "./components/Home/SuperDelicius";

// Home Component: This is the main component for the home page of the application
export default function Home() {
  return (
    // Main container with responsive styling
    <main className="container mx-auto px-4 mt-[100px]">
      {/* Hero section: Displays the main banner or introductory content */}
      <Hero />

      {/* SuperDelicius section: Highlights special or featured content */}
      <SuperDelicius />

      {/* PopularCategory section: Displays popular categories for users */}
      <PopularCategory />

      {/* EmailSubscribe section: Includes a form for users to subscribe via email */}
      <EmailSubscribe />

      {/* HandPickedCollection section: Showcases a curated collection of items */}
      <HandPickedCollection />

      {/* LatestRecipie section: Displays the most recent recipes or content */}
      <LatestRecipie />
    </main>
  );
}
