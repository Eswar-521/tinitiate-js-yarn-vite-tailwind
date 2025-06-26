

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide animate-fadeIn">
          Welcome to Home 
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
          Experience a refined, professional layout with seamless navigation.
        </p>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-6 p-10">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
          <h3 className="text-2xl font-semibold">🚀 Fast & Reliable</h3>
          <p className="text-gray-400 mt-2">
            Optimized for performance, ensuring smooth user experience.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
          <h3 className="text-2xl font-semibold">🎨 Stunning Design</h3>
          <p className="text-gray-400 mt-2">
            Aesthetic UI with a sleek, modern feel and professional look.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
          <h3 className="text-2xl font-semibold">🔒 Secure & Scalable</h3>
          <p className="text-gray-400 mt-2">
            Built with best practices to ensure security and scalability.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-10">
        <a
          href="/services"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 transition duration-300 text-lg font-semibold rounded-lg shadow-md"
        >
          Explore Services
        </a>
      </section>
    </div>
  );
};

export default Home;
