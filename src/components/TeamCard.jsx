const TeamCard = ({ name, role, img, desc }) => (
  <div
    className="bg-gray-800 p-6 rounded-xl shadow-xl hover:scale-105 hover:rotate-1 transform transition duration-300 border border-gray-700"
  >
    <div className="text-center">
      <img
        src={img}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"
      />
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-gray-400">{role}</p>
      <p className="mt-2 text-sm text-gray-300">{desc}</p>
    </div>
  </div>
);

export default TeamCard;
