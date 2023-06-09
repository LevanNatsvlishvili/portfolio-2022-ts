import clsx from 'clsx';
import React from 'react';
import Link from 'next/link';
import { paths } from 'utils/Paths';

interface HeaderNavigationMobile {
  isNavOpen: boolean;
}

function HeaderNavigationMobile(props: HeaderNavigationMobile) {
  const { isNavOpen } = props;

  return (
    <nav
      className={clsx(
        `navmenu bg-global overflow-hidden ease-linear flex justify-center items-center text-6xl sm:text-8xl text-center absolute z-20`,
        { '-translate-y-full': !isNavOpen }
      )}
    >
      <ul className="relative">
        <li className="my-10">
          <Link href={paths.home}>Home</Link>
        </li>
        <li className="my-10">
          <Link href={paths.about}>About Me</Link>
        </li>
        <li className="my-10">
          <Link href={paths.projects}>Projects</Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavigationMobile;
