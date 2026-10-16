import React from 'react'
import ResumeButton from './ResumeButton'

function About() {
  return (
    <div>
        
    <section id='about' className=' md:flex items-center justify-between py-24 px-10 bg-[#0c1a25]'>
        <div className=" items-center justify-center pb-9 ">
          <img src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif?cid=790b761158ubchlgzph0exatwjnz3syx45wbowc9yw2aj2dh&ep=v1_gifs_search&rid=giphy.gif&ct=g"
            alt="Coding Animation"
            className='  h-auto p-1' />
        </div>
        
        <div className="about-text md:w-1/2">
          <h2 className='text-4xl font-bold leading-tight text-white'>About <span className='text-[#00f0ff]'>Me</span></h2>
          <h3 className='text-2xl mt-2 text-white'>Full Stack Developer!</h3>
          <p className='my-5 text-lg leading-relaxed text-gray-400'>
          <p>Hi, I’m Aashutosh Gupta!</p>
          <p>I’m a passionate Full-Stack Developer with a strong foundation in Computer Science Engineering. I hold a B.Tech degree from Dr. APJ Abdul Kalam Technical University and specialize in building modern, responsive, and user-friendly web applications.</p>

            🔹 Full-Stack Web Development (MERN Stack)
            I specialize in building scalable and user-friendly web applications using React, Node.js, Express, and MongoDB. From frontend design to backend functionality, I create end-to-end solutions that enhance user experience and performance.

            <p>🔹 Problem Solving & Development
              I enjoy solving technical challenges, learning new technologies, and developing practical solutions that improve user experience. I’m continuously enhancing my skills in web development, database management, REST APIs, and software development best practices.
            </p>
          </p>
          <ResumeButton/>
        </div>
    </section>
      
    </div>
  )
}

export default About
