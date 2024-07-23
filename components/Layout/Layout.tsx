import React, { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useStore from 'utils/Store/Context';
import Loading from 'components/Components/Loading';
import HeaderComponent from './HeaderComponent';
import dynamic from 'next/dynamic';
const ScrollDown = dynamic(() => import('components/Components/ScrollDown'), { ssr: false });
const Scroll = dynamic(() => import('./Scroll'), { ssr: false });

function useQuery() {
  const location = useRouter();
  if (location.pathname.length <= 1) {
    return true;
  }
  return false;
}

interface Layout {
  children: ReactNode;
}

const checkDeviceStrength = () => {
  const cores = navigator.hardwareConcurrency || 1;
  const memory = (navigator as any).deviceMemory || 4;
  console.log('memory', memory);
  console.log('cores', cores);
  return cores >= 4 && memory >= 8;
};

const Layout = ({ children }: Layout) => {
  const { currView, setCurrView, loading } = useStore();
  const shouldScrollDisplay = useQuery();

  const [isHighPerformance, setIsHighPerformance] = useState(false);

  useEffect(() => {
    const isStrongDevice = checkDeviceStrength();
    setIsHighPerformance(isStrongDevice);
  }, []);

  console.log(isHighPerformance);

  useEffect(() => {
    if (shouldScrollDisplay) {
      setCurrView(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldScrollDisplay]);

  return (
    <div className={`star-container star-${currView}`}>
      <Loading loading={loading} />
      <HeaderComponent
        shouldScrollDisplay={shouldScrollDisplay || false}
        currView={currView}
        setCurrView={setCurrView}
      />
      {shouldScrollDisplay && (
        <Scroll shouldScrollDisplay={shouldScrollDisplay || false} currView={currView} setCurrView={setCurrView}>
          <main>{children}</main>
        </Scroll>
      )}

      {shouldScrollDisplay && <ScrollDown currView={currView} />}
      {!shouldScrollDisplay && <main>{children}</main>}

      <div className={`stars-container stars-${currView}`}>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
    </div>
  );
};

export default Layout;
