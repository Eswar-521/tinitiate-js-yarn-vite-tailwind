import { Link } from "react-router-dom";
import { useState } from "react";

const LeftSidebar = () => {
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);

  return (
    <aside className="w-60 bg-gray-800 text-white h-screen p-4">
      <nav className="flex flex-col space-y-4">
        {/* Home Dropdown */}
        <div>
          <button
            onClick={() => setIsHomeDropdownOpen(!isHomeDropdownOpen)}
            className="text-lg w-full text-left flex items-center justify-between hover:text-blue-400"
          >
            🏠 Home
            <span>{isHomeDropdownOpen ? "▲" : "▼"}</span>
          </button>
          {isHomeDropdownOpen && (
            <div className="mt-2 ml-4 flex flex-col space-y-2">
              <Link to="/" className="hover:text-blue-300">🏡 Home</Link>
              <Link to="/home2" className="hover:text-blue-300">🏠 Home 2</Link>
              <Link to="/home3" className="hover:text-blue-300">🚀 Home 3</Link>
            </div>
          )}
        </div>

        <Link to="/about" className="text-lg hover:text-blue-400">ℹ️ About</Link>
        <Link to="/services" className="text-lg hover:text-blue-400">🔧 Services</Link>
        <Link to="/profile" className="text-lg hover:text-blue-400">👤 Profile</Link>
        <Link to="/contact" className="text-lg hover:text-blue-400">📞 Contact</Link>

        {/* Login & Signup Section */}
        <hr className="border-gray-600 my-4" />
        <Link to="/login" className="text-lg hover:text-green-400">🔑 Login</Link>
        <Link to="/signup" className="text-lg hover:text-purple-400">📝 Signup</Link>
      </nav>
    </aside>
  );
};

export default LeftSidebar;
