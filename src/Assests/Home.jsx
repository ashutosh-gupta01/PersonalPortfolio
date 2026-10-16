import React, { useEffect } from 'react';
import { faInstagram, faFacebook, faWhatsapp, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ResumeButton from './ResumeButton';

const Home = () => {
    useEffect(() => {
        const words = ["Web Developer", "Web Designer", "Frontend Developer"];
        let wordIndex = 0;
        let charIndex = 0;
        let currentWord = '';
        const typingSpeed = 100;
        const erasingSpeed = 50;
        const newWordDelay = 2000;

        const typingElement = document.querySelector('.typing-animation');

        function type() {
            if (charIndex < words[wordIndex].length) {
                currentWord += words[wordIndex].charAt(charIndex);
                typingElement.textContent = currentWord;
                charIndex++;
                setTimeout(type, typingSpeed);
            } else {
                setTimeout(erase, newWordDelay);
            }
        }

        function erase() {
            if (charIndex > 0) {
                currentWord = currentWord.slice(0, -1);
                typingElement.textContent = currentWord;
                charIndex--;
                setTimeout(erase, erasingSpeed);
            } else {
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(type, typingSpeed + 1100);
            }
        }

        type();
    }, []);

    return (
        <section
            id="Home"
            className="relative flex flex-col-reverse md:flex-row justify-between items-center md:py-24 px-10 md:px-20 text-white"
            style={{
                backgroundImage: `url('https://i.gifer.com/1kc1.gif')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* Overlay for better readability */}
            <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

            {/* Text Content */}
            <div className="relative z-10 max-w-lg">
                <h1 className="text-4xl font-bold leading-tight">
                    Hello, It's Me<br />
                    <span className="text-[#00f0ff]">Aashutosh Gupta</span>
                    <br />
                    And I'm a <span className="typing-animation">Web Dev</span>
                </h1>
                <p className="my-5 text-lg leading-relaxed">
                    "I'm a Fullstack Developer passionate about building and designing dynamic websites, creating intuitive frontend designs, and crafting impactful web solutions..."
                </p>
                <div className="social-links flex space-x-3">
                    <a href="https://www.instagram.com/ashutosh_62027?stkn=bHV6dWhwYjh2eWp5">
                        <FontAwesomeIcon
                            icon={faInstagram}
                            className="text-2xl transition duration-300 hover:text-[#00f0ff] hover:text-3xl"
                        />
                    </a>
                    <a href="https://www.facebook.com/share/1CXkDURZd1/">
                        <FontAwesomeIcon
                            icon={faFacebook}
                            className="text-2xl transition duration-300 hover:text-[#00f0ff] hover:text-3xl"
                        />
                    </a>
                    <a href="https://wa.me/+916202747638">
                        <FontAwesomeIcon
                            icon={faWhatsapp}
                            className="text-2xl transition duration-300 hover:text-[#00f0ff] hover:text-3xl"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/aashutosh-kumar-gupta-0561ab265">
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            className="text-2xl transition duration-300 hover:text-[#00f0ff] hover:text-3xl"
                        />
                    </a>
                    <a href="https://github.com/ashutosh-gupta01">
                        <FontAwesomeIcon
                            icon={faGithub}
                            className="text-2xl transition duration-300 hover:text-[#00f0ff] hover:text-3xl"
                        />
                    </a>
                </div>
                <ResumeButton />
            </div>

            {/* Profile Image */}
            {/* <div className="relative z-10 flex items-center justify-center bg-gradient-to-r from-[#7600ff] to-[#00f0ff] rounded-full p-4 shadow-2xl shadow-cyan-300/40 mb-8 mt-20">
                <img
                    src="/me.jpg"
                    alt="img"
                    className="w-96 h-auto rounded-full shadow-2xl border-[10px] border-[#0c1a25] bg-gradient-to-r from-[#00f0ff] to-[#7600ff] p-1"
                />
            </div> */}
            <div className="relative z-10 flex items-center justify-center mb-8 mt-20">

                {/* Outer Glow */}
                <div className="absolute w-[340px] h-[340px] md:w-[410px] md:h-[410px] rounded-full bg-gradient-to-r from-[#7600ff] via-[#00f0ff] to-[#7600ff] blur-2xl opacity-30"></div>

                {/* Gradient Border */}
                <div className="relative p-[5px] rounded-full bg-gradient-to-r from-[#7600ff] via-[#00f0ff] to-[#7600ff] shadow-2xl shadow-cyan-300/30">

                    {/* Inner Border */}
                    <div className="p-[6px] rounded-full bg-[#0c1a25]">

                        {/* Profile Image */}
                        <img
                            src="/myimage.png"
                            alt="Aashutosh Gupta"
                            className="
                    w-64 h-64
                    md:w-80 md:h-80
                    lg:w-96 lg:h-96
                    object-cover
                    rounded-full
                    transition-all duration-500
                    hover:scale-105
                    hover:shadow-[0_0_50px_rgba(0,240,255,0.35)]
                "
                        />

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
