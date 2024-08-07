/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const Summary = () => {
  return (
    <div className="styled-card w-full flex-col pt-12 h-full p-5 flex items-center">
      <div className="about-image-container w-[200px] h-[200px] ">
        <img
          className="about-image-container-image"
          src="/images/me-about-2.jpg"
          alt="Frontend developer React developer NextJS ReactJS"
        />
      </div>
      <h5 className="pt-8 text-center text-grey-text text-3xl text-white">Levan Natsvlishvili</h5>
      <h1 className="pt-1 text-center pb-6 text-grey-text text-xl text-orange">Sr Frontend/Creative Developer</h1>
      <p className="text-grey-text p-2  text-base scroll-bar firago-light lg:h-80 overflow-auto">
        {/* Software Engineer with <span className="text-orange">4 years of experience</span> in Web development focusing on
        Frontend development. <br />
        Primary tech stack consisting of #React, #Next, #Javascript & #Typescript. <br />
        Experienced in NodeJS/Express/Nest, React-Native
        <br />
        <span className="text-orange">Open to offers:</span> Frontend developer, React developer, Fullstack developer,
        React Native developer */}
        Senior <span className="text-orange">Frontend/Creative developer</span> with 5 years of experience. Expertise at
        <span className="text-orange"> React, Next, Three.JS.</span> Done more than 8 projects of various sizes and
        comlexities, including starting project from scratch and shipping into production. <br />
        {/* Familiar and Passionate about WebGL Technologies: <span className="text-orange">ThreejS, Canva,PixiJS. </span> */}
        <br />
        Passionate about Frontend development, animations, creative development and WebGL technologies, such as{' '}
        <span className="text-orange">ThreeJS</span>. Interested to delve into{' '}
        <span className="text-orange">AR/VR</span> technologies.
        <br />
        Experienced as Fullstack developer using NodeJS, NestJS.
      </p>
    </div>
  );
};

export default Summary;
