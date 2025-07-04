import { Shield } from "lucide-react";

const SecurityPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-700 via-slate-700 to-neutral-800 p-8 text-white">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-5xl font-extrabold flex items-center gap-3">
          <Shield size={40} /> Security
        </h1>
        <div className="bg-white/20 backdrop-blur border border-white/30 rounded-xl p-6 shadow-xl">
          <h2 className="text-xl font-bold mb-2">Security Status</h2>
          <p className="text-white/80">
            All systems are secured. No vulnerabilities detected.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;
