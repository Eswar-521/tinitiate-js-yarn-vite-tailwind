import { Tab } from "@headlessui/react";
import { FaUsers, FaBullseye, FaHandshake } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

const tabs = [
  {
    title: "Team",
    icon: <FaUsers className="inline-block mr-2 text-blue-400" />,
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    video: "https://www.youtube.com/embed/tgbNymZ7vqY",
    content:
      "Meet our developers and designers building modern web solutions.",
    link: "https://example.com/team",
    timeline: ["Founded in 2020", "Launched V1 in 2021", "Reached 10k users in 2022"],
  },
  {
    title: "Mission",
    icon: <FaBullseye className="inline-block mr-2 text-green-400" />,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    content:
      "We strive to innovate and deliver excellence through every project.",
    link: "https://example.com/mission",
    timeline: ["Vision Drafted 2019", "First Milestone 2020", "Global Expansion 2023"],
  },
  {
    title: "Culture",
    icon: <FaHandshake className="inline-block mr-2 text-yellow-400" />,
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    video: "https://www.youtube.com/embed/ScMzIvxBSi4",
    content:
      "We believe in remote-first, inclusive, and high-trust environments.",
    link: "https://example.com/culture",
    timeline: ["Remote Policy Launched", "DEI Committee Formed", "Annual Retreat 2024"],
  },
];

export default function TeamTabs() {
  const [modalData, setModalData] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () =>
      setSelectedIndex((prev) => (prev + 1) % tabs.length),
    onSwipedRight: () =>
      setSelectedIndex((prev) => (prev - 1 + tabs.length) % tabs.length),
    trackMouse: true,
  });

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target.id === "modal-overlay") {
        setModalData(null);
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-16" data-aos="fade-up">
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List className="flex justify-center gap-4 mb-6">
          {tabs.map((tab) => (
            <Tab
              key={tab.title}
              className={({ selected }) =>
                `px-4 py-2 text-sm font-medium rounded-lg transition flex items-center gap-2 ${
                  selected
                    ? "bg-blue-600 text-white shadow"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`
              }
            >
              {tab.icon}
              {tab.title}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels className="text-center text-gray-200" {...swipeHandlers}>
          {tabs.map((tab, idx) => (
            <Tab.Panel
              key={idx}
              className="bg-white/10 p-6 rounded-lg backdrop-blur-lg text-left cursor-pointer transition duration-300 hover:scale-105"
              onClick={() => setModalData(tab)}
            >
              <div className="space-y-4">
                <img
                  src={tab.image}
                  alt={tab.title}
                  className="w-full h-48 object-cover rounded-md"
                />
                <p>{tab.content}</p>
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>

      {modalData && (
        <div
          id="modal-overlay"
          className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center transition-opacity duration-300"
        >
          <div className="bg-white text-black p-6 rounded-lg max-w-lg w-full relative animate-fadeIn">
            <button
              onClick={() => setModalData(null)}
              className="absolute top-2 right-4 text-2xl text-gray-500 hover:text-red-500"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              {modalData.icon} {modalData.title}
            </h3>
            <img
              src={modalData.image}
              alt={modalData.title}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <p className="mb-4">{modalData.content}</p>
            <iframe
              width="100%"
              height="200"
              src={modalData.video}
              title="Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded mb-4"
            ></iframe>
            <ul className="list-disc list-inside mb-4 text-sm">
              {modalData.timeline.map((event, i) => (
                <li key={i}>{event}</li>
              ))}
            </ul>
            <a
              href={modalData.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-blue-600 hover:underline"
            >
              Learn more →
            </a>
          </div>
        </div>
      )}
    </div>
  );
}