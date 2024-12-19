// EmailSubscribe Component: A subscription form for users to receive updates via email
export default function EmailSubscribe() {
    return (
      <section className="mb-16 bg-orange-100 p-8 rounded-lg overflow-hidden">
        {/* Section title */}
        <h2 className="text-3xl font-bold mb-4">Deliciousness to your inbox</h2>
        
        {/* Section description */}
        <p className="text-gray-600 mb-4">
          Enjoy weekly hand-picked recipes and recommendations
        </p>
        
        {/* Subscription form */}
        <form className="flex flex-col md:flex-row gap-4">
          {/* Email input field */}
          <input
            type="email"
            placeholder="Email Address"
            className="flex-grow px-4 py-2 rounded-full"
            required // Ensures the email field is required
          />
          
          {/* Submit button */}
          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600"
          >
            Join
          </button>
        </form>
      </section>
    );
  }
  