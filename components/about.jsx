import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
function About() {
  let sosmed = [
    {
      logo: '/linkedin.svg',
      href: 'https://www.linkedin.com/in/mhd-dedek-yansyah-17723b224/',
    },
    {
      logo: '/github.svg',
      href: 'https://github.com/mhddedekyansyah',
    },
    {
      logo: '/instagram-alt.svg',
      href: 'https://instagram.com/dedekyansyah',
    },
  ];
  return (
    <section className="mt-10 ml-6 md:ml-0 mr-6 mb-36 md:mt-36 md:max-w-6xl md:container md:mx-auto max-w-full" id="about">
      <div className="flex flex-col items-center">
        <h1 className="font-poppins font-bold text-2xl mb-3 md:text-5xl">About Me</h1>
        <div className="w-16 md:w-32 h-1 bg-primary rounded-full -mt-2 mb-5"></div>
        <div className="flex items-center space-x-3">
          <div className="w-36 h-44 bg-orange-400 rounded-lg relative">
            <Image src="/profile.png" height={200} width={300} alt="Dedek" className="absolute bottom-0 -mb-[37px] max-w-full" />
          </div>

          <div>
            <p className="font-poppins font-medium text-gray-400 md:mt-10 max-w-2xl leading-8">
              I’am <span className="text-primary">Mhd Dedek Yansyah</span> and I love exploring new things, especially in programming and development planning. I have 2+ years of experience in software development with various programming
              frameworks. Feel free to hit the email or contact me button if you want to talk about technology or music, or football with me. Specialties: Flutter, and React Native
            </p>
            <div className="flex items-center mt-3 space-x-5">
              {sosmed.map((menu, index) => {
                return (
                  <Link key={index} href={menu.href} target="_blank" className="cursor-pointer">
                    <Image src={menu.logo} height={45} width={45} alt="Social Media" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
