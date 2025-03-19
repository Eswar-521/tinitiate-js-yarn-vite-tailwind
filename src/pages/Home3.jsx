import React from "react";
import { FaRocket, FaLightbulb, FaShieldAlt } from "react-icons/fa";

const Home3 = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-16">
        <h1 className="text-5xl font-extrabold tracking-wider text-blue-400 drop-shadow-md">
          🚀 Welcome to Home3
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl">
          A futuristic home page with professional design and cutting-edge UI experience.
        </p>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8 px-8 py-10">
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition duration-300">
          <FaRocket className="text-blue-400 text-4xl mx-auto" />
          <h3 className="text-xl font-bold mt-4">Super Fast Performance</h3>
          <p className="text-gray-400 mt-2">
            Optimized for speed and efficiency, ensuring seamless experiences.
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition duration-300">
          <FaLightbulb className="text-yellow-400 text-4xl mx-auto" />
          <h3 className="text-xl font-bold mt-4">Innovative Design</h3>
          <p className="text-gray-400 mt-2">
            A creative approach to user-friendly and modern interfaces.
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition duration-300">
          <FaShieldAlt className="text-green-400 text-4xl mx-auto" />
          <h3 className="text-xl font-bold mt-4">Secure & Reliable</h3>
          <p className="text-gray-400 mt-2">
            Built with strong security protocols and best practices.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12">
        <a
          href="/contact"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition duration-300 text-lg font-semibold rounded-lg shadow-lg"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default Home3;
