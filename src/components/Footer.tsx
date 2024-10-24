import React from 'react';
import { Copyright } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t mt-auto py-4">
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-center gap-2 text-sm text-gray-600">
        <Copyright className="h-4 w-4" />
        <a 
          href="https://lyvena.xyz/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors"
        >
          Lyvena.
        </a>
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;