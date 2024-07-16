import clsx from 'clsx';
import React, { ReactNode, useEffect, useState } from 'react';
import { tabsInterface } from './Tabs';

interface Switch {
  currTab: number;
  handleTab: (p: number) => void;
  tabs: tabsInterface[];
}
interface Buttons {
  title: string;
  active: boolean;
  divide: number;
}

const Switch = (props: Switch) => {
  const { currTab, handleTab, tabs } = props;
  const [divider, setDivider] = useState(2);

  useEffect(() => {
    const dividerNum = 100 / tabs.length;
    setDivider(dividerNum);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const LeftButton = ({ title, active, divide, ...rest }: Buttons) => (
    <div
      className={clsx('h-full cursor-pointer transition flex ', active && 'blue-neon-button')}
      style={{ width: `${divide}%` }}
      {...rest}
    >
      <div className="h-full w-full flex items-center justify-center text-base text-grey-text ">{title}</div>
      <div className="h-full bg-[#2c3d7a] opacity-40 w-1 blue-glow shadow-blue-glow" />
    </div>
  );
  const RightButton = ({ title, active, divide, ...rest }: Buttons) => (
    <div
      className={clsx('h-full cursor-pointer transition flex ', active && 'blue-neon-button')}
      style={{ width: `${divide}%` }}
      {...rest}
    >
      <div className="h-full w-full flex items-center justify-center text-base text-grey-text ">{title}</div>
    </div>
  );
  const MiddleButton = ({ title, active, divide, ...rest }: Buttons) => (
    <div
      className={clsx('h-full cursor-pointer transition flex', active && 'blue-neon-button')}
      style={{ width: `${divide}%` }}
      {...rest}
    >
      <div className="h-full w-full flex items-center justify-center text-base text-grey-text ">{title}</div>
      <div className="h-full bg-[#2c3d7a] opacity-40 w-1 blue-glow shadow-blue-glow" />
    </div>
  );

  const generateButton = (tab: string, i: number) => {
    const last = tabs.length - 1 === i;
    const props = {
      key: i,
      onClick: () => handleTab(i),
      divide: divider,
      active: currTab === i,
    };
    if (i === 0) return <LeftButton title={tab} {...props} />;
    if (last) return <RightButton title={tab} {...props} />;
    return <MiddleButton title={tab} {...props} />;
  };

  return (
    <div className="w-full h-20 flex px-2 items-center">
      <div className="w-full h-10 styled-card flex items-center p-0  transition">
        {tabs.map((tab, i) => generateButton(tab.title, i))}
      </div>
    </div>
  );
};

export default Switch;
