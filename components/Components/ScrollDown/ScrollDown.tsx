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
        'w-full flex items-center flex-col -mb-10-0 duration-1000 opacity-0 absolute top-[75%] left-[50%] -translate-x-[50%]',
        currView === 0 && '!opacity-100'
      )}
    >
      <div className="relative flex justify-center w-[-webkit-fill-available]">
        <img src="/images/icons/scroll.svg" className="absolute md:visible invisible" alt="section-Scroll" />
        <img src="/images/icons/scrollMobile.svg" className="absolute md:invisible visible" alt="arrow" />
        <div className="absolute top-10 scroll-arrow">
          <img src="/images/icons/scrollArrow.svg" alt="" />
        </div>
        <p className="absolute top-14 invisible md:visible text-lg mt-4">Scroll down to navigate</p>
        <p className="absolute top-14 visible md:invisible text-lg mt-4">Swipe down to navigate</p>
      </div>
    </div>
  );
};

export default ScrollDown;
