import React, { useState } from 'react';
import HeaderContactLinks from './HeaderContactLinks';
import dynamic from 'next/dynamic';
import { useMediaQuery } from 'react-responsive';

const HeaderNavigation = dynamic(() => import('./HeaderNavigation'), { ssr: false });
const HeaderNavigationMobile = dynamic(() => import('./HeaderNavigationMobile'), { ssr: false });
const HeaderScrollNav = dynamic(() => import('./HeaderScrollNav'), { ssr: false });

interface Head {
  currView: number;
  setCurrView: (p: number) => void;
  shouldScrollDisplay: boolean;
}

function Head(props: Head) {
  const { currView, setCurrView, shouldScrollDisplay } = props;
  const [isNavOpen, setIsNavOpen] = useState(false);
  const isNavMenuNeeded = useMediaQuery({ query: '(max-width: 1024px)' });

  const handleNavOpen = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <header className="fixed w-full z-20">
      <HeaderContactLinks isNavOpen={isNavOpen} handleNavOpen={handleNavOpen} />

      <div className="hidden md:block">
        {isNavMenuNeeded && <HeaderNavigation isNavOpen={isNavOpen} handleNavOpen={handleNavOpen} />}
      </div>
      <div className="block md:hidden">{isNavMenuNeeded && <HeaderNavigationMobile isNavOpen={isNavOpen} />}</div>

      {shouldScrollDisplay && <HeaderScrollNav currView={currView} setCurrView={setCurrView} />}
    </header>
  );
}

export default Head;
