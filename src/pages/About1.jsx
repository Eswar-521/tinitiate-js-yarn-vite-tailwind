import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCode, FaPaintBrush, FaCogs } from "react-icons/fa";
import TeamCard from "../components/TeamCard";
import Timeline from "../components/Timeline";
import TestimonialCarousel from "../components/TestimonialCarousel";
import TeamTabs from "../components/TeamTabs";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const team = [
  {
    name: "Alice",
    role: "Frontend Developer",
    img: "https://i.pravatar.cc/150?img=10",
    desc: "Crafts interactive UIs with a focus on animation and accessibility.",
  },
  {
    name: "Bob",
    role: "Backend Architect",
    img: "https://i.pravatar.cc/150?img=12",
    desc: "Builds secure and scalable backend APIs for cloud platforms.",
  },
  {
    name: "Eve",
    role: "UI/UX Designer",
    img: "https://i.pravatar.cc/150?img=14",
    desc: "Designs aesthetic and functional interfaces for all devices.",
  },
];

const About1 = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white px-4 md:px-12 py-12 overflow-hidden">
      {/* Particles Background */}
      <Particles
        className="fixed top-0 left-0 w-full h-full z-0"
        init={async (main) => await loadFull(main)}
        options={{
          fullScreen: false,
          background: { color: { value: "#000000" } },
          particles: {
            number: { value: 60 },
            size: { value: 2 },
            move: { enable: true, speed: 1 },
            links: { enable: true, distance: 150, color: "#ffffff" },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
            },
          },
        }}
      />

      {/* Header */}
      <div className="relative z-10 text-center mb-16" data-aos="fade-down">
        <h1 className="text-5xl font-bold mb-4 tracking-tight">
          🚀 Meet Our Creative Team
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg backdrop-blur-sm bg-white/5 px-6 py-3 rounded-lg shadow-md">
          Behind every product is a group of passionate people crafting digital experiences that impact lives.
        </p>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-8 relative z-10 mb-16">
        {[
          {
            icon: <FaCode className="text-3xl text-blue-400" />,
            title: "Code Excellence",
            desc: "Clean, maintainable, and scalable codebases across all projects.",
          },
          {
            icon: <FaPaintBrush className="text-3xl text-pink-400" />,
            title: "Design Magic",
            desc: "Beautiful UI/UX that connects emotionally with users.",
          },
          {
            icon: <FaCogs className="text-3xl text-green-400" />,
            title: "System Thinking",
            desc: "Architecture built with efficiency, security, and future in mind.",
          },
        ].map((f, i) => (
          <div
            key={i}
            className="backdrop-blur-xl bg-white/10 border border-gray-700 rounded-2xl p-6 shadow-lg hover:scale-105 hover:rotate-1 transform transition-all duration-300"
            data-aos="zoom-in-up"
            data-aos-delay={i * 150}
          >
            <div className="mb-4">{f.icon}</div>
            <h3 className="text-xl font-bold mb-2">{f.title}</h3>
            <p className="text-gray-300">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* Team Members */}
      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-center mb-10" data-aos="fade-up">
          💼 Who We Are
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {team.map((member, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <TeamCard {...member} />
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="relative z-10 mt-20">
        <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">
          🕒 Our Journey
        </h2>
        <Timeline />
      </div>

      {/* Tabs */}
      <div className="relative z-10 mt-20">
        <TeamTabs />
      </div>

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* CTA */}
      <div className="text-center mt-20 relative z-10" data-aos="fade-up">
        <a
          href="/contact"
          className="inline-block px-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-bold rounded-full shadow-lg transform hover:scale-105 transition-all"
        >
          ✉️ Connect with Us
        </a>
      </div>
    </div>
  );
};

export default About1;