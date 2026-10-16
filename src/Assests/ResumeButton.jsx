import React from 'react'

function ResumeButton() {
  return (
    <div>
        <a  href="/update_cv.pdf" // Path to the resume file
           download="Aashutosh_Resume.pdf" 
           className="btn inline-block mt-5 mb-5 px-2 py-1 bg-[#00f0ff] text-[#09131c] font-bold rounded transition duration-300 hover:bg-[#00c4ff]">Download Resume</a>
      
    </div>
  )
}

export default ResumeButton
