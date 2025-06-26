const FeatureCard = ({ icon, title, desc }) => (
  <div
    className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:scale-105 hover:shadow-2xl transform transition duration-300"
  >
    <h3 className="text-2xl font-semibold mb-2">{icon} {title}</h3>
    <p className="text-gray-400">{desc}</p>
  </div>
);

export default FeatureCard;
