import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUserCircle, FaBell, FaEnvelope, FaHeart, FaUsers, FaBuilding, FaStar, FaLinkedin, FaGithub, FaTwitter, FaComments, FaCalendarAlt, FaChartLine } from "react-icons/fa";
import { Dialog, Tab } from "@headlessui/react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const teamMembers = [
  {
    name: "Anika Rao",
    role: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    linkedin: "#",
    github: "#",
    twitter: "#",
  },
  {
    name: "Ravi Kumar",
    role: "Backend Engineer",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    linkedin: "#",
    github: "#",
    twitter: "#",
  },
  {
    name: "John Smith",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    linkedin: "#",
    github: "#",
    twitter: "#",
  },
];

const floatingIconAnim = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-sky-900 via-indigo-950 to-blue-950 text-white overflow-hidden px-6 py-20">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={loadFull}
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 60 },
            size: { value: 3 },
            move: { enable: true, speed: 0.5 },
            opacity: { value: 0.5 },
            links: { enable: true, color: "#00f0ff", distance: 120 },
            color: { value: "#ffffff" },
          },
        }}
        className="absolute inset-0 z-0"
      />

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div {...floatingIconAnim} className="absolute left-10 top-40 text-4xl text-pink-300">
          <FaHeart />
        </motion.div>
        <motion.div {...floatingIconAnim} className="absolute right-10 top-28 text-4xl text-yellow-300">
          <FaEnvelope />
        </motion.div>
        <motion.div {...floatingIconAnim} className="absolute left-1/2 bottom-28 text-4xl text-teal-300">
          <FaBell />
        </motion.div>
        <motion.div {...floatingIconAnim} className="absolute right-1/3 bottom-40 text-4xl text-purple-300">
          <FaUsers />
        </motion.div>
        <motion.div {...floatingIconAnim} className="absolute left-1/4 top-20 text-4xl text-sky-400">
          <FaBuilding />
        </motion.div>
        <motion.div {...floatingIconAnim} className="absolute left-4 top-4 text-3xl text-orange-300">
          <FaComments />
        </motion.div>
        <motion.div {...floatingIconAnim} className="absolute right-4 top-8 text-3xl text-green-300">
          <FaCalendarAlt />
        </motion.div>
        <motion.div {...floatingIconAnim} className="absolute left-1/2 top-16 text-3xl text-pink-400">
          <FaChartLine />
        </motion.div>
      </div>

      {/* Profile Avatar */}
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <button
          onClick={() => setIsOpen(true)}
          className="mx-auto bg-white/10 p-6 rounded-full border-4 border-white/20 hover:scale-105 transition-all"
        >
          <FaUserCircle className="text-7xl text-white" />
        </button>
        <h1 className="mt-4 text-4xl font-bold">👤 My Profile</h1>
        <p className="text-blue-100 mt-2">Tap avatar for more info</p>
      </motion.div>

      {/* Tabs for Team */}
      <div className="mt-20 max-w-4xl mx-auto z-10 relative">
        <Tab.Group>
          <Tab.List className="flex justify-center space-x-4">
            {teamMembers.map((member, idx) => (
              <Tab key={idx} className={({ selected }) => `px-4 py-2 rounded-full text-sm font-semibold transition ${selected ? 'bg-white text-black' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                {member.name}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-8">
            {teamMembers.map((member, idx) => (
              <Tab.Panel key={idx}>
                <motion.div
                  className="text-center bg-white/5 p-6 rounded-xl border border-white/10 hover:shadow-2xl transition hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-white" />
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-blue-200 mb-2">{member.role}</p>
                  <div className="flex justify-center space-x-4 mt-2">
                    <a href={member.linkedin}><FaLinkedin className="text-2xl text-blue-400 hover:scale-110" /></a>
                    <a href={member.github}><FaGithub className="text-2xl text-gray-300 hover:scale-110" /></a>
                    <a href={member.twitter}><FaTwitter className="text-2xl text-sky-400 hover:scale-110" /></a>
                  </div>
                </motion.div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>

      {/* Company Info */}
      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-4">🏢 About Our Company</h2>
        <p className="text-blue-100 max-w-xl mx-auto">
          We are a creative digital agency focused on innovation, quality and performance. Trusted by clients globally, we aim to deliver scalable and impactful products.
        </p>
      </motion.div>

      {/* Thread & Bell */}
      <div className="absolute top-0 right-6 flex flex-col items-center z-10">
        <div className="h-24 w-1 bg-white/20 animate-pulse"></div>
        <FaBell className="text-4xl text-yellow-400 animate-bounce mb-4" />
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="bg-white text-black rounded-xl p-8 w-full max-w-md shadow-2xl"
              >
                <Dialog.Panel>
                  <Dialog.Title className="text-2xl font-bold mb-4">👤 Profile Details</Dialog.Title>
                  <p><strong>Name:</strong> Eswar Dev</p>
                  <p><strong>Email:</strong> eswar@example.com</p>
                  <p><strong>Role:</strong> Frontend Developer</p>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                  >
                    Close
                  </button>
                </Dialog.Panel>
              </motion.div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Profile;