import { HeaderTagsRenderer } from 'components/Components/HeaderTagsRenderer';
import About from 'components/Pages/Home/About';
import Contact from 'components/Pages/Home/Contact';
import Projects from 'components/Pages/Home/Projects';
import Welcome from 'components/Pages/Home/Welcome';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="relative z-index-1">
      <HeaderTagsRenderer
        title="Levan Natsvlishvili - Frontend Developer Portfolio"
        metaTitle="About - Levan Natsvlishvili - Frontend React developer"
        description="Levan Natsvlishvili, an experienced frontend developer, specializing in Javascript, ReactJS, and NextJS with 4 years of experience. View portfolio to see completed projects."
        image="/images/projects/portfolio.png"
        ogDescription="Discover the portfolio of Levan Natsvlishvili, a seasoned frontend developer. Proficient in Javascript, ReactJS, and NextJS,TailwindCSS with a track record of successful projects. "
      />
      <Welcome />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
