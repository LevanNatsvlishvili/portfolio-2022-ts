import Blackhole from 'components/Animations/Blackhole';
import FrontText from 'components/Animations/FrontText';
import useStore from 'utils/Store/Context';

function Welcome() {
  const { currView, loading } = useStore();
  return (
    <section>
      <div className="w-full absolute left-[22.5%] top-1/4 sm:top-auto sm:left-40">
        <FrontText
          shouldDisplay={!loading && currView === 0}
          heading1="Levan"
          heading2="Natsvlishvili"
          bottom="Frontend developer, React, NextJS, ThreeJS"
        />
      </div>
      <div className="mt-1">
        <Blackhole shouldDisplay={currView === 0} />
      </div>
    </section>
  );
}

export default Welcome;
