import React, { useState } from 'react';
import HeaderContactLinks from './HeaderContactLinks';
import HeaderNavigation from './HeaderNavigation';
import HeaderNavigationMobile from './HeaderNavigationMobile';
import HeaderScrollNav from './HeaderScrollNav';

interface Head {
  currView: number;
  setCurrView: (p: number) => void;
  shouldScrollDisplay: boolean;
}

function Head(props: Head) {
  const { currView, setCurrView, shouldScrollDisplay } = props;
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavOpen = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="fixed w-full z-20">
      <HeaderContactLinks isNavOpen={isNavOpen} handleNavOpen={handleNavOpen} />

      <div className="hidden md:block">
        <HeaderNavigation isNavOpen={isNavOpen} handleNavOpen={handleNavOpen} />
      </div>
      <div className="block md:hidden">
        <HeaderNavigationMobile isNavOpen={isNavOpen} />
      </div>

      {shouldScrollDisplay && (
        <HeaderScrollNav currView={currView} setCurrView={setCurrView} />
      )}
    </header>
  );
}

export default Head;
