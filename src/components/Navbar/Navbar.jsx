import React, { useState } from 'react';
import Logo from '../../assets/Logo.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bg-white shadow-md">
            <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-6 lg:px-8">
                <img src={Logo} alt="Innovate Logo" className="w-[103px] h-[60px]" />

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 lg:space-x-8 text-sm font-medium text-gray-700">
                    <a href="#" className="hover:text-orange-500 text-Osan font-semibold text-[16px] lg:text-[18px]">Home</a>
                    <a href="#" className="hover:text-orange-500 text-Osan font-semibold text-[16px] lg:text-[18px]">About</a>
                    <a href="#" className="hover:text-orange-500 text-Osan font-semibold text-[16px] lg:text-[18px]">Service</a>
                    <a href="#" className="hover:text-orange-500 text-Osan font-semibold text-[16px] lg:text-[18px]">Portfolio</a>
                    <a href="#" className="hover:text-orange-500 text-Osan font-semibold text-[16px] lg:text-[18px]">Price</a>
                    <a href="#" className="hover:text-orange-500 text-Osan font-semibold text-[16px] lg:text-[18px]">Blog</a>
                </div>

                <a href="#" className="hidden md:block w-[130px] lg:w-[150px] h-[50px] lg:h-[60px] bg-orange-500 text-white px-[24px] lg:px-[28px] py-[12px] lg:py-[14px] rounded-[50px] lg:rounded-[100px] text-[16px] lg:text-[18px] leading-[200%] font-semibold hover:bg-orange-600">
                    Contact Us
                </a>

                {/* Mobile Menu Button */}
                <button onClick={toggleMenu} className="md:hidden text-orange-500 focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden px-4 pt-2 pb-3 space-y-1">
                    <a href="#" className="block text-gray-700 hover:text-orange-500 text-Osan font-semibold text-[16px]">Home</a>
                    <a href="#" className="block text-gray-700 hover:text-orange-500 text-Osan font-semibold text-[16px]">About</a>
                    <a href="#" className="block text-gray-700 hover:text-orange-500 text-Osan font-semibold text-[16px]">Service</a>
                    <a href="#" className="block text-gray-700 hover:text-orange-500 text-Osan font-semibold text-[16px]">Portfolio</a>
                    <a href="#" className="block text-gray-700 hover:text-orange-500 text-Osan font-semibold text-[16px]">Price</a>
                    <a href="#" className="block text-gray-700 hover:text-orange-500 text-Osan font-semibold text-[16px]">Blog</a>
                    <a href="#" className="block text-orange-500 bg-white border border-orange-500 hover:bg-orange-600 hover:text-white rounded-[50px] lg:rounded-[100px] text-[16px] px-6 py-3 font-semibold text-center">Contact Us</a>
                </div>
            )}
        </div>
    );
};

export default Navbar;
