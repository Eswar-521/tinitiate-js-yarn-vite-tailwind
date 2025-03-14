import { Link } from "react-router-dom";

const LeftSidebar = () => {
  return (
    <aside className="w-60 bg-gray-800 text-white h-screen p-4">
      <nav className="flex flex-col space-y-4">
        <Link to="/" className="text-lg hover:text-blue-400">🏠 Home</Link>
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
