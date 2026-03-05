import logo from '../assets/logo.png';

import React, { useState } from 'react';
// icons used for mobile menu toggle
import { Menu, X } from 'lucide-react';

export default function Navbar(){
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <img
                            src={logo}
                            alt="codeFlow"
                            className="w-6 h-6 sm:w-8 sm:h-8"
                        />
                        <span className="ml-2 text-lg sm:text-xl md:text-2xl font-medium">
                            <span className="text-white">Code</span>
                            <span className="text-blue-400">Flow</span>
                        </span>
                    </div>
                    <div className="flex items-center space-x-6 lg:space-x-8">
                        <a href="#features" 
                        onClick={() => setMobileMenuIsOpen(false)}
                        className="text-gray-300 hover:text-white text-sm ld:text-base">Features</a>
                        <a href="#pricing" 
                        onClick={() => setMobileMenuIsOpen(false)}
                        className="text-gray-300 hover:text-white text-sm ld:text-base">Pricing</a>
                        <a href="#testimonials" 
                        onClick={() => setMobileMenuIsOpen(false)}
                        className="text-gray-300 hover:text-white text-sm ld:text-base">Testimonials</a>
                    </div>

                    <button
                        className="md:hidden p-2 text-gray-300 hover:text-white"
                        onClick={() => setMobileMenuIsOpen(prev => !prev)}>
                            {mobileMenuIsOpen ? (
                                <X className="w-5 h-5 sm:w-6 sm:h-6" />
                            ) : (
                                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                            )}

                    </button>
                </div>
            </div>
            {mobileMenuIsOpen && 
                <div  className='md:hidden bg-slate-900/95 blackdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top duration-300' >
                    <div className='px-4 py-4 sm:py-6 space-y-3 sm:space-y-4'>
                    <a href="#features" 
                    
                    className="block  text-gray-300 hover:text-white text-sm ld:text-base">Features</a>
                        <a href="#pricing" className="block text-gray-300 hover:text-white text-sm ld:text-base">Pricing</a>
                        <a href="#testimonials" className="block  text-gray-300 hover:text-white text-sm ld:text-base">Testimonials</a>
                    </div>
                    </div>}
        </nav>
    );
}