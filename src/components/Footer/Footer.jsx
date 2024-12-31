import React, { useState } from 'react';
import logo from '../../assets/logo2.png'
import { FaGithub, FaLinkedinIn, FaInstagram, FaWhatsapp, FaEnvelope, FaFacebook } from 'react-icons/fa';

function Footer() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('loading');
        // Simulate an API call
        setTimeout(() => {
            if (email) {
                setStatus('success');
                setMessage('Subscribed successfully!');
                setEmail('');
            } else {
                setStatus('error');
                setMessage('Please enter a valid email.');
            }
        }, 1000);
    };

    return (
        <footer class="bg-white shadow-md border-t border-gray-200 ">
            <div class="max-w-[95%] sm:max-w-[80vw] mx-auto sm:mt-8 px-4 sm:px-6 lg:px-8">

                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 sm:mb-16">
                    {/* About Section */}
                    <div className='sm:ml-14'>
                        <div className="mt-4 mb-4 w-20"><img src={logo} className='' /></div>
                        <p>We deliver <span className='font-medium'>care</span> with <span className='font-medium'>love</span></p>
                        <div className="flex space-x-4 mt-6">
                            <a
                                href="/"
                                className="sm:hover:bg-[#f0faff] sm:hover:text-mypink"
                            >
                                <FaFacebook size={24} />
                            </a>
                            <a
                                href="/"
                                className="sm:hover:bg-[#f0faff] sm:hover:text-mypink"
                            >
                                <FaInstagram size={24} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/adarsh-20-kumar/"
                                className="sm:hover:bg-[#f0faff] sm:hover:text-mypink"
                            >
                                <FaLinkedinIn size={24} />
                            </a>
                            <a
                                href="https://github.com/adarshroy001"
                                className="sm:hover:bg-[#f0faff] sm:hover:text-mypink"
                            >
                                <FaGithub size={24} />
                            </a>
                        </div>
                    </div>
                    <div className='flex justify-between '>
                        {/* Quick Links */}
                        <div>
                            <h3 class="text-lg font-semibold text-gray-800">Quick Links</h3>
                            <ul class="mt-4 space-y-2">
                                <li><a href="#" class="text-sm text-gray-600 sm:hover:bg-[#f0faff] sm:hover:text-mypink">Privacy Policy</a></li>
                                <li><a href="#" class="text-sm text-gray-600 sm:hover:bg-[#f0faff] sm:hover:text-mypink">Terms of Service</a></li>
                                <li><a href="#" class="text-sm text-gray-600 sm:hover:bg-[#f0faff] sm:hover:text-mypink">Services</a></li>
                            </ul>
                        </div>

                        {/* Contact Us */}
                        <div>
                            <h3 class="text-lg font-semibold text-gray-800">Contact Us</h3>
                            <ul class="mt-4 space-y-1">
                                <li><a href="#" class="text-sm text-gray-600 sm:hover:bg-[#f0faff] sm:hover:text-mypink">+91 9973992132</a></li>
                                <li><a href="#" class="text-sm text-gray-600 sm:hover:bg-[#f0faff] sm:hover:text-mypink">adarshroy2010@gmail.com</a></li>
                                <li><a href="#" class="text-sm text-gray-600 sm:hover:bg-[#f0faff] sm:hover:text-mypink">adarshroy2010@outlook.com</a></li>
                            </ul>
                        </div>

                    </div>

                    {/* About Us */}
                    <div className='sm:max-w-72 sm:ml-14'>
                        <h3 class="text-lg font-semibold text-gray-800">About Us</h3>
                        <p class="mt-4 text-sm text-gray-600">
                            We are dedicated to delivering delicious meals and essentials right to your doorstep. Our mission is to bring quality and convenience together.
                        </p>
                    </div>

                </div>
                {/* Bottom Section */}
                <div class="border-t border-gray-200 py-4">
                    <p class="text-center text-sm text-gray-600">
                        &copy; 2024 Food Delivery, Inc. All rights reserved.
                    </p>
                    <p class="text-center text-sm text-gray-600 mt-2">
                        Made with 🩵 by <span class="font-semibold text-mypink">Adarsh</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

