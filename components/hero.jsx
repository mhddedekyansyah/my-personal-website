import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Hero() {
  return (
    <section className="container mx-auto md:max-w-6xl max-w-full md:mt-24" id="home">
      <div className="flex flex-col-reverse items-center md:flex-row md:justify-between justify-center md:items-center">
        <div className="ml-6 md:ml-0">
          <h1 className="font-bold font-poppins text-4xl md:text-7xl tracking-wide">Hi, I'am Dedek</h1>
          <h2 className="font-poppins font-semibold text-secondary mt-1 text-2xl md:text-4xl">
            Junior <span className="text-primary">Mobile Developer</span>
          </h2>
          <p className="font-poppins mt-3 leading-relaxed text-slate-400 mb-10">
            High level experience in mobile design and <span className="md:block">development knowledge, producing quality work.</span>
          </p>
          <div className="flex space-x-4">
            <a href="home" className="py-1 px-2 md:py-4 md:px-6 bg-primary rounded-lg shadow-lg flex space-x-2 items-center">
              <p className="font-poppins text-white tracking-wide text-sm md:text-base">Download CV</p>
              <i className="uil uil-import text-white w-5 h-5"></i>
            </a>
            <a href="home" className="py-4 px-6 bg-primary rounded-lg shadow-lg flex space-x-2 items-center">
              <p className="font-poppins text-white tracking-wide text-sm md:text-base">Contact Me</p>
              <i className="uil uil-message text-white"></i>
            </a>
          </div>
        </div>
        <div className="relative">
          <img src="/profile.png" className="max-w-full mx-auto" />
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-12 right-3 -z-10 -ml-6">
            <path
              fill="#F97316"
              d="M45.6,-64.3C59.4,-62.1,70.9,-49.9,75.8,-35.7C80.8,-21.4,79,-5.1,73.9,8.6C68.7,22.3,60.1,33.4,50.6,43.1C41.1,52.8,30.7,61.1,20.5,59.2C10.3,57.2,0.3,45.2,-8.8,38.6C-17.9,32,-26,30.8,-35.1,26.8C-44.3,22.8,-54.4,16,-56,7.8C-57.6,-0.5,-50.8,-10.3,-43.4,-17.1C-36.1,-24,-28.2,-27.8,-20.9,-33C-13.6,-38.1,-6.8,-44.5,4.6,-51.6C15.9,-58.7,31.9,-66.5,45.6,-64.3Z"
              transform="translate(100 100) scale(1.3)"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Hero;
