import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="bg-gray-300 w-64 h-64 mx-auto rounded-full overflow-hidden">
              <img src="/api/placeholder/250/250" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="md:w-2/3">
            <p className="text-lg mb-4">
              Hi, I'm Nicholas! I'm a passionate fullStack developer with a strong eye for design and a dedication to creating seamless user experiences. 
              With 3 years of experience in web development, I specialize in React, JavaScript, modern CSS frameworks, Node.js, Express.js and MongoDB.
            </p>
            <p className="text-lg mb-6">
              My journey in web development began during college where I discovered my passion for building interactive interfaces. 
              Since then, I've worked on a variety of projects from e-commerce platforms to data visualization dashboards.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Html</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Css</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Javascript</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">React</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Tailwind Css</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Responsive Design</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Node.js</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Express.js</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">MongoDB</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Python</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Django</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;