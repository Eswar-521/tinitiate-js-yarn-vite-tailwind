import { CalendarDays } from "lucide-react";

const CalendarPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-700 via-green-700 to-emerald-700 p-8 text-white">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-5xl font-extrabold flex items-center gap-3">
          <CalendarDays size={40} /> Calendar
        </h1>
        <div className="bg-white/20 backdrop-blur border border-white/30 rounded-xl p-6 shadow-xl">
          <p className="text-white/80 mb-4">Upcoming Events:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>10 July: Project Deadline</li>
            <li>15 July: Team Meeting</li>
            <li>20 July: Code Review</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
