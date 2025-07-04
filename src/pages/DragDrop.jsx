import { MousePointerClick } from "lucide-react";

const DragDropPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-700 via-blue-700 to-indigo-700 p-8 text-white">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-5xl font-extrabold flex items-center gap-3">
          <MousePointerClick size={40} /> Drag & Drop
        </h1>
        <div className="bg-white/20 backdrop-blur p-6 rounded-xl border border-white/30 shadow-xl">
          <h2 className="text-2xl font-bold mb-4">Drag files here</h2>
          <div
            className="border-4 border-dashed border-white/50 rounded-xl h-40 flex items-center justify-center text-xl font-bold"
            draggable="true"
          >
            Drop Zone
          </div>
        </div>
      </div>
    </div>
  );
};

export default DragDropPage;
