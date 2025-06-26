import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaRocket, FaGlobe, FaPuzzlePiece } from "react-icons/fa";
import CountUp from "react-countup";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const features = [
  {
    icon: <FaRocket className="text-3xl text-blue-400" />,
    title: "Next-Gen Speed",
    desc: "Lightning-fast performance with global CDN and optimized architecture.",
  },
  {
    icon: <FaShieldAlt className="text-3xl text-red-400" />,
    title: "Enterprise Security",
    desc: "Zero-trust policies, encryption at rest, and constant vulnerability scans.",
  },
  {
    icon: <FaGlobe className="text-3xl text-green-400" />,
    title: "Worldwide Presence",
    desc: "Supported in 50+ languages and used by millions worldwide.",
  },
  {
    icon: <FaPuzzlePiece className="text-3xl text-yellow-400" />,
    title: "Modular Ecosystem",
    desc: "Plug and play with third-party tools and our extensive API suite.",
  },
];

const About2 = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6 py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-purple-500 via-black to-transparent z-0"></div>

      <motion.div
        className="relative z-10 text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold">✨ Discover What Makes Us Different</h1>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg">
          We are redefining innovation with technology, trust, and transformative tools.
        </p>
      </motion.div>

      <div className="md:hidden block relative z-10">
        <Slider {...sliderSettings}>
          {features.map((f, idx) => (
            <div key={idx} className="px-4">
              <motion.div
                className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-lg shadow-xl hover:scale-105 transform transition duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="mb-4">{f.icon}</div>
                <h3 className="text-2xl font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="hidden md:grid md:grid-cols-2 gap-10 relative z-10">
        {features.map((f, idx) => (
          <motion.div
            key={idx}
            className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-lg shadow-xl hover:scale-105 transform transition duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <div className="mb-4">{f.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center mt-20 relative z-10"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <a
          href="/services"
          className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-semibold shadow-lg transition transform hover:scale-105 duration-300"
        >
          🌟 Explore Our Services
        </a>
      </motion.div>

      {/* Scroll-Animated Stats Section */}
      <motion.div
        className="mt-24 text-center max-w-2xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4">📊 Impact in Numbers</h2>
        <p className="text-gray-300 text-lg space-x-4">
          <span><CountUp end={1000000} duration={3} separator="," />+ users</span>
          <span>|</span>
          <span><CountUp end={99.99} duration={3} decimals={2} />% uptime</span>
          <span>|</span>
          <span><CountUp end={120} duration={3} />+ countries</span>
        </p>
      </motion.div>
    </div>
  );
};

export default About2;

