import React from "react";
import { Camera, Mail, Phone, User, BookOpen, CheckCircle } from "lucide-react";

const Profile = () => {
  const containerStyle = {
    minHeight: "100vh",
    background: "linear-gradient(to right,rgb(234, 230, 102),rgb(245, 163, 113))",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
    animation: "fadeIn 1s ease-in-out",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "20px",
    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
    width: "100%",
    maxWidth: "450px",
    overflow: "hidden",
    textAlign: "center",
    paddingBottom: "2rem",
  };

  const bannerStyle = {
    height: "120px",
    background: "linear-gradient(to right, #4f46e5, #9333ea)",
    position: "relative",
  };

  const profileImgContainer = {
    position: "absolute",
    bottom: "-40px",
    left: "50%",
    transform: "translateX(-50%)",
  };

  const profileImgStyle = {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    border: "4px solid white",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
  };

  const iconOverlayStyle = {
    position: "absolute",
    bottom: 0,
    right: 0,
    background: "#1f2937",
    padding: "4px",
    borderRadius: "50%",
    cursor: "pointer",
  };

  const nameStyle = {
    marginTop: "3rem",
    fontSize: "1.4rem",
    fontWeight: "bold",
    color: "#111827",
  };

  const roleStyle = {
    fontSize: "0.9rem",
    color: "#6b7280",
    marginBottom: "1.5rem",
  };

  const infoItem = {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    gap: "10px",
    padding: "0.5rem 1rem",
    fontSize: "0.95rem",
    color: "#374151",
  };

  const sectionTitle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "1rem",
    fontWeight: "600",
    padding: "1rem 1rem 0.5rem",
    color: "#1f2937",
  };

  const courseItem = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#f3f4f6",
    padding: "0.75rem 1rem",
    margin: "0.3rem 1rem",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
    fontSize: "0.95rem",
    color: "#111827",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        {/* Banner */}
        <div style={bannerStyle}>
          <div style={profileImgContainer}>
            <div style={{ position: "relative" }}>
              <img
                src="https://via.placeholder.com/100"
                alt="Profile"
                style={profileImgStyle}
              />
              <label style={iconOverlayStyle}>
                <Camera size={16} color="#fff" />
                <input type="file" style={{ display: "none" }} />
              </label>
            </div>
          </div>
        </div>

        {/* Name and Role */}
        <h2 style={nameStyle}>John Doe</h2>
        <p style={roleStyle}>Full Stack Developer</p>

        {/* Contact Info */}
        <div style={infoItem}>
          <User size={18} color="#3b82f6" />
          <span>John Doe</span>
        </div>
        <div style={infoItem}>
          <Mail size={18} color="#3b82f6" />
          <span>john.doe@example.com</span>
        </div>
        <div style={infoItem}>
          <Phone size={18} color="#3b82f6" />
          <span>+91 9876543210</span>
        </div>

        {/* Courses */}
        <div style={sectionTitle}>
          <BookOpen size={20} color="#7c3aed" />
          <span>Enrolled Courses</span>
        </div>
        <div style={courseItem}>
          <span>React Development</span>
          <CheckCircle size={18} color="green" />
        </div>
        <div style={courseItem}>
          <span>Node.js Backend</span>
          <CheckCircle size={18} color="green" />
        </div>
        <div style={courseItem}>
          <span>UI/UX Design</span>
          <CheckCircle size={18} color="orange" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
