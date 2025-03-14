import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">My Website</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/" className="flex items-center"><FaHome className="mr-2" /> Home</Link></li>
          <li><Link to="/about" className="flex items-center"><FaInfoCircle className="mr-2" /> About</Link></li>
          <li><Link to="/profile" className="flex items-center"><FaUser className="mr-2" /> Profile</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
