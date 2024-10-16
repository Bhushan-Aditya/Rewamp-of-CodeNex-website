import React, { useState } from 'react';

const Contact = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="py-20 px-6 bg-black">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4 text-white">Want to Collaborate?</h2>
                <h1 className="text-5xl font-bold mb-6 text-white">Let's Talk</h1>
                <button
                    className={`bg-[#9747FF] text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${isHovered ? 'animate-pulse' : ''}`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    CONTACT US
                </button>
            </div>
        </section>
    );
};

export default Contact;
