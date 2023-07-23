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
        title="About - Levan Natsvlishvili - Frontend Developer Portfolio"
        metaTitle="About - Levan Natsvlishvili - Frontend React developer - Skills"
        description="Levan Natsvlishvili, an experienced frontend developer, specializing in Javascript, ReactJS, and NextJS with 4 years of experience. View portfolio to see completed projects."
        image="/images/projects/portfolio.png"
        ogDescription="Discover the portfolio of Levan Natsvlishvili, a seasoned frontend developer. Proficient in Javascript, ReactJS, and NextJS,TailwindCSS with a track record of successful projects. "
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
