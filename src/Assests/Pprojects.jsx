
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Trip Planner",
    description:
      "A zero-cost AI travel planning engine integrating Google Gemini AI with OpenStreetMap to help users explore destinations, generate personalized itineraries, visualize routes, and plan budget-friendly trips.",
    tech: ["GEMINI AI","OPENSTREETMAP", " REACT", "Node.js", "MongoDB", "APIs"],
    liveLink: "https://ai-trip-planner-frontend-g79g.onrender.com//", // Add your actual deployed URL
    githubLink:
      "https://github.com/ashutosh-gupta01/AI-TripPlanner.git",

  },
  {
    title: "Prescripto – Smart Hospital Management System",
    description:
      "A MERN-stack healthcare application featuring secure authentication, role-based access, doctor appointment booking, patient management, and Razorpay payment gateway integration for seamless online payments.",
    tech: ["React", "Node.js", "JWT","Express", "MongoDB","RAZORPAY"],
    liveLink: "https://prescripto-frontend-0f7u.onrender.com/",
    githubLink: "https://github.com/ashutosh-gupta01/prescripto.git",
    
  },
  
  
  {
    title: "Forever – E-Commerce Website",
    description:
      "A full-stack MERN e-commerce platform featuring product browsing, shopping cart management, secure user authentication, online payments with Razorpay , and an admin dashboard for product and order management.",
    tech: ["REACT", "Node.js", "Express","MongoDB","RAZORPAY","JWT"],
    liveLink: "https://forever-ecommerce-frontend-qmfc.onrender.com/", 
    githubLink:
      "https://github.com/ashutosh-gupta01/forever-ecommerce.git",
  },

   {
    title: "Personal Portfolio",
    description:
      "A responsive portfolio built with React and Tailwind CSS to showcase my projects, technical skills, and professional profile, featuring smooth animations, interactive UI, and a contact form.",
    tech: ["REACT", "Framer Motion", "Tailwind CSS"],
    liveLink: "https://forever-ecommerce-frontend-qmfc.onrender.com/", 
    githubLink:
      "https://github.com/ashutosh-gupta01/forever-ecommerce.git",
  },

  {
    title: "StudySync – Study Management Website",
    description:
      "A responsive educational platform built using HTML, CSS, and JavaScript, featuring a clean user interface to help students organize their learning resources and enhance their study experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://forever-ecommerce-frontend-qmfc.onrender.com/", 
    githubLink:
      "https://github.com/ashutosh-gupta01/StudySync.git",
  }
];

const Pprojects = () => {
  return (
    <section
      id="projects"
      className="py-24 px-5 bg-[#0c1a25] text-center"
    >
      {/* <h2 className="text-4xl md:text-5xl text-white mb-12">
        My <span className="text-[#00f0ff]">Projects</span>
      </h2> */}
      <h2 className="text-4xl md:text-5xl text-white font-bold mb-12">Projects</h2>

      {/* Same layout as Services */}
      <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col bg-[#112233] p-5 rounded-lg shadow-lg shadow-cyan-300/10 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] min-w-0 transition-transform duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#4EEC88]"
          >
            <div className="text-4xl mb-5 text-[#00f0ff]">
              {project.icon}
            </div>

            <h3 className="text-2xl text-white mb-4">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-5 flex-grow">
              {project.description}
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-5">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/20 px-3 py-1 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Two separate buttons */}
            <div className="flex flex-wrap justify-center gap-3 mt-auto">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 text-[#0c1a25] font-semibold bg-[#00f0ff] rounded-full transition duration-300 hover:bg-[#00cce7]"
                >
                  Live Demo ↗
                </a>
              )}

              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 text-black bg-[#00f0ff] rounded-full transition duration-300 hover:bg-[#00cce7]"
                >
                  GitHub
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pprojects;
