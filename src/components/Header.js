import React from 'react';

const Header = () => {
    return (
        <header className="py-6 px-6 bg-black flex justify-between items-center">
            {/* Your logo or any other header content */}
            <img
                src={require('./logo.png')}  // Update the path as needed
                alt="Logo"                   // Add a meaningful alt text for accessibility
                className="h-10"
            />
            {/* Navigation links */}
            <nav>
                <ul className="flex space-x-6">
                    <li>
                        <a
                            href="#"
                            className="text-white hover:text-[#00CCFF] transition duration-300 transform hover:scale-110"
                        >
                            HOME
                        </a>
                    </li>
                    <li>
                        <a
                            href="#team"
                            className="text-white hover:text-[#00CCFF] transition duration-300 transform hover:scale-110"
                        >
                            TEAM
                        </a>
                    </li>
                    <li>
                        <a
                            href="#courses"
                            className="text-white hover:text-[#00CCFF] transition duration-300 transform hover:scale-110"
                        >
                            COURSE
                        </a>
                    </li>
                    <li>
                        <a
                            href="#newsletter"
                            className="text-white hover:text-[#00CCFF] transition duration-300 transform hover:scale-110"
                        >
                            NEWSLETTER
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="text-white hover:text-[#00CCFF] transition duration-300 transform hover:scale-110"
                        >
                            CONTACT
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
