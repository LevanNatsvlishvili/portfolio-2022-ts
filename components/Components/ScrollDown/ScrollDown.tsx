/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import React, { FC } from 'react';

interface ScrollDownProps {
  currView: number;
}

const ScrollDown: FC<ScrollDownProps> = ({ currView }) => {
  return (
    <div
      className={clsx(
        'flex items-center flex-col -mb-10-0 duration-1000 opacity-0 absolute top-[75%] left-[50%] -translate-x-[50%]',
        {
          '!opacity-100': currView === 0,
        }
      )}
    >
      <img src="/images/icons/scroll.svg" className="md:block hidden" alt="section-Scroll" />
      <img src="/images/icons/scrollMobile.svg" className="md:hidden block" alt="arrow" />
      <div className="scroll-arrow">
        <img src="/images/icons/scrollArrow.svg" alt="" />
      </div>
      <p className="hidden md:block text-lg mt-4">Scroll down to navigate</p>
      <p className="block md:hidden text-lg mt-4">Swipe down to navigate</p>
    </div>
  );
};

export default ScrollDown;
