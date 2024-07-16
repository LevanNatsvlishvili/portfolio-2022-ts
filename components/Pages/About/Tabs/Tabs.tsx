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
          { skill: 'Typescript', time: '3 Year' },
          { skill: 'HTML/CSS', time: '5 Years' },
        ],
      },
      {
        title: 'CSS Frameworks',
        skills: [
          { skill: 'Material-UI', time: '2 Years' },
          { skill: 'Tailwind-CSS', time: '4 Years' },
          { skill: 'Sass', time: '2 Years' },
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
          { skill: 'Javascript', time: '5 Years' },
          { skill: 'React', time: '5 Years' },
          { skill: 'Next', time: '3 Years' },
          { skill: 'Typescript', time: '3 Years' },
          { skill: 'HTML/CSS', time: '5 Years' },
        ],
      },
      {
        title: 'CSS Frameworks',
        skills: [
          { skill: 'Material-UI', time: '2 Years' },
          { skill: 'Tailwind-CSS', time: '4 Years' },
          { skill: 'Sass', time: '2 Years' },
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
            <Skills skillSet={skillSet.sections} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
