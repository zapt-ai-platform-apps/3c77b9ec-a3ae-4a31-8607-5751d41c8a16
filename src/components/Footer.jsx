import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div>
          <p className="text-sm">© 2025 Cactus Media. All rights reserved.</p>
        </div>
        <div>
          <a 
            href="https://www.zapt.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm hover:text-primary transition-colors duration-300"
          >
            Made on ZAPT
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;