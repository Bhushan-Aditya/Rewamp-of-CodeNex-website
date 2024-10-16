import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { Instagram, Twitter, Linkedin, MessageCircle } from 'lucide-react';

const Hero = () => {
    return (
        <section className="py-32 px-6 bg-black relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-[#00CCFF] to-black"></div>

            <div className="max-w-4xl mx-auto relative z-10 text-center md:text-left">
                {/* Crown directly above the "C" */}
                <div className="relative inline-block">
                    {/* Crown Positioned Above C */}
                    <FontAwesomeIcon
                        icon={faCrown}
                        size="4x" // Increased size to match the text
                        style={{
                            color: '#FFC700',
                            position: 'absolute',
                            top: '-3.5rem', // Adjusted to properly place it above the "C"
                            left: '0', // Align with "C"
                            transform: 'translateX(-20%) rotate(-20deg)', // Center it properly and tilt it left
                        }}
                    />
                    <h1 className="text-6xl font-bold text-white inline-block">
                        <span className="text-[#00CCFF]">C</span>odeNex Club
                    </h1>
                </div>

                {/* Club Description */}
                <p className="text-2xl mb-8 text-[#B0B0B0] leading-relaxed">
                    We're the tech club of SRM, fostering innovation and collaboration.
                </p>

                {/* Social Icons with Hover Effects */}
                <div className="flex justify-center md:justify-start space-x-6">
                    {[Instagram, Twitter, Linkedin, MessageCircle].map((Icon, index) => (
                        <a
                            key={index}
                            href="#"
                            className="text-[#B0B0B0] hover:text-[#00CCFF] transition-colors duration-300 transform hover:scale-110"
                        >
                            <Icon size={28} />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
