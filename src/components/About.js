import React, { useState, useEffect } from 'react';
import aboutImage from './about-back.png'; // Correct path if it's in the same directory

const About = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('about');
            if (element) {
                const rect = element.getBoundingClientRect();
                setIsVisible(rect.top <= window.innerHeight * 0.75);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="about" className="py-20 px-6 bg-black">
            <div className={`max-w-4xl mx-auto transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <h2 className="text-4xl font-bold mb-8 text-white tracking-wider text-center md:text-left">
                    About CodeNex
                </h2>
                <div className="flex flex-col md:flex-row gap-12">
                    {/* Content Section */}
                    <div className="flex-1">
                        <p className="text-xl mb-6 text-gray-300 leading-relaxed">
                            At CodeNex, we bridge the gap between theory and practice, empowering students to push the boundaries of technology.
                            We are more than just a tech club; we are a community of innovators, creators, and learners driven by passion.
                        </p>
                        <p className="text-lg mb-8 text-[#B0B0B0] leading-loose">
                            Through hands-on workshops, hackathons, and collaborative projects, we foster an environment where ideas turn into impactful solutions.
                        </p>
                        <button className="bg-gradient-to-r from-[#9747FF] to-[#7A2BFF] text-white px-6 py-3 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                            Meet the Team
                        </button>
                    </div>
                    {/* Visual Element (Interactive or Image Placeholder) */}
                    <div className="flex-1 bg-[#1A1A1A] rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center">
                        {/* Replace with image */}
                        <img src={aboutImage} alt="About background" className="w-full h-full object-cover rounded-lg" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
