import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const LeftSidebar = () => {
  const location = useLocation();
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);

  const linkClasses = (path) =>
    `block px-4 py-2 rounded hover:bg-gray-700 ${
      location.pathname === path ? "bg-gray-700" : ""
    }`;

  return (
    <aside className="w-64 bg-gray-900 text-white h-screen overflow-y-auto p-4 space-y-2">
      <h2 className="text-xl font-bold mb-4">📌 Navigation</h2>

      {/* Home Dropdown */}
      <div>
        <button
          onClick={() => setIsHomeDropdownOpen(!isHomeDropdownOpen)}
          className="w-full text-left flex justify-between items-center hover:text-blue-400"
        >
          🏠 Home
          <span>{isHomeDropdownOpen ? "▲" : "▼"}</span>
        </button>
        {isHomeDropdownOpen && (
          <div className="ml-4 mt-1 space-y-1">
            <Link to="/" className={linkClasses("/")}>🏡 Home</Link>
            <Link to="/home2" className={linkClasses("/home2")}>🏠 Home 2</Link>
            <Link to="/home3" className={linkClasses("/home3")}>🚀 Home 3</Link>
          </div>
        )}
      </div>


       <Link to="/profile" className={linkClasses("/profile")}>👤 Profile</Link>
       <Link to="/login" className={linkClasses("/login")}>🔑 Login</Link>
       <Link to="/signup" className={linkClasses("/signup")}>📝 Signup</Link>

       <Link to="/catalog" className={linkClasses("/catalog")}>📊 Catalog</Link>
         
         
     {/* Services Dropdown */}
      <div>
        <button
          onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
          className="w-full text-left flex justify-between items-center hover:text-blue-400"
        >
          🔧 Services
          <span>{isServiceDropdownOpen ? "▲" : "▼"}</span>
        </button>
        {isServiceDropdownOpen && (
          <div className="ml-4 mt-1 space-y-1">
            <Link to="/service" className={linkClasses("/service")}>🔧 Services</Link>
            <Link to="/service1" className={linkClasses("/service1")}>🛠️ Service 1</Link>
            <Link to="/service2" className={linkClasses("/service2")}>⚙️ Service 2</Link>
          </div>
        )}
      </div>


      <Link to="/search" className={linkClasses("/search")}>🔍 Search</Link>
      <Link to="/comparison" className={linkClasses("/comparison")}>📊 Comparison</Link>
      <Link to="/comparisontable" className={linkClasses("/comparisontable")}>📑 Comparison Table</Link>
      <Link to="/forms" className={linkClasses("/forms")}>📝 Forms</Link>
      <Link to="/datatable" className={linkClasses("/datatable")}>📋 Data Tables</Link>
      <Link to="/infographics" className={linkClasses("/infographics")}>📈 Infographics</Link>
      <Link to="/audio" className={linkClasses("/audio")}>🎵 Audio</Link>
      <Link to="/video" className={linkClasses("/video")}>🎬 Video</Link>
      <Link to="/animation" className={linkClasses("/animation")}>🎞️ Animation</Link>
      <Link to="/dragdrop" className={linkClasses("/dragdrop")}>🖱️ Drag & Drop</Link>
      <Link to="/editor" className={linkClasses("/editor")}>✏️ Online Editor</Link>
      <Link to="/shoppingcart" className={linkClasses("/shoppingcart")}>🛒 Shopping Cart</Link>
      <Link to="/calendar" className={linkClasses("/calendar")}>📅 Calendar</Link>
      <Link to="/dashboard" className={linkClasses("/dashboard")}>📊 Dashboard</Link>
      <Link to="/analytics" className={linkClasses("/analytics")}>📈 Analytics</Link>
      <Link to="/security" className={linkClasses("/security")}>🔒 Security</Link>

      {/* About Dropdown */}
      <div>
        <button
          onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
          className="w-full text-left flex justify-between items-center hover:text-blue-400"
        >
          ℹ️ About
          <span>{isAboutDropdownOpen ? "▲" : "▼"}</span>
        </button>
        {isAboutDropdownOpen && (
          <div className="ml-4 mt-1 space-y-1">
            <Link to="/about" className={linkClasses("/about")}>ℹ️ About</Link>
            <Link to="/about1" className={linkClasses("/about1")}>📘 About 1</Link>
            <Link to="/about2" className={linkClasses("/about2")}>📗 About 2</Link>
          </div>
        )}
      </div>

      <Link to="/contact" className={linkClasses("/contact")}>📞 Contact</Link>
      <Link to="/help" className={linkClasses("/help")}>❓ Help</Link>

    </aside>
  );
};

export default LeftSidebar;
