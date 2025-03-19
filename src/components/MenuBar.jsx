import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const MenuBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!query.trim()) return;

    // Convert input to lowercase for case-insensitive search**********************
    const searchQuery = query.toLowerCase();

    // Define search mappings (what should be searched)****************************
    const routes = {
      home: "/",
      services: "/services",
      contact: "/contact",
      profile: "/profile",
      catalog: "/catalog",
      about: "/about",
      login: "/login",
      signup: "/signup",
    };

    // Find matching route
    const matchedRoute = Object.keys(routes).find((key) =>
      searchQuery.includes(key)
    );

    // Navigate to the matched page or show an alert
    if (matchedRoute) {
      navigate(routes[matchedRoute]);
    } else {
      alert("No matching page found.");
    }
  };

  // Trigger search when Enter is pressed
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
      {/* Navigation Links */}
      <nav>
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/services" className="mr-4">Services</Link>
        <Link to="/contact" className="mr-4">Contact</Link>
        <Link to="/profile" className="mr-4">Profile</Link>
        <Link to="/catalog" className="mr-4">Catalog</Link>
      </nav>

      {/* Global Search Input & Button */}
      <div className="flex">
        <input
          type="text"
          placeholder="Search for pages..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          className="p-2 rounded-md text-black"
        />
        <button
          onClick={handleSearch}
          className="ml-2 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default MenuBar;
