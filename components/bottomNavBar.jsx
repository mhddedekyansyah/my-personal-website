import React, { useCallback, useState } from 'react';
import Image from 'next/image';

import { Link } from 'react-scroll';
function BottomNavBar() {
  const [active, setActive] = useState(0);
  let handleActive = useCallback(
    (index) => {
      setActive(index);
    },
    [active]
  );

  return (
    <div className="md:hidden btm-nav">
      <Link className={active === 0 ? 'active' : ''} to="home" spy={true} smooth={true} offset={50} duration={500} onClick={() => handleActive(0)}>
        <Image src="/home.svg" height={30} width={30} alt="Icon Home" />
        <span className="btm-nav-label">Home</span>
      </Link>
      <Link className={active === 1 ? 'active' : ''} to="showcase" spy={true} smooth={true} offset={50} duration={500} onClick={() => handleActive(1)}>
        <Image src="/showcase.svg" height={30} width={30} alt="Icon Showcase" />
        <span className="btm-nav-label">Showcase</span>
      </Link>
      <Link className={active === 2 ? 'active' : ''} to="skills" spy={true} smooth={true} offset={50} duration={500} onClick={() => handleActive(2)}>
        <Image src="/fire.svg" height={30} width={30} alt="Icon Skills" />
        <span className="btm-nav-label">Skills</span>
      </Link>
      <Link className={active === 3 ? 'active' : ''} to="about" spy={true} smooth={true} offset={50} duration={500} onClick={() => handleActive(3)}>
        <Image src="/user.svg" height={30} width={30} alt="Icon About Me" />
        <span className="btm-nav-label">About Me</span>
      </Link>
    </div>
  );
}

export default BottomNavBar;
