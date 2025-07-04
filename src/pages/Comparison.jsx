import { BarChart2 } from "lucide-react";

const ComparisonPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-600 via-sky-600 to-indigo-700 p-8">
      <div className="max-w-4xl mx-auto space-y-8 text-white">
        <h1 className="text-5xl font-extrabold flex items-center gap-3">
          <BarChart2 size={40} /> Comparison
        </h1>
        <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-xl hover:scale-105 transition">
          <h2 className="text-2xl font-bold mb-2">Feature Comparison</h2>
          <ul className="list-disc pl-5 space-y-2 text-white/80">
            <li>🔹 Option A vs Option B</li>
            <li>🔹 Speed, performance, cost breakdown</li>
            <li>🔹 User reviews</li>
            <li>🔹 Market trends</li>
          </ul>
          <button className="mt-4 px-4 py-2 bg-yellow-400 text-gray-900 rounded hover:bg-yellow-500 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComparisonPage;
