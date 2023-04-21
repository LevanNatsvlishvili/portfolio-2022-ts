import About from 'components/Pages/Home/About';
import Contact from 'components/Pages/Home/Contact';
import Projects from 'components/Pages/Home/Projects';
import Welcome from 'components/Pages/Home/Welcome';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="relative z-index-1">
      <Welcome />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
