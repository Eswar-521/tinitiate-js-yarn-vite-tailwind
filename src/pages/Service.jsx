import { useState } from "react";

const servicesList = [
  { id: 1, name: "Web Development", description: "Building modern websites and web apps." },
  { id: 2, name: "Mobile App Development", description: "Creating iOS and Android applications." },
  { id: 3, name: "SEO Optimization", description: "Improving search engine rankings." },
  { id: 4, name: "Graphic Design", description: "Designing logos, banners, and more." },
  { id: 5, name: "Cybersecurity", description: "Protecting businesses from cyber threats." }
];

const Services = () => {
  const [query, setQuery] = useState("");
  const [filteredServices, setFilteredServices] = useState(servicesList);

  const handleSearch = () => {
    const filtered = servicesList.filter(
      (service) =>
        service.name.toLowerCase().includes(query.toLowerCase()) ||
        service.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredServices(filtered);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Our Services</h2>

      {/* Search Input & Button */}
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Search for services..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          className="p-2 border rounded-md flex-grow text-black"
        />
        <button
          onClick={handleSearch}
          className="ml-2 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
        >
          Search
        </button>
      </div>

      {/* Service Listing */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <div key={service.id} className="p-4 border rounded-lg shadow-md">
              <h2 className="text-lg font-semibold">{service.name}</h2>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))
        ) : (
          <p className="text-red-500">No services found.</p>
        )}
      </div>
    </div>
  );
};

export default Services;
