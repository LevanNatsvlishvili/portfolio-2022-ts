/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import React from 'react';
import { paths } from 'utils/Paths';
import useStore from 'utils/Store/Context';

interface SocialLink {
  url: string;
  icon: string;
}

const SocialLink = ({ url, icon }: SocialLink) => (
  <a className="px-3 " target="_blank" href={url} rel="noreferrer">
    <div className="text-base flex w-8 h-8">
      <img
        className="socmedia-icon"
        width="30px"
        height="30px"
        src={icon}
        alt="soc media"
      />
    </div>
  </a>
);

interface NavigationLink {
  onClick?: () => void | Promise<unknown>;
  url: string;
  icon: string;
}

const NavigationLink = ({ onClick, icon }: NavigationLink) => (
  <div onClick={onClick} className="px-3 cursor-pointer">
    <div className="text-base flex w-8 h-8">
      <img
        className="socmedia-icon"
        width="30px"
        height="30px"
        src={icon}
        alt="soc media"
      />
    </div>
  </div>
);

interface HeaderContactLinks {
  handleNavOpen: () => void;
  isNavOpen: boolean;
}

function HeaderContactLinks(props: HeaderContactLinks) {
  const { isNavOpen, handleNavOpen } = props;
  const { handleNavigationLoading } = useStore();

  return (
    <div className="flex items-center w-screen fixed px-6 sm:px-10 pt-6 sm:pt-10 z-50">
      <div
        className={clsx('transition-c-2', {
          'navbar-visible': !isNavOpen,
          'navbar-hidden': isNavOpen,
        })}
      >
        <div className="flex items-center mr-16 w-24">
          <NavigationLink
            onClick={() => handleNavigationLoading(paths.home)}
            url={paths.home}
            icon="/images/SocMedia/home.svg"
          />
          <SocialLink
            url="https://www.linkedin.com/in/levnac"
            icon="/images/SocMedia/linkedin.svg"
          />
          <SocialLink
            url="https://github.com/LevanNatsvlishvili"
            icon="/images/SocMedia/github2.svg"
          />
          <SocialLink
            url="https://www.upwork.com/freelancers/~01d797802b8c4359ad"
            icon="/images/SocMedia/upwork.svg"
          />
        </div>
      </div>
      <div className="ml-auto">
        <div className="flex items-center">
          <div
            onClick={handleNavOpen}
            className={clsx('navbutton', { 'navbutton-active': isNavOpen })}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default HeaderContactLinks;
