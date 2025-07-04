import { Search, Star, Sparkles } from "lucide-react";

const SearchPage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700 p-8 overflow-hidden">
      {/* Floating elements */}
      <div className="absolute top-10 left-10 bg-purple-400/30 rounded-full w-32 h-32 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 bg-pink-400/30 rounded-full w-24 h-24 blur-2xl animate-ping"></div>

      {/* Main content */}
      <div className="relative max-w-4xl mx-auto space-y-10 z-10">
        <h1 className="text-5xl font-extrabold flex items-center gap-3 text-white drop-shadow-2xl">
          <Search size={40} /> Advanced Search
        </h1>

        {/* Search Box */}
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="What do you want to find?"
            className="flex-1 px-5 py-4 rounded-xl shadow-xl focus:outline-none focus:ring-4 focus:ring-yellow-300 text-gray-800"
          />
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-4 rounded-xl font-bold shadow-xl transition hover:scale-105 animate-bounce">
            Search
          </button>
        </div>

        {/* Featured Results with glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {[1,2,3,4].map((item) => (
            <div
              key={item}
              className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 hover:scale-105 hover:shadow-2xl transition transform duration-300"
            >
              <h2 className="font-bold text-2xl text-white flex items-center gap-2">
                <Sparkles size={24} className="text-yellow-300" /> Result {item}
              </h2>
              <p className="text-white/80 mt-2 text-sm">
                This is an advanced description for search result number {item}. It uses glassmorphism and smooth animations.
              </p>
              <button className="mt-4 px-4 py-2 rounded bg-yellow-400 text-gray-900 hover:bg-yellow-500 transition font-semibold">
                View More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
