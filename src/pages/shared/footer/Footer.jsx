import React from 'react';
import footerlogo from '../../../assets/footerlogo.png';
import { IoLogoGithub, IoLogoYoutube } from 'react-icons/io';
import { FaFacebookSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-black'>
      <footer className="bg-neutral text-neutral-content px-4 sm:px-8 py-10 max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Logo and Branding */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <img src={footerlogo} className="max-w-[180px]" alt="Applica Footer Logo" />
            <p className="text-sm text-center md:text-left">
              © Applica {new Date().getFullYear()} — All rights reserved.
            </p>
          </div>

          {/* Footer Navigation Links */}
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h4 className="font-semibold text-lg">Links</h4>
            <a href="/terms" className="hover:underline">Terms of Service</a>
            <a href="/privacy" className="hover:underline">Privacy Policy</a>
            <a href="/developer" className="hover:underline">Developer Resources</a>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <h4 className="font-semibold text-lg">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/md.mofakhkharul.islam.maruf/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-500 transition-colors"
                title="Facebook"
              >
                <FaFacebookSquare size={28} />
              </a>
              <a
                href="https://github.com/Md-Mofakhkharul-Islam-Maruf"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-300 transition-colors"
                title="GitHub"
              >
                <IoLogoGithub size={28} />
              </a>
              <a
                href="https://www.youtube.com/@marufhasan5422"
                target="_blank"
                rel="noreferrer"
                className="hover:text-red-500 transition-colors"
                title="YouTube"
              >
                <IoLogoYoutube size={28} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
