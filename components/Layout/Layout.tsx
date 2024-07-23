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

const runPerformanceTest = () => {
  const start = performance.now();
  // Create a canvas and perform some drawing operations
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  for (let i = 0; i < 10000; i++) {
    if (ctx) {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
      ctx.fillRect(Math.random() * 100, Math.random() * 100, 100, 100);
    }
  }
  const end = performance.now();
  return end - start;
};

const checkDeviceStrength = () => {
  const cores = navigator.hardwareConcurrency || 1;
  const memory = (navigator as any).deviceMemory || 4;
  console.log(cores, memory);
  const isLowEnd = cores <= 8 || memory <= 4; // Adjust these thresholds as needed
  return isLowEnd;
};

const Layout = ({ children }: Layout) => {
  const { currView, setCurrView, loading } = useStore();
  const shouldScrollDisplay = useQuery();

  const [isLowEndDevice, setIsLowEndDevice] = useState(0);

  useEffect(() => {
    const isLowEnd = runPerformanceTest();
    setIsLowEndDevice(isLowEnd);
  }, []);

  console.log(isLowEndDevice);

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
