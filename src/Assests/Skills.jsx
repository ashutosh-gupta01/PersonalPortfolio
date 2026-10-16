import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faJs,
    faReact,
    faHtml5,
    faCss3Alt,
    faFigma,
    faGitAlt,
    faGithub,
    faBootstrap,
    faNode,
    faPython,
} from "@fortawesome/free-brands-svg-icons";

function Skills() {
    const scrollContainerRef = useRef(null);

    // Skill Categories
    const categories = [
        {
            title: "Languages",
            skills: "Java, JavaScript, Python",
        },
        {
            title: "Frontend Development",
            skills: "HTML5, CSS3, React.js, Tailwind CSS, Bootstrap",
        },
        {
            title: "Backend Development",
            skills: "Node.js, Express.js, REST APIs",
        },
        {
            title: "Databases",
            skills: "MongoDB, MySQL",
        },
        {
            title: "Tools & Platforms",
            skills: "Git, GitHub, Postman, VS Code",
        },
        {
            title: "Core Concepts",
            skills: "OOPs, DBMS, Operating Systems, Computer Networks",
        },
    ];

    // Moving Skills
    const skills = [
        {
            type: "icon",
            icon: faHtml5,
            name: "HTML5",
            color: "#f06529",
        },
        {
            type: "icon",
            icon: faCss3Alt,
            name: "CSS3",
            color: "#3b67ce",
        },
        {
            type: "icon",
            icon: faJs,
            name: "JavaScript",
            color: "#FFD43B",
        },
        {
            type: "icon",
            icon: faReact,
            name: "React",
            color: "#61DAFB",
        },
        {
            type: "icon",
            icon: faBootstrap,
            name: "Bootstrap",
            color: "#7952b3",
        },
        {
            type: "img",
            src: "/Tailwind CSS.svg",
            name: "Tailwind CSS",
        },
        {
            type: "icon",
            icon: faNode,
            name: "Node.js",
            color: "#68A063",
        },
        {
            type: "icon",
            icon: faPython,
            name: "Python",
            color: "#306998",
        },
        {
            type: "img",
            src: "/mongodb.svg",
            name: "MongoDB",
        },
        {
            type: "img",
            src: "/MySQL.svg",
            name: "MySQL",
        },
        {
            type: "icon",
            icon: faGitAlt,
            name: "Git",
            color: "#f05032",
        },
        {
            type: "icon",
            icon: faGithub,
            name: "GitHub",
            color: "#ffffff",
        },
        {
            type: "icon",
            icon: faFigma,
            name: "Figma",
            color: "#a259ff",
        },
    ];

    // Continuous Animation
    useEffect(() => {
        const container = scrollContainerRef.current;

        if (!container) return;

        let interval;

        const startAnimation = () => {
            interval = setInterval(() => {
                container.scrollLeft += 1;

                // First duplicate card ka position
                const firstDuplicate = container.children[skills.length];

                if (
                    firstDuplicate &&
                    container.scrollLeft >= firstDuplicate.offsetLeft
                ) {
                    container.scrollLeft = 0;
                }
            }, 15);
        };

        startAnimation();

        return () => {
            clearInterval(interval);
        };
    }, [skills.length]);

    return (
        <section
            id="Skills"
            className=" bg-[#0c1a25] py-24 px-5 sm:px-8 text-center overflow-hidden"
        >
            {/* Heading */}
            <div className="max-w-3xl mx-auto mb-10">

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    My <span className="text-[#00f0ff]">Skills</span>
                </h2>


                <div className="w-16 h-1 bg-[#00f0ff] rounded-full mx-auto mt-5"></div>
            </div>

            {/* Skill Category Cards */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
                {categories.map((item) => (
                    <div
                        key={item.title}
                        className="bg-[#112233] border border-white/10 rounded-xl p-5 text-left transition-all duration-300 hover:-translate-y-2 hover:border-[#00f0ff]/50 hover:shadow-lg hover:shadow-[#4EEC88]/10"
                    >
                        <h3 className="text-[#00f0ff] text-base md:text-lg font-semibold mb-2">
                            {item.title}
                        </h3>

                        <p className="text-gray-300 text-sm leading-6">
                            {item.skills}
                        </p>
                    </div>
                ))}
            </div>

            {/* Moving Skills - Full Width */}
            <div className="w-screen relative left-1/2 -translate-x-1/2 mt-2">

                <div className="w-full overflow-hidden">
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-5 overflow-x-hidden whitespace-nowrap py-5"
                    >
                        {[...skills, ...skills].map((skill, index) => (
                            <div
                                key={`${skill.name}-${index}`}
                                className="flex-shrink-0 w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] bg-[#112233] border border-white/10 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:border-[#00f0ff]/50 hover:shadow-lg hover:shadow-[#4EEC88]/20"
                            >
                                {skill.type === "icon" ? (
                                    <FontAwesomeIcon
                                        icon={skill.icon}
                                        style={{ color: skill.color }}
                                        className="text-5xl"
                                    />
                                ) : (
                                    <img
                                        src={skill.src}
                                        alt={skill.name}
                                        className="w-14 h-14 object-contain"
                                        draggable="false"
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Skills;