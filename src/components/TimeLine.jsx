const achievements = [
  { year: "2020", event: "🚀 Company Launched" },
  { year: "2021", event: "🌐 Global Expansion" },
  { year: "2022", event: "💼 100+ Projects Completed" },
  { year: "2023", event: "🏆 Industry Award Won" },
];

const Timeline = () => (
  <div className="relative border-l border-gray-600 ml-4 mt-12 pl-6">
    {achievements.map((item, idx) => (
      <div key={idx} className="mb-10 relative" data-aos="fade-left">
        <div className="absolute w-4 h-4 bg-green-500 rounded-full -left-2.5 top-1.5"></div>
        <h4 className="text-xl font-bold">{item.year}</h4>
        <p className="text-gray-400">{item.event}</p>
      </div>
    ))}
  </div>
);

export default Timeline;
