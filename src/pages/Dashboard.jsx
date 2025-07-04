import { LayoutDashboard } from "lucide-react";

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-violet-700 p-8 text-white">
      <div className="max-w-5xl mx-auto space-y-8">
        <h1 className="text-5xl font-extrabold flex items-center gap-3">
          <LayoutDashboard size={40} /> Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white/20 backdrop-blur p-6 rounded-xl border border-white/30 shadow-xl hover:scale-105 transition"
            >
              <h2 className="text-xl font-bold mb-2">Widget {item}</h2>
              <p className="text-sm text-white/80">Metric data for Widget {item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
