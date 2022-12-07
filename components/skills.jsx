import React from 'react';

function Skills() {
  let sosmed = [
    {
      logo: '/',
    },
  ];

  return (
    <section id="skills">
      <div>
        <h1 className="font-poppins font-bold text-2xl mb-3 md:text-5xl">Skills</h1>
        <div className="w-16 md:w-32 h-1 bg-primary rounded-full -mt-2 mb-5"></div>
      </div>
      <div className="flex flex-wrap"></div>
    </section>
  );
}

export default Skills;
