/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import FrontText from 'components/Animations/FrontText';
import Button from 'components/Components/Button';
import Image from 'next/image';
import { paths } from 'utils/Paths';
import useStore from 'utils/Store/Context';
import me from 'public/images/me.jpeg';

function About() {
  const { currView, handleNavigationLoading } = useStore();

  return (
    <section className="relative">
      <div className="w-full absolute left-1/5 sm:left-40 z-10">
        <FrontText shouldDisplay={currView === 1} heading1="About Me" bottom="Experience, Contracts and more..." />
        <div>
          <Button onClick={() => handleNavigationLoading(paths.about)}>Read More</Button>
        </div>
      </div>
      <div
        className={clsx(
          'w-[90%] lg:w-1/2 h-[70%] lg:h-1/2 lg:ml-100 relative glass-effect',
          currView === 1 && 'glass-effect-active'
        )}
      >
        <Image className="object-cover w-full h-full rounded-lg" src={me} alt="profile" fill />
      </div>
    </section>
  );
}

export default About;
