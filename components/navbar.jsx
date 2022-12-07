import React, { useState, useCallback } from 'react';
import { Link } from 'react-scroll';
import Image from 'next/image';
function Navbar() {
  const [active, setActive] = useState(0);
  let handleActive = useCallback(
    (index) => {
      setActive(index);
    },
    [active]
  );
  const menus = [
    {
      name: 'Home',
    },
    {
      name: 'Showcase',
    },
    {
      name: 'About',
    },

    {
      name: 'Skills',
    },
  ];

  return (
    <>
      <nav>
        <ul className="flex space-x-7">
          <li className="text-primary font-poppins cursor-pointer hover:text-orange-400 font-medium">
            <a href="#home">Home</a>
          </li>
          <li className="text-primary font-poppins cursor-pointer hover:text-orange-400 font-medium">
            {' '}
            <a href="">Showcase</a>
          </li>
          <li className="text-primary font-poppins cursor-pointer hover:text-orange-400 font-medium">
            <Link className={active === 3 ? 'active' : ''} to="about" spy={true} smooth={true} offset={50} duration={500} onClick={() => handleActive(3)}>
              <span className="btm-nav-label">About Me</span>
            </Link>
          </li>
          <li className="text-primary font-poppins cursor-pointer hover:text-orange-400 font-medium">
            <Link className={active === 4 ? 'active' : ''} to="skills" spy={true} smooth={true} offset={50} duration={500} onClick={() => handleActive(3)}>
              <span className="btm-nav-label">Skills</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
