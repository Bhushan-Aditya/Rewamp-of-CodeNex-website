import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faLinkedin, faGithub, faFacebook, faYoutube, faTiktok, faDiscord, faSnapchat } from '@fortawesome/free-brands-svg-icons';

const Socials = () => {
    return (
        <section className="py-20 px-6 bg-black">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center text-white">Let's check out our socials</h2>
                <div className="grid grid-cols-3 gap-6">
                    {/* Instagram */}
                    <div className="bg-gradient-to-r from-[#E4405F] to-[#FC2D75] aspect-square rounded-lg border border-[#E4405F] transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#E4405F]">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-full p-4">
                            <FontAwesomeIcon icon={faInstagram} size="3x" className="text-white transition-colors duration-300 hover:text-[#FC2D75]" />
                        </a>
                    </div>

                    {/* Twitter */}
                    <div className="bg-gradient-to-r from-[#1DA1F2] to-[#1A91DA] aspect-square rounded-lg border border-[#1DA1F2] transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#1DA1F2]">
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-full p-4">
                            <FontAwesomeIcon icon={faTwitter} size="3x" className="text-white transition-colors duration-300 hover:text-[#1A91DA]" />
                        </a>
                    </div>

                    {/* LinkedIn */}
                    <div className="bg-gradient-to-r from-[#0077B5] to-[#006097] aspect-square rounded-lg border border-[#0077B5] transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#0077B5]">
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-full p-4">
                            <FontAwesomeIcon icon={faLinkedin} size="3x" className="text-white transition-colors duration-300 hover:text-[#006097]" />
                        </a>
                    </div>

                    {/* Github */}
                    <div className="bg-gradient-to-r from-[#24292F] to-[#181717] aspect-square rounded-lg border border-[#24292F] transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#24292F]">
                        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-full p-4">
                            <FontAwesomeIcon icon={faGithub} size="3x" className="text-white transition-colors duration-300 hover:text-[#181717]" />
                        </a>
                    </div>

                    {/* Facebook */}
                    <div className="bg-gradient-to-r from-[#1877F2] to-[#2D88F7] aspect-square rounded-lg border border-[#1877F2] transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#1877F2]">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-full p-4">
                            <FontAwesomeIcon icon={faFacebook} size="3x" className="text-white transition-colors duration-300 hover:text-[#2D88F7]" />
                        </a>
                    </div>

                    {/* YouTube */}
                    <div className="bg-gradient-to-r from-[#FF0000] to-[#FF2D00] aspect-square rounded-lg border border-[#FF0000] transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#FF0000]">
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-full p-4">
                            <FontAwesomeIcon icon={faYoutube} size="3x" className="text-white transition-colors duration-300 hover:text-[#FF2D00]" />
                        </a>
                    </div>

                    {/* TikTok */}
                    <div className="bg-gradient-to-r from-[#010101] to-[#69C9D0] aspect-square rounded-lg border border-[#010101] transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#010101]">
                        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-full p-4">
                            <FontAwesomeIcon icon={faTiktok} size="3x" className="text-white transition-colors duration-300 hover:text-[#69C9D0]" />
                        </a>
                    </div>

                    {/* Discord */}
                    <div className="bg-gradient-to-r from-[#5865F2] to-[#4E5D94] aspect-square rounded-lg border border-[#5865F2] transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#5865F2]">
                        <a href="https://www.discord.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-full p-4">
                            <FontAwesomeIcon icon={faDiscord} size="3x" className="text-white transition-colors duration-300 hover:text-[#4E5D94]" />
                        </a>
                    </div>

                    {/* Snapchat */}
                    <div className="bg-gradient-to-r from-[#FFFC00] to-[#F8C200] aspect-square rounded-lg border border-[#FFFC00] transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#FFFC00]">
                        <a href="https://www.snapchat.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-full p-4">
                            <FontAwesomeIcon icon={faSnapchat} size="3x" className="text-white transition-colors duration-300 hover:text-[#F8C200]" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Socials;
