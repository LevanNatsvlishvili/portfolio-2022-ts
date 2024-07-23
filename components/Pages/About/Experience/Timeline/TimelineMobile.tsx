import React, { useEffect, useState } from 'react';
import { Timeline, Company, StaticPositions, TimelineDot } from './Types';

const staticPositions: StaticPositions = {
  1: [45],
  2: [0, 85],
  3: [0, 40, 85],
  4: [0, 30, 60, 85],
};

const TimelineMobile = (props: Timeline) => {
  const { companies, handleCompany, curr } = props;
  const [positions, setPositions] = useState<Company[]>([]);

  const calculateDotPositions = (): Company[] => {
    if (companies.length <= 4) {
      const chosenPositions = staticPositions[companies.length];
      const newArr = companies.map((company, index) => ({
        ...company,
        position: chosenPositions[index],
      }));
      return newArr;
    }

    const sectionPercentage = 100 / companies.length;
    const arr: Company[] = [];

    for (let i = 0; i < companies.length; i++) {
      const newPosition = sectionPercentage * i;
      arr.push({ ...companies[i], position: newPosition });
    }
    return arr;
  };

  useEffect(() => {
    setPositions(calculateDotPositions());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full  flex items-center">
      <div style={{ height: positions.length * 5 + 'rem' }} className={`ml-4 w-full  relative`}>
        <div className="w-2.5 h-full rounded-3xl bg-[#2C3D7A]" />
        {positions?.map((position, index) => (
          <TimelineDot
            key={index}
            company={position}
            isLast={positions.length - 1 === index}
            handleCompany={() => handleCompany(index)}
            active={curr === index}
          />
        ))}
      </div>
    </div>
  );
};

const TimelineDot = (props: TimelineDot) => {
  const { company, isLast, active, handleCompany } = props;
  return (
    <div
      onClick={handleCompany}
      style={isLast ? { bottom: 0 } : { top: `${company.position}%` }}
      className="absolute left-9 flex flex-col  cursor-pointer"
    >
      <h1 className="text-white text-base sm:text-xl ">{company.timelineTitle}</h1>
      <div className={`w-4 h-4 ${active ? 'bg-orange' : 'bg-grey-text'} rounded-1/2 -ml-10 mt-6 absolute `} />
      <p className="text-grey-text text-sm sm:text-base  firago-light">[{company.timelineDate}]</p>
    </div>
  );
};

export default TimelineMobile;
