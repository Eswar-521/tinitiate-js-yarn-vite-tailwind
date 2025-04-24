import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaUser } from "react-icons/fa";
import image from "../assets/image.png"; // Make sure the image path is correct

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-pink-500 via-blue-500 via-yellow-400 via-green-500 via-purple-600 via-black to-indigo-800 text-white py-4 shadow-lg relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-4">
        
        {/* Image on the far left */}
        <img
          src={image}
          alt="Logo"
          className="w-16 h-16 rounded-full object-cover border-2 border-white absolute left-0 top-1/2 transform -translate-y-1/2"
        />
        
        {/* Title + Tags on the right side */}
        <div className="flex flex-col items-start ml-24"> {/* Add ml-24 to create space for the image */}
          <h1 className="text-2xl font-bold">TINITIATE </h1>
          <div className="flex gap-2 mt-1 flex-wrap">
            <span className="bg-yellow-400 text-black font-semibold py-1 px-3 rounded">JS</span>
            <span className="bg-green-500 text-white font-semibold py-1 px-3 rounded">Yarn</span>
            <span className="bg-pink-500 text-white font-semibold py-1 px-3 rounded">Vite</span>
            <span className="bg-indigo-500 text-white font-semibold py-1 px-3 rounded">Tailwind</span>
          </div>
        </div>

        {/* Navigation on the right side */}
        <nav>
          <ul className="flex gap-6 text-base font-medium flex-wrap justify-center">
            <li>
              <Link to="/" className="flex items-center gap-2 hover:text-yellow-300 transition-colors">
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="flex items-center gap-2 hover:text-yellow-300 transition-colors">
                <FaInfoCircle /> About
              </Link>
            </li>
            <li>
              <Link to="/profile" className="flex items-center gap-2 hover:text-yellow-300 transition-colors">
                <FaUser /> Profile
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
