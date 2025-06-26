import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, Network, Cloud, Bot, TrendingUp, Shield, Code, Zap, Play, Pause, Volume2, VolumeX } from "lucide-react";

const Service1 = () => {
  const [isDark, setIsDark] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enhanced sound on scroll with throttling
  useEffect(() => {
    let lastScrollTime = 0;
    const onScroll = () => {
      const now = Date.now();
      if (now - lastScrollTime > 500 && !isMuted) { // Throttle to every 500ms
        const audio = new Audio("data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaADyN0/DKeSYEKH/N8t2CQAkQV7Tn7q9eGQA+ltH0y3kpBimBzvLceyQFl9Dz9+6oVBQHUazh86NQDwxOqeXkimkRSoHO8tySQAoUXrTp64hTFgpKn+DyvmEaADyN0/DKeSYEKH/N8t2CQAkQV7Tn7q9eGQA+ltH0y3kpBimBzvLceyQF");
        audio.volume = 0.1;
        audio.play().catch(() => {});
        lastScrollTime = now;
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMuted]);

  const services = [
    {
      icon: <Network className="text-cyan-400 group-hover:scale-110 transition-transform duration-300 w-12 h-12" />,
      title: "API Gateways",
      desc: "Real-time syncing with REST, GraphQL, WebSocket.",
      features: ["Rate Limiting", "Authentication", "Load Balancing", "Analytics"],
      color: "cyan"
    },
    {
      icon: <Settings className="text-indigo-400 group-hover:rotate-45 transition-transform duration-300 w-12 h-12" />,
      title: "Automation Engine",
      desc: "Build workflows with event triggers & CI/CD.",
      features: ["Visual Workflow Builder", "Event Triggers", "Conditional Logic", "Monitoring"],
      color: "indigo"
    },
    {
      icon: <Cloud className="text-sky-400 group-hover:scale-110 transition-transform duration-300 w-12 h-12" />,
      title: "Cloud Sync",
      desc: "Deploy cloud-native, elastic, zero-downtime apps.",
      features: ["Auto-scaling", "Multi-region", "Backup & Recovery", "Cost Optimization"],
      color: "sky"
    },
    {
      icon: <Bot className="text-pink-400 group-hover:rotate-180 transition-transform duration-300 w-12 h-12" />,
      title: "AI Orchestration",
      desc: "Use ML to intelligently route & optimize services.",
      features: ["Smart Routing", "Predictive Scaling", "Anomaly Detection", "Auto-optimization"],
      color: "pink"
    },
    {
      icon: <TrendingUp className="text-green-400 group-hover:scale-110 transition-transform duration-300 w-12 h-12" />,
      title: "Analytics Hub",
      desc: "Real-time insights and performance monitoring.",
      features: ["Live Dashboards", "Custom Metrics", "Alerts", "Reports"],
      color: "green"
    },
    {
      icon: <Shield className="text-red-400 group-hover:scale-110 transition-transform duration-300 w-12 h-12" />,
      title: "Security Shield",
      desc: "Enterprise-grade security and compliance.",
      features: ["End-to-end Encryption", "Audit Logs", "Compliance", "Threat Detection"],
      color: "red"
    }
  ];

  const stats = [
    { label: "Integrations", value: "500+", icon: <Code className="w-5 h-5" /> },
    { label: "Uptime", value: "99.9%", icon: <Zap className="w-5 h-5" /> },
    { label: "API Calls/sec", value: "10M+", icon: <Network className="w-5 h-5" /> },
    { label: "Enterprise Clients", value: "1000+", icon: <Cloud className="w-5 h-5" /> }
  ];

  return (
    <div className={`relative min-h-screen ${isDark ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' : 'bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950'} text-white px-4 sm:px-6 py-20 overflow-hidden transition-all duration-500`}>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-black/20 z-50">
        <motion.div 
          className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Background Video with Play/Pause Control */}
      <video
        autoPlay={isPlaying}
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      {/* Enhanced Blur Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />

      {/* Animated Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 ${i % 4 === 0 ? 'bg-cyan-400' : i % 4 === 1 ? 'bg-purple-400' : i % 4 === 2 ? 'bg-pink-400' : 'bg-blue-400'}/20 rounded-full blur-sm`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Control Panel */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="bg-white/10 backdrop-blur-md text-white p-3 rounded-full shadow-lg border border-white/20 hover:bg-white/20 transition"
          title={isPlaying ? "Pause Video" : "Play Video"}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="bg-white/10 backdrop-blur-md text-white p-3 rounded-full shadow-lg border border-white/20 hover:bg-white/20 transition"
          title={isMuted ? "Unmute Sounds" : "Mute Sounds"}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
        <button
          onClick={() => setIsDark(!isDark)}
          className="bg-white/10 backdrop-blur-md text-white p-3 rounded-full shadow-lg border border-white/20 hover:bg-white/20 transition"
          title="Toggle Theme"
        >
          {isDark ? '🌞' : '🌙'}
        </button>
      </div>

      {/* Enhanced Header with Stats */}
      <motion.div
        className="relative z-10 text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mb-6"
          animate={{ 
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          ⚙️ Enterprise Integrations
        </motion.h1>
        <p className="text-blue-100 mt-4 max-w-2xl mx-auto text-base sm:text-lg mb-8">
          Discover next-generation tools for automated workflows, robust APIs, and intelligent cloud integration with enterprise-grade security.
        </p>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-cyan-400 text-xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-xs text-blue-200">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Enhanced Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 max-w-7xl mx-auto px-4 mb-16">
        {services.map((item, index) => (
          <motion.div
            key={index}
            className={`group relative overflow-hidden border-2 ${activeService === index ? `border-${item.color}-400` : 'border-transparent'} bg-white/5 hover:bg-white/10 rounded-2xl backdrop-blur-xl p-6 shadow-xl hover:shadow-${item.color}-400/20 transition-all duration-500 cursor-pointer`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            onClick={() => setActiveService(activeService === index ? null : index)}
          >
            {/* Glowing Effect */}
            <div className={`absolute inset-0 bg-gradient-to-r from-${item.color}-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            <div className="relative z-10">
              {item.icon}
              <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
              <p className="text-blue-200 text-sm mt-2 mb-4">{item.desc}</p>
              
              {/* Expandable Features */}
              <AnimatePresence>
                {activeService === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-white/20 pt-4">
                      <h4 className="text-sm font-semibold mb-3 text-cyan-300">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {item.features.map((feature, fIndex) => (
                          <motion.div
                            key={fIndex}
                            className={`text-xs p-2 rounded-lg bg-${item.color}-400/20 text-${item.color}-200`}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: fIndex * 0.1 }}
                          >
                            {feature}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <div className="text-xs text-blue-300 mt-3">
                {activeService === index ? "Click to collapse" : "Click to explore"}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Demo Section */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto mb-16 bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
          🚀 Live Integration Demo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["API Gateway", "Workflow Engine", "Cloud Sync"].map((step, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {index + 1}
              </motion.div>
              <h3 className="font-semibold mb-2">{step}</h3>
              <p className="text-sm text-blue-200">
                {index === 0 && "Secure API endpoints with authentication"}
                {index === 1 && "Automated workflow processing"}
                {index === 2 && "Real-time cloud synchronization"}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Enhanced CTA Section */}
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Ready to Transform Your Enterprise?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/service2"
              className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-full font-semibold text-lg shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🔍 Explore More Services
            </motion.a>
            <motion.button
              className="inline-block px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold text-lg shadow-lg border border-white/20 backdrop-blur-md transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📞 Schedule Demo
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Service1;