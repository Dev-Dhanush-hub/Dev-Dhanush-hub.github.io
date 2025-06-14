// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/Background.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// src/App.js
import React, { useState } from "react";
import ThemeToggle from "./components/ThemeToggle";
import ProjectModal from "./components/ProjectModal";
import { motion } from "framer-motion";

const projects = [
  {
    name: "3D Stereo Vision Reconstruction",
    description: "3D depth map reconstruction using stereo vision and classical triangulation.",
    link: "https://github.com/Dev-Dhanush-hub/CSE6367_final_project-3D-Reconstruction-using-Stereo-Vision"
  },
  {
    name: "Doc-Aid",
    description: "AI-based medical recommender system that provides symptom-based suggestions.",
    link: "https://github.com/Dev-Dhanush-hub/doc-aid"
  },
  {
    name: "Road Condition Detection",
    description: "Live road hazard detection using CNNs for safer driving.",
    link: "https://github.com/Dev-Dhanush-hub/road-safety-detection"
  },
  {
    name: "Kuge Gemu UI",
    description: "Gaming platform interface created using React and dynamic component structure.",
    link: "https://github.com/Dev-Dhanush-hub/kuge-ui"
  },
  {
    name: "AI Face Detector",
    description: "Template-matching based face detection with bounding box accuracy.",
    link: "https://github.com/Dev-Dhanush-hub/template-face-detection"
  }
];

function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen font-sans text-zinc-900 dark:text-white bg-transparent">
      <ThemeToggle />

      <header className="h-screen flex flex-col justify-center items-center text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Dhanush Srinivas
        </motion.h1>
        <motion.p
          className="mt-6 text-xl md:text-2xl max-w-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Master’s student @UTA | Ex-ML Intern @NVIDIA | Passionate about Computer Vision & AI
        </motion.p>
      </header>

      <section className="px-6 py-12 md:px-20">
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-zinc-800 rounded-xl shadow-xl p-6 cursor-pointer hover:scale-105 transition"
              onClick={() => setSelected(p)}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold mb-2">{p.name}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="text-center py-12 text-zinc-500 text-sm">
        <p>📧 dxs2331@mavs.uta.edu | 💼 <a href="https://www.linkedin.com/in/dhanush-srinivas-2391b9325" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 🐙 Dev-Dhanush-hub</p>
      </footer>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}

export default App;


// src/components/ThemeToggle.js
import React, { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="bg-white dark:bg-black border dark:border-white border-black px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:scale-105 transition"
      >
        {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
      </button>
    </div>
  );
}


// src/components/ProjectModal.js
import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white dark:bg-zinc-900 rounded-lg p-8 max-w-xl shadow-2xl relative"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-400 hover:text-red-500 text-xl font-bold"
        >
          ×
        </button>
        <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">{project.name}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          View on GitHub
        </a>
      </motion.div>
    </motion.div>
  );
}


// src/styles/Background.css
body::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(270deg, #ff4ecd, #4be1ec, #2c5eff, #ff7e5f);
  background-size: 800% 800%;
  animation: wave 20s ease infinite;
  z-index: -1;
  opacity: 0.12;
}

@keyframes wave {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
