/* eslint-disable @next/next/no-img-element */
// import { HeaderTagsRenderer } from 'Components/HeaderTagsRenderer';
import { HeaderTagsRenderer } from 'components/Components/HeaderTagsRenderer';
import React from 'react';

const projects = [
  {
    title: 'Saba [Deploying Soon]',
    // url: 'https://saba.com.ge',
    thumbnail: '/images/projects/saba.png',
    techStack: ['React', 'Tailwind', 'Typescript'],
  },
  {
    title: 'Archi',
    url: 'https://archi.ge',
    thumbnail: '/images/projects/archi.jpg',
    techStack: ['React', 'Bootstrap', 'Javascript'],
  },
  {
    title: 'Marsleaders',
    url: 'https://marsleaders.com',
    thumbnail: '/images/projects/marsleaders.jpg',
    techStack: ['React', 'Bootstrap', 'Javascript'],
  },
  {
    title: 'National Bank Of Georgia',
    url: 'https://nbg.gov.ge/',
    thumbnail: '/images/projects/nbg.png',
    techStack: ['React', 'Tailwindcss', 'Javascript'],
  },
  {
    title: 'Dataninja',
    url: 'https://mydataninja.com',
    thumbnail: '/images/projects/dataninja.png',
    techStack: ['React', 'Material-UI', 'Tailwindcss', 'Javascript'],
  },
  {
    title: 'Citrus',
    url: 'https://www.citrus.ge/',
    thumbnail: '/images/projects/citrus.png',
    techStack: ['React', 'Javascript'],
  },
];

const Projects = () => {
  return (
    <div className="relative pt-20 sm:pt-32 px-4 sm:px-10 z-10 h-[90vh] w-screen ">
      <HeaderTagsRenderer
        title="Projects - Levan Natsvlishvili - Frontend Developer Portfolio"
        metaTitle="Projects - Levan Natsvlishvili - Frontend React developer - NextJS, ReactJS, Javascript, Typesript"
        description="Levan Natsvlishvili, an experienced frontend developer, specializing in Javascript, ReactJS, and NextJS with 4 years of experience. View portfolio to see completed projects."
        image="/images/projects/portfolio.png"
        ogDescription="Discover the portfolio of Levan Natsvlishvili, a seasoned frontend developer. Proficient in Javascript, ReactJS, and NextJS,TailwindCSS with a track record of successful projects. "
      />

      <div className="styled-card h-full px-1 sm:px-4">
        <div className="px-4 pb-4">
          <h1>Projects</h1>
        </div>
        <div className="px-4 scroll-bar overflow-auto h-[90%]">
          <div className="h-auto sm:gap-8 gap-y-10 grid   grid-cols-12">
            {projects.map((project, i) => (
              <div key={i} className="col-span-12 lg:col-span-4 2xl:col-span-3 h-fit">
                <div className="hidden lg:block">
                  <ProjectCard project={project} />
                </div>
                <div className="block lg:hidden">
                  <ProjectCardMobile project={project} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface ProjectCard {
  project: {
    title: string;
    url?: string;
    thumbnail: string;
    techStack: Array<string>;
  };
}

const ProjectCard = (props: ProjectCard) => {
  const { title, url, thumbnail, techStack } = props.project;
  return (
    <div className="project-card relative glass-effect ">
      <img src={thumbnail} className="w-full h-60 rounded-xl " alt={title} />
      <div className="opacity-0 z-10 transition duration-300 w-full h-full absolute top-0 rounded-xl bg-[#181D5E]/30 blur" />
      {url && (
        <div className="opacity-0 z-30 flex transition duration-300 w-full h-full absolute top-0 rounded-xl items-center justify-center flex-col mt-10">
          <a
            className="text-grey-text border-blue-glow border-2 text-xs w-28 h-7 flex items-center justify-center bg-[#0D162860] rounded-3xl mt-5"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            VISIT
          </a>
        </div>
      )}
      <div className="z-20 flex transition duration-300 w-full h-full absolute top-0 rounded-xl  items-center justify-center flex-col">
        <h1 className="text-lg text-center ">{title}</h1>
        <h3 className="text-sm text-orange w-1/2 text-center">{techStack.join(', ')}</h3>
      </div>
    </div>
  );
};

const ProjectCardMobile = (props: ProjectCard) => {
  const { title, url, thumbnail, techStack } = props.project;
  return (
    <div>
      <div className="relative glass-effect h-[250px] sm:h-[300px] md:h-[400px]">
        <img src={thumbnail} className="w-full h-full rounded-xl " alt={title} />
      </div>
      <div className="z-20 mt-4 flex transition duration-300 w-full h-full  top-0 rounded-xl  items-center justify-center flex-col">
        <h1 className="text-lg text-center ">{title}</h1>
        <h3 className="text-sm text-orange mt-2 w-1/2 text-center">{techStack.join(', ')}</h3>
        {url && (
          <a
            className="text-grey-text border-blue-glow border-2 text-xs w-28 h-7 flex items-center justify-center bg-[#0D162860] rounded-3xl mt-2"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            VISIT
          </a>
        )}
      </div>
      <div className="h-1 border border-deep-blue mt-5" />
    </div>
  );
};

export default Projects;
