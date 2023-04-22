import React, { useEffect, useState } from 'react';

interface StaticPositions {
  [index: number]: number[];
}

const staticPositions: StaticPositions = {
  1: [45],
  2: [0, 85],
  3: [0, 40, 85],
  4: [0, 30, 60, 85],
};

interface Company {
  timelineTitle: string;
  timelineDate: string;
  position?: number;
}

interface Timeline {
  curr: number;
  handleCompany: (i: number) => void;
  companies: Company[];
}

const TimelineDesktop = (props: Timeline) => {
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
    <div className="w-full h-20 flex items-center">
      <div className="w-full h-2.5 rounded-3xl bg-[#2C3D7A] relative">
        {positions.length &&
          positions.map((position, index) => (
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

interface TimelineDot {
  company: Company;
  isLast: boolean;
  active: boolean;
  handleCompany: () => void;
}

const TimelineDot = ({
  company,
  isLast,
  active,
  handleCompany,
}: TimelineDot) => (
  <div
    onClick={handleCompany}
    style={isLast ? { right: 0 } : { left: `${company.position}%` }}
    className="absolute -top-9 flex flex-col items-center cursor-pointer"
  >
    <h1 className="text-white text-base sm:text-xl mb-1">
      {company.timelineTitle}
    </h1>
    <div
      className={`w-4 h-4 ${
        active ? 'bg-orange' : 'bg-grey-text'
      } rounded-1/2 mt-1 sm:mt-0.5 `}
    />
    <p className="text-grey-text text-sm sm:text-base mt-2 firago-light">
      [{company.timelineDate}]
    </p>
  </div>
);

export default TimelineDesktop;
