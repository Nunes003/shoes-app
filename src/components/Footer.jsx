import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="body-font relative">
      <div className="container px-5 py-12 mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex-grow sm:flex space-x-6 sm:space-y-0">
          <div className="flex flex-col mb-4">
            <a href="/products" className="text-gray-600 not-italic text-left font-bold mb-4">PRODUCTS</a>
            <a href="#" className="text-gray-600 not-italic text-left font-bold">FAQs</a>
          </div>
          <div className="flex flex-col mb-4">
            <a href="#" className="text-gray-600 not-italic text-left font-bold mb-4">GET HELP</a>
            <a href="#" className="text-gray-600 not-italic text-left font-bold">Contacts</a>
          </div>
          <div className="flex flex-col mb-4">
            <a href="#" className="text-gray-600 not-italic text-left font-bold mb-4">ABOUT US</a>
            <a href="#" className="text-gray-600 not-italic text-left font-bold">Careers</a>
          </div>
        </div>
        <Logo />
      </div>
      <div className="text-gray-600 not-italic mt-4">
        © 2023 Underline, Inc. All Rights Reserved | Terms of Use | Privacy & Cookie Policy
      </div>
      <span className="absolute bottom-0 right-0 p-4 text-gray-600 not-italic">
        Made By: João Nunes
      </span>
    </footer>
  );
};

export default Footer;
