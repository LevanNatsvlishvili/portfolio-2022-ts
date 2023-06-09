import React from 'react';
// import Tabs from 'Components/AboutComponents/Tabs';
import { HeaderTagsRenderer } from 'components/Components/HeaderTagsRenderer';
import Button from 'components/Components/Button';
import { paths } from 'utils/Paths';
import Summary from 'components/Pages/About/Summary';
import useStore from 'utils/Store/Context';
import Experience from 'components/Pages/About/Experience';
import Tabs from 'components/Pages/About/Tabs';

const About = () => {
  const { handleNavigationLoading } = useStore();
  return (
    <div className="overflow-auto scroll-bar h-[100vh] pb-16">
      <HeaderTagsRenderer
        title="Web Developer Portfolio Website About"
        metaTitle="Web Developer Portfolio Website"
        description="An experienced Web Developer Portfolio website, proficient in Javascript reactJS and nextJS"
        image="/images/projects/portfolio.png"
      />
      <div className="relative pt-20 sm:pt-32 px-4 md:px-10 z-10 flex grid-cols-12 gap-y-8 gap-x-2 gap-2 md:gap-8 grid">
        <div className="col-span-12 lg:col-span-4 2xl:col-span-3">
          <Summary />
        </div>
        <div className="col-span-12 lg:col-span-8 2xl:col-span-9">
          <Experience />
          <Tabs />
          <div className="px-1">
            <Button
              onClick={() => handleNavigationLoading(paths.projects)}
              className="mt-5 w-full text-base sm:text-2xl"
            >
              Continue To Projects
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
