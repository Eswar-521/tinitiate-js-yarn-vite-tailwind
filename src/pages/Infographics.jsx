import { PieChart } from "lucide-react";

const InfographicsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-700 via-pink-700 to-fuchsia-700 p-8 text-white">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-5xl font-extrabold flex items-center gap-3">
          <PieChart size={40} /> Infographics
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-white/20 backdrop-blur p-6 rounded-xl border border-white/30 shadow-xl hover:scale-105 transition"
            >
              <h2 className="text-xl font-bold mb-2">Chart {item}</h2>
              <p className="text-white/80 text-sm">
                Visualization of data with creative graphics for point {item}.
              </p>
              <button className="mt-4 px-4 py-2 bg-yellow-400 text-gray-900 rounded hover:bg-yellow-500 transition">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfographicsPage;
