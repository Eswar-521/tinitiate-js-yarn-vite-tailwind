import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Cloud, Laptop, Smartphone, Rocket, Shield, Settings,
  Sparkles, Bell, Star, ArrowUp, Play, Pause, Volume2,
  ChevronDown, Lightbulb, ShieldCheck, Code, Database,
  Globe, Bot, TrendingUp, Headphones
} from "lucide-react";

const services = [
  {
    icon: <Rocket />,
    title: "Performance Engineering",
    desc: "Blazing fast apps with optimized delivery pipelines and micro-frontend architecture.",
    color: "from-orange-200 to-red-600",
    bgColor: "bg-orange-500/10",
    features: ["99.9% Uptime", "Sub-second Loading", "CDN Optimization"]
  },
  {
    icon: <Laptop />,
    title: "Custom Web Apps",
    desc: "Fully tailored web solutions using React, Next.js, and cutting-edge frameworks.",
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-500/10",
    features: ["PWA Ready", "SEO Optimized", "Cross-browser"]
  },
  {
    icon: <Smartphone />,
    title: "Mobile UX Design",
    desc: "Sleek mobile experiences with React Native and Flutter development.",
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-500/10",
    features: ["iOS & Android", "Native Performance", "App Store Ready"]
  },
  {
    icon: <Cloud />,
    title: "Cloud-Native Architecture",
    desc: "AWS, Azure, and GCP optimized microservice architectures with Kubernetes.",
    color: "from-green-500 to-teal-600",
    bgColor: "bg-green-500/10",
    features: ["Auto-scaling", "Serverless", "Multi-region"]
  },
  {
    icon: <Shield />,
    title: "Security & Compliance",
    desc: "Zero-trust architecture, penetration testing, and GDPR compliance.",
    color: "from-yellow-500 to-orange-600",
    bgColor: "bg-yellow-500/10",
    features: ["ISO 27001", "SOC 2", "OWASP Compliant"]
  },
  {
    icon: <Settings />,
    title: "AI Automation",
    desc: "Intelligent workflows, chatbots, and ML-powered business automation.",
    color: "from-indigo-500 to-purple-600",
    bgColor: "bg-indigo-500/10",
    features: ["GPT Integration", "Custom Models", "24/7 Monitoring"]
  },
];

const additionalServices = [
  { icon: <Database />, title: "Database Optimization", color: "text-emerald-400" },
  { icon: <Globe />, title: "Global CDN Setup", color: "text-blue-400" },
  { icon: <Bot />, title: "Bot Development", color: "text-purple-400" },
  { icon: <TrendingUp />, title: "Analytics Dashboard", color: "text-orange-400" },
  { icon: <Headphones />, title: "24/7 Support", color: "text-pink-400" },
  { icon: <Lightbulb />, title: "Innovation Lab", color: "text-yellow-400" },
];

const AdvancedServicesPage = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [currentStat, setCurrentStat] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, 50]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0.8]);

  const stats = [
    { number: "500+", label: "Projects Delivered", icon: <Rocket /> },
    { number: "99.9%", label: "Uptime Guarantee", icon: <ShieldCheck /> },
    { number: "50+", label: "Expert Developers", icon: <Code /> },
    { number: "24/7", label: "Support Available", icon: <Headphones /> },
  ];

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const playNotificationSound = () => {
    if (soundEnabled) {
      console.log("🔔 Bell notification sound played!");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    playNotificationSound();
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-slate-950 via-gray-900 to-black text-white relative">
      {/* Animated Backgrounds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] max-w-[600px] max-h-[600px] bg-cyan-500/5 rounded-full blur-3xl"
        />
      </div>

      {/* Notification Bell */}
      <motion.div className="fixed top-6 right-6 z-50 animate-pulse">
        <motion.button
          onClick={playNotificationSound}
          className="bg-gradient-to-r from-yellow-500 to-orange-500 p-3 rounded-full shadow-lg hover:shadow-xl"
        >
          <Bell className="text-white text-xl" />
        </motion.button>
      </motion.div>

      {/* Sound Toggle */}
      <button
        onClick={() => setSoundEnabled(!soundEnabled)}
        className="fixed top-6 right-20 z-50 bg-gray-800/50 backdrop-blur-sm p-3 rounded-full border border-gray-600/30"
      >
        <Volume2 className={`text-lg ${soundEnabled ? 'text-green-400' : 'text-gray-500'}`} />
      </button>

      {/* Hero */}
      <motion.div style={{ opacity }} className="relative z-10 pt-20 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <Sparkles className="text-2xl text-cyan-400" />
            <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
              Elite Services
            </h1>
            <Sparkles className="text-2xl text-purple-400" />
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto px-4">
            Next-generation development solutions powered by AI and cloud-native architecture.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div className="mt-12 flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStat}
              className="bg-gray-900/40 p-4 rounded-2xl min-w-[250px] text-center border border-gray-700"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <div className="text-cyan-400 text-2xl mb-2">{stats[currentStat].icon}</div>
              <div className="text-2xl font-bold text-white">{stats[currentStat].number}</div>
              <div className="text-gray-400 text-sm">{stats[currentStat].label}</div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Service Cards */}
      <div className="relative z-10 px-4 md:px-6 pb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              onHoverStart={() => setHoveredCard(idx)}
              onHoverEnd={() => setHoveredCard(null)}
              className={`relative bg-gradient-to-br ${service.bgColor} p-6 rounded-3xl border border-gray-600/20 transition-all duration-500`}
              whileHover={{ scale: 1.03 }}
            >
              <div className={`text-4xl mb-4 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{service.desc}</p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, fidx) => (
                  <span key={fidx} className="px-3 py-1 bg-gray-700/40 text-xs text-cyan-300 rounded-full border border-cyan-500/20">
                    <Star className="inline mr-1 text-xs" />
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Additional Services */}
      <div className="relative z-10 px-4 mb-20">
        <h3 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          Additional Expertise
        </h3>
        <motion.div
          className="flex gap-4 min-w-full overflow-x-hidden"
          animate={{ x: [-100, -1500] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          {[...additionalServices, ...additionalServices].map((service, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 bg-gray-800/30 px-4 py-2 rounded-full border border-gray-600/20"
            >
              <span className={`text-lg ${service.color}`}>{service.icon}</span>
              <span className="text-gray-300 font-medium text-sm">{service.title}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* CTA */}
      <div className="relative z-10 text-center pb-20 px-4">
        <div className="max-w-4xl mx-auto bg-gray-800/40 p-8 rounded-3xl border border-gray-600/20">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-300 text-base mb-6 max-w-2xl mx-auto">
            Join 500+ companies that trust us with their digital transformation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full font-bold">
              <Rocket className="inline mr-1" />
              Start Your Project
            </a>
            <button className="border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-full font-bold">
              <Headphones className="inline mr-1" />
              Schedule Call
            </button>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-gradient-to-r from-cyan-500 to-blue-600 p-4 rounded-full shadow-lg z-50"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
          >
            <ArrowUp className="text-white text-xl" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdvancedServicesPage;
