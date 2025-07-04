import { Film } from "lucide-react";

const AnimationPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-700 via-green-700 to-teal-700 p-8 text-white">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-5xl font-extrabold flex items-center gap-3">
          <Film size={40} /> Animation
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white/20 backdrop-blur p-6 rounded-xl border border-white/30 shadow-xl hover:scale-105 transition"
            >
              <h2 className="text-xl font-bold mb-2">Animation {item}</h2>
              <div className="w-full h-32 bg-gradient-to-r from-pink-500 to-yellow-500 animate-pulse rounded"></div>
              <p className="text-sm mt-3 text-white/80">A simple animated placeholder for visual demo.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimationPage;
