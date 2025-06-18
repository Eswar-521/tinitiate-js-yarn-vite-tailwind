import React from "react";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

const Contact = () => {
  const containerStyle = {
    minHeight: "100vh",
    background: "linear-gradient(to right, #4facfe, #00f2fe)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
    animation: "fadeIn 1s ease-in-out",
  };

  const cardStyle = {
    background: "#fff",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    padding: "2rem",
    maxWidth: "500px",
    width: "100%",
    textAlign: "center",
    animation: "slideUp 0.8s ease-out",
  };

  const titleStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: "1rem",
  };

  const descStyle = {
    color: "#374151",
    marginBottom: "2rem",
  };

  const detailStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: "1rem",
    color: "#1e40af",
    fontSize: "1rem",
    fontWeight: "500",
  };

  const iconStyle = {
    marginRight: "10px",
    color: "#2563eb",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={titleStyle}>Contact Us</h2>
        <p style={descStyle}>
          We'd love to hear from you! Reach out to us through the channels below.
        </p>

        <div style={detailStyle}>
          <Mail size={20} style={iconStyle} />
          <span>contact@tinitiate.com</span>
        </div>
        <div style={detailStyle}>
          <Phone size={20} style={iconStyle} />
          <span>+91 9876543210</span>
        </div>
        <div style={detailStyle}>
          <MapPin size={20} style={iconStyle} />
          <span>Hyderabad, Telangana</span>
        </div>
        <div style={detailStyle}>
          <MessageSquare size={20} style={iconStyle} />
          <span>Mon - Fri, 10:00AM - 6:00PM</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
