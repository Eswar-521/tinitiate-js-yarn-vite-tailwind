import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MenuBar from "./components/MenuBar";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Home3 from "./pages/Home3";
import About from "./pages/About";
import About1 from "./pages/About1";
import About2 from "./pages/About2";
import Service from "./pages/Service";
import Service1 from "./pages/Service1";
import Service2 from "./pages/Service2";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Catalog from "./pages/Catalog";

import Search from "./pages/Search";
import Comparison from "./pages/Comparison";
import ComparisonTable from "./pages/ComparisonTable";
import Forms from "./pages/Forms";
import DataTable from "./pages/DataTable";
import Infographics from "./pages/Infographics";
import Audio from "./pages/Audio";
import Video from "./pages/Video";
import Animation from "./pages/Animation";
import DragDrop from "./pages/DragDrop";
import Editor from "./pages/Editor";
import ShoppingCart from "./pages/ShoppingCart";
import Calendar from "./pages/Calendar";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Security from "./pages/Security";
import Help from "./pages/Help";


function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Router>
      <Header />
      <MenuBar onSearch={setSearchQuery} />
      <div className="flex">
        <LeftSidebar />
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home2" element={<Home2 />} />
            <Route path="/home3" element={<Home3 />} />
            <Route path="/about" element={<About />} />
            <Route path="/about1" element={<About1 />} />
            <Route path="/about2" element={<About2 />} />
            <Route path="/service" element={<Service />} />
            <Route path="/service1" element={<Service1/>}/>
            <Route path="/Service2" element={<Service2/>}/>
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/catalog" element={<Catalog searchQuery={searchQuery} />} />

            <Route path="/search" element={<Search />} />
              <Route path="/comparison" element={<Comparison />} />
              <Route path="/comparisontable" element={<ComparisonTable />} />
              <Route path="/forms" element={<Forms />} />
              <Route path="/datatable" element={<DataTable />} />
              <Route path="/infographics" element={<Infographics />} />
              <Route path="/audio" element={<Audio />} />
              <Route path="/video" element={<Video />} />
              <Route path="/animation" element={<Animation />} />
              <Route path="/dragdrop" element={<DragDrop />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/shoppingcart" element={<ShoppingCart />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/security" element={<Security />} />
              <Route path="/help" element={<Help />} />
              
          </Routes>
        </main>
        <RightSidebar />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
