import React from 'react';
import { Link } from 'react-router-dom';


function Hero () {
    return(
        <>
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-32 mt-16">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">NICHOLAS TECH HUB</h1>
        <h2 className="text-2xl md:text-3xl mb-6">FullStack Developer</h2>
        <p className="text-lg mb-8 max-w-2xl">I create beautiful, responsive web applications with modern technologies.</p>
        <Link 
          to="/contact" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition duration-300"
        >
          Get In Touch
        </Link>
      </div>
    </section>

  </>
    )
}

export default Hero;
