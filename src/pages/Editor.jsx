import { Pencil } from "lucide-react";

const EditorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-700 via-pink-700 to-rose-700 p-8 text-white">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-5xl font-extrabold flex items-center gap-3">
          <Pencil size={40} /> Online Editor
        </h1>
        <textarea
          placeholder="Start typing your code here..."
          className="w-full h-80 p-4 rounded-xl bg-black/50 text-white font-mono border border-white/30 shadow-inner resize"
        ></textarea>
        <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded hover:bg-yellow-500 transition shadow">
          Save
        </button>
      </div>
    </div>
  );
};

export default EditorPage;
