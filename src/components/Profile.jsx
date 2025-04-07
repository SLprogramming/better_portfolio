import React from "react";


const Profile = () => {
  return (
    <div id="About" className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-md flex flex-col md:flex-row gap-8">
      {/* Left Section - Profile & Skills */}
      <div className="w-full md:w-1/2">
      <div className="w-full flex flex-col lg:flex-row gap-4">

        <img
          src="/assets/img/supyae_1.jpg" // Replace with actual image URL
          alt="Profile"
          className="w-full md:w-2/3 lg:w-1/2 rounded-md shadow-md"
        />
        
        <div className="mt-4 ms-4 w-full md:w-full lg:w-1/2">
          <h2 className="text-lg font-semibold">Name: <span className="font-normal">Thae Oo Su Pyae Sone</span></h2>
          <h2 className="text-lg font-semibold">Profile: <span className="font-normal">Web Designer / Frontend Developer</span></h2>
          <h2 className="text-lg font-semibold">Email: <span className="font-normal">thaeoosupyae@gmail.com</span></h2>
          <h2 className="text-lg font-semibold">Phone: <span className="font-normal">+959 421019280</span></h2>
        </div>
      </div>
        
        {/* Skills Section */}
        <div className="mt-6">
          <h2 className="text-xl font-bold">Skills</h2>
          {[
            { name: "HTML", level: "100%" },
            { name: "CSS", level: "90%" },
            { name: "JavaScript", level: "75%" },
            { name: "Photoshop", level: "100%" },
          ].map((skill, index) => (
            <div key={index} className="mt-2">
              <p className="text-sm font-medium">{skill.name}</p>
              <div className="bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-yellow-600 h-2.5 rounded-full"
                  style={{ width: skill.level }}
                ></div>
              </div>
              <span className="text-sm text-gray-500">{skill.level}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section - About & Expertise */}
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-bold mb-2">About Me</h2>
        <div className="border-b-2 border-yellow-500 w-16 mb-4"></div>
        <p className="text-gray-700">
          Hi, I’m Thae Oo Su Pyae Sone, a creative Web Designer & UI/UX Enthusiast with a passion for crafting visually appealing and user-friendly digital experiences. I specialize in responsive design, front-end development, and intuitive user interfaces that bring brands to life. With 6 years of experience, I blend aesthetics with functionality to create websites that not only look great but also provide a seamless user experience.
        </p>
        
        <h2 className="text-2xl font-bold mt-6">My Skills & Expertise</h2>
        <div className="border-b-2 border-yellow-500 w-16 mb-4"></div>
        <ul className="space-y-2 text-gray-700">
          <li>🎨 <span className="font-semibold">Web & UI/UX Design</span> – Clean, modern, and engaging interfaces</li>
          <li>💻 <span className="font-semibold">Front-End Development</span> – HTML, CSS, JavaScript & modern frameworks</li>
          <li>📱 <span className="font-semibold">Responsive & Mobile-First Design</span> – Optimized for all devices</li>
          <li>⚡ <span className="font-semibold">SEO & Performance Optimization</span> – Fast, accessible, and SEO-friendly websites</li>
          <li>🎭 <span className="font-semibold">Brand Identity & Graphic Design</span> – Logos, typography, and cohesive brand visuals</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
