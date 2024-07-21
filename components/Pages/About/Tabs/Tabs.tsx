/* eslint-disable react/jsx-key */
import React, { Fragment, useState } from 'react';
import Skills from './Tabs/Skills';
import Switch from './TabsSwitchButtons';

const tabs: tabsInterface[] = [
  {
    title: 'Frontend',
    sections: [
      {
        title: 'Main',
        skills: [
          { skill: 'Javascript', time: '5 Years' },
          { skill: 'React', time: '5 Years' },
          { skill: 'Next', time: '3 Years' },
          { skill: 'Typescript', time: '2 Years' },
          { skill: 'HTML/CSS', time: '5 Years' },
        ],
      },
      {
        title: 'CSS Frameworks & Libraries',
        skills: [
          { skill: 'Material-UI', time: '4 Years' },
          { skill: 'Bootstrap', time: '2 Years' },
          { skill: 'Tailwind-CSS', time: '4+ Years' },
          { skill: 'Sass', time: '3 Years' },
          { skill: 'JSS', time: '2 Years' },
        ],
      },
      {
        title: 'WebGL & 3D',
        skills: [
          { skill: 'Threejs', time: '1-2 Years' },
          { skill: 'Canva', time: '2 Years' },
          { skill: 'Pixi', time: '<1 Years' },
        ],
      },
      {
        title: 'Animation tools',
        skills: [
          { skill: 'Framer-motion', time: '2 Years' },
          { skill: 'GsAP', time: '1-2 Years' },
        ],
      },
      {
        title: 'Other',
        skills: [
          { skill: 'Git', time: '5 Years' },
          { skill: 'GsAP', time: '1-2 Years' },
        ],
      },
    ],
  },
  {
    title: 'Backend',
    sections: [
      {
        title: 'Main',
        skills: [
          { skill: 'Node', time: '2 Years' },
          { skill: 'NestJS', time: '1+ Years' },
          { skill: 'Express', time: '1 Years' },
        ],
      },
      {
        title: 'Databases',
        skills: [
          { skill: 'Posgresql', time: '1 Years' },
          { skill: 'Mysql', time: '1 Years' },
        ],
      },
    ],
  },
  {
    title: 'Education And Certifications',
    sections: [
      {
        title: 'University',
        skills: [{ skill: 'Georgian Technical university - Computer Science', time: '2015-2019' }],
      },
      {
        title: 'Certifications',
        skills: [
          { skill: 'Geolab React course', time: '2020' },
          { skill: 'Arc Certifed Javascript developer', time: '2024' },
        ],
      },
    ],
  },
];

export interface tabsInterface {
  title: string;
  sections: sectionsInterface[];
}

export interface sectionsInterface {
  title: string;
  skills: skillsInterface[];
}

interface skillsInterface {
  skill: string;
  time: string;
}

const Tabs = () => {
  const [currTab, setCurrTab] = useState<number>(0);

  const handleTab = (newCurr: number) => {
    setCurrTab(newCurr);
  };

  return (
    <div>
      {/* Switch tabs buttons */}
      <Switch handleTab={handleTab} currTab={currTab} tabs={tabs} />

      {/* Tabs that display skills */}
      <div className="overflow-hidden h-72 pl-2 mt-2 ">
        <div style={{ transform: `translateY(-${currTab * 19}rem)` }} className="px-2 -ml-2 transition duration-500">
          {tabs.map((skillSet: tabsInterface, i) => (
            <Skills key={i} skillSet={skillSet.sections} title={skillSet.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
