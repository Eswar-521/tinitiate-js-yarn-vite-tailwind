import { BarChart3 } from "lucide-react";

const AnalyticsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-700 via-cyan-700 to-teal-700 p-8 text-white">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-5xl font-extrabold flex items-center gap-3">
          <BarChart3 size={40} /> Analytics
        </h1>
        <div className="bg-white/20 backdrop-blur rounded-xl p-6 border border-white/30 shadow-xl">
          <h2 className="text-xl font-bold mb-4">Traffic Overview</h2>
          <p className="text-white/80">
            40% more traffic this month compared to last month.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
