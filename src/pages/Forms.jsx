import { FileText } from "lucide-react";

const FormsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-700 via-indigo-700 to-blue-700 p-8 text-white">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-5xl font-extrabold flex items-center gap-3">
          <FileText size={40} /> Forms
        </h1>
        <form className="bg-white/20 backdrop-blur p-6 rounded-xl shadow-xl space-y-4 border border-white/30">
          <div>
            <label className="block mb-1 font-semibold">Name</label>
            <input className="w-full px-4 py-2 rounded text-gray-800" placeholder="Your name" />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input className="w-full px-4 py-2 rounded text-gray-800" placeholder="email@example.com" />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Message</label>
            <textarea className="w-full px-4 py-2 rounded text-gray-800" rows="4" placeholder="Write something..."></textarea>
          </div>
          <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded font-semibold text-gray-900">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormsPage;
