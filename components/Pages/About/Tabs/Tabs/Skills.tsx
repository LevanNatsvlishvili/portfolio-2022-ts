/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { sectionsInterface } from '../Tabs';

interface SkillsProps {
  skillSet: sectionsInterface[];
}

const Skills = (props: SkillsProps) => {
  const { skillSet } = props;

  return (
    <div className="grid-cols-12  mb-8 my-3">
      <div className="styled-card text-grey-text p-4 ">
        <div className="scroll-bar overflow-y-auto overflow-x-hidden h-60 ">
          <div className="w-full grid grid-cols-3 grid-flow-col gap-x-5 gap-y-3">
            {skillSet.map((section, i: number) => (
              <div key={i} className="">
                <h2 className="text-lg font-semibold">{section.title}</h2>
                <ul>
                  {section.skills.map((skill, i) => (
                    <li key={i}>
                      <Skill skill={skill.skill} time={skill.time} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface Skill {
  skill: string;
  time?: string;
}

const Skill = (props: Skill) => {
  const { skill, time } = props;
  return (
    <div className="flex">
      <div className="">
        <h3 className="text-sm text-grey-text">{skill}</h3>
      </div>
      <p className="text-sm ml-auto self-center text-grey-text">{time}</p>
    </div>
  );
};

export default Skills;
