import React from "react";  
import { useState } from "react";
import { Link } from "react-router-dom"; 


function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <>
            <header className="bg-gray-900 text-white py-4 fixed w-full top-0 z-50">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="text-xl font-bold">NICHOLAS TECH HUB</div>
                    <button
                        className="md:hidden p-2 focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                    
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                         <Link to="/" className="hover:text-blue-400 transition duration-300">Home</Link>
                        <Link to="about" className="hover:text-blue-400 transition duration-300">About</Link>
                        <Link to="skills" className="hover:text-blue-400 transition duration-300">Skills</Link>
                        <Link to="projects" className="hover:text-blue-400 transition duration-300">Projects</Link>
                        <Link to="contact" className="hover:text-blue-400 transition duration-300">Contact</Link>
                    </nav>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <nav className="absolute top-full left-0 right-0 bg-gray-900 md:hidden">
                            <div className="flex flex-col items-center py-4 space-y-4">
                                 <Link to="/" className="hover:text-blue-400 transition duration-300">Home</Link>
                                <Link to="about" className="hover:text-blue-400 transition duration-300">About</Link>
                                <Link to="skills" className="hover:text-blue-400 transition duration-300">Skills</Link>
                                <Link to="projects" className="hover:text-blue-400 transition duration-300">Projects</Link>
                                <Link to="contact" className="hover:text-blue-400 transition duration-300">Contact</Link>
                            </div>
                        </nav>
                    )}
                </div>
            </header>
        </>
    );
}

export default Navigation;