import React from 'react';

function Services() {
  return (
    <div>
      <section id="Services" className="py-24 px-5 bg-[#0c1a25] text-center">
        <h2 className="text-4xl md:text-5xl text-white mb-12">
          My <span className="text-[#00f0ff]">Services</span>
        </h2>
        <div className="flex flex-wrap  justify-center gap-16">
          <div className="bg-[#112233] p-8 rounded-lg shadow-lg shadow-cyan-300/10 w-[300px] transition-transform duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#4EEC88]">
            <div className="service-icon text-4xl mb-5 text-[#00f0ff]">⚙️</div>
            <h3 className="text-2xl text-white mb-4">UI/UX Design</h3>
            <p className="text-gray-400 mb-5">
            Designing intuitive and user-friendly interfaces that enhance user experience and engagement.
            </p>
            <a
              href="https://wa.me/+916202747638"
              className="inline-block px-6 py-3 text-white bg-[#00f0ff] rounded-full transition duration-300 hover:bg-[#00cce7]"
            >
              Contact Us
            </a>
          </div>
          <div className="bg-[#112233] p-8 rounded-lg shadow-lg shadow-cyan-300/10 w-[300px] transition-transform duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#4EEC88]">
            <div className="text-4xl mb-5 text-[#00f0ff]">💻</div>
            <h3 className="text-2xl text-white mb-4">Web Design</h3>
            <p className="text-gray-400 mb-5">
            Creating responsive and dynamic websites, web applications, and custom solutions tailored to business needs.
            </p>
            <a
              href='https://wa.me/+916202747638'
              className="inline-block px-6 py-3 text-white bg-[#00f0ff] rounded-full transition duration-300 hover:bg-[#00cce7]"
            >
              Contact Us
            </a>
          </div>
          <div className="bg-[#112233] p-8 rounded-lg shadow-lg shadow-cyan-300/10 w-[300px] transition-transform duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#4EEC88]">
            <div className="text-4xl mb-5 text-[#00f0ff]">📱</div>
            <h3 className="text-2xl text-white mb-4">Software Development</h3>
            <p className="text-gray-400 mb-5">
            Developing scalable and efficient software solutions to streamline business operations and improve productivity.
            </p>
            <a
              href='https://wa.me/+916202747638'
              className="inline-block px-6 py-3 text-white bg-[#00f0ff] rounded-full transition duration-300 hover:bg-[#00cce7]"
            >
              Contact Us
            </a>
          </div>

          {/* <div className="bg-[#112233] p-8 rounded-lg shadow-lg shadow-cyan-300/10 w-[300px] transition-transform duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#4EEC88]">
            <div className="text-4xl mb-5 text-[#00f0ff]">📈</div>
            <h3 className="text-2xl text-white mb-4">Data Analysis & Insights</h3>
            <p className="text-gray-400 mb-5">
            Providing data-driven solutions, including data visualization, reporting, and business insights to help optimize decision-making.
            </p>
            <a
              href='https://wa.me/+916202747638'
              className="inline-block px-6 py-3 text-white bg-[#00f0ff] rounded-full transition duration-300 hover:bg-[#00cce7]"
            >
              Contact Us
            </a>
          </div> */}


        </div>
      </section>
    </div>
  );
}

export default Services;
