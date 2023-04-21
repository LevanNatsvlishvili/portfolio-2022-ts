import FrontText from 'components/Animations/FrontText';
import Button from 'components/Components/Button';
import React from 'react';
import { paths } from 'utils/Paths';
import useStore from 'utils/Store/Context';
import Slider from './Slider';

function About() {
  const { currView, handleNavigationLoading } = useStore();

  return (
    <section>
      <div className="w-full absolute left-1/5 sm:left-40 z-10">
        <FrontText
          shouldDisplay={currView === 2}
          heading1="Projects"
          bottom="Portfolio"
        />
        <div>
          <Button onClick={() => handleNavigationLoading(paths.projects)}>
            Read More
          </Button>
        </div>
      </div>
      <Slider shouldDisplay={currView === 2} />
    </section>
  );
}

export default About;
