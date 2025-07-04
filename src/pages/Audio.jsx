import { Music } from "lucide-react";

const AudioPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-600 via-orange-600 to-red-600 p-8 text-white">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-5xl font-extrabold flex items-center gap-3">
          <Music size={40} /> Audio
        </h1>
        <div className="bg-white/20 backdrop-blur p-6 rounded-xl border border-white/30 shadow-xl">
          <h2 className="text-2xl font-bold mb-2">Audio Player</h2>
          <audio
            controls
            className="w-full mt-4 rounded shadow-inner bg-gray-200 text-black"
          >
            <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>
  );
};

export default AudioPage;
