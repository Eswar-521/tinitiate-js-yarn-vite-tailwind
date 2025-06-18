import React from "react";
import { Rocket, BookOpen, ShieldCheck, Users, Smile } from "lucide-react";

const About = () => {
  const sectionStyle = {
    padding: "3rem 1rem",
    color: "#fff",
    textAlign: "center",
  };

  const cardStyle = {
    background: "rgba(255,255,255,0.1)",
    borderRadius: "12px",
    padding: "1.5rem",
    margin: "1rem",
    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
    transition: "transform 0.3s",
  };

  const featureItems = [
    {
      title: "Fast Learning",
      desc: "Learn cutting-edge tech faster than ever.",
      icon: <Rocket size={28} color="#10b981" />,
    },
    {
      title: "Modern Stack",
      desc: "Work with React, Node.js, and more.",
      icon: <BookOpen size={28} color="#8b5cf6" />,
    },
    {
      title: "Security Focused",
      desc: "Your data is always safe and private.",
      icon: <ShieldCheck size={28} color="#f59e0b" />,
    },
    {
      title: "Collaborative",
      desc: "Join a large community of learners.",
      icon: <Users size={28} color="#3b82f6" />,
    },
  ];

  return (
    <div
      style={{
        background: "linear-gradient(to right, #667eea, #764ba2)",
        minHeight: "100vh",
        animation: "fadeIn 1s ease-in-out",
      }}
    >
      {/* Hero Section */}
      <div style={{ ...sectionStyle, paddingTop: "4rem" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
          About <span style={{ color: "#ffd700" }}>Tinitiate</span>
        </h1>
        <p style={{ fontSize: "1rem", marginTop: "0.5rem", color: "#e0e0e0" }}>
          Empowering developers through guided learning, real-world projects, and community support.
        </p>
      </div>

      {/* Features Section */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          ...sectionStyle,
        }}
      >
        {featureItems.map((item, i) => (
          <div
            key={i}
            style={cardStyle}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div style={{ marginBottom: "1rem" }}>{item.icon}</div>
            <h2 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>{item.title}</h2>
            <p style={{ fontSize: "0.9rem", color: "#ddd" }}>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Mission Section */}
      <div style={{ ...sectionStyle, background: "rgba(255,255,255,0.05)" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: "bold" }}>Our Mission</h2>
        <p style={{ maxWidth: "600px", margin: "auto", fontSize: "1rem", color: "#ddd" }}>
          At Tinitiate, we aim to create a developer-first learning ecosystem where education is
          interactive, project-based, and constantly evolving.
        </p>
      </div>

      {/* Footer/Join Us */}
      <div style={{ ...sectionStyle, paddingBottom: "4rem" }}>
        <Smile size={32} color="#f472b6" />
        <h3 style={{ marginTop: "1rem", fontSize: "1.2rem" }}>Join us and build your future!</h3>
        <p style={{ fontSize: "0.9rem", color: "#ccc" }}>Explore. Learn. Collaborate.</p>
      </div>
    </div>
  );
};

export default About;
