import React from 'react';
import Navbar from './navbar';
import Image from 'next/image';

function Header() {
  return (
    <header className="mt-6 h-12 sticky top-0">
      <div className="flex items-center justify-between">
        <h1 className="font-poppins font-semibold text-3xl text-orange-300 hidden md:block">Dedek</h1>

        <div className="hidden md:inline-block">
          <Navbar />
        </div>
      </div>
    </header>
  );
}

export default Header;
