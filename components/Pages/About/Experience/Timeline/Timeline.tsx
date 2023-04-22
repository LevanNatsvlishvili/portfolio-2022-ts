import React from 'react';
import TimelineDesktop from './TimelineDesktop';
import TimelineMobile from './TimelineMobile';
import { Timeline } from './Types';

const Timeline = (props: Timeline) => {
  const { companies, handleCompany, curr } = props;

  return (
    <>
      <div className="hidden sm:block">
        <TimelineDesktop
          companies={companies}
          handleCompany={handleCompany}
          curr={curr}
        />
      </div>
      <div className="block sm:hidden">
        <TimelineMobile
          companies={companies}
          handleCompany={handleCompany}
          curr={curr}
        />
      </div>
    </>
  );
};

export default Timeline;
