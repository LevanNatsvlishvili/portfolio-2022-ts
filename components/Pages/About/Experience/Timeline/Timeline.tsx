import React from 'react';
import TimelineDesktop from './TimelineDesktop';
import TimelineMobile from './TimelineMobile';

interface Company {
  timelineTitle: string;
  timelineDate: string;
  position?: number;
}

interface Timeline {
  curr: number;
  handleCompany: (i: number) => void;
  companies: Array<Company>;
}

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
