import React, { ReactNode, useCallback, useEffect, useRef } from 'react';

interface Scroll {
  children: ReactNode;
  shouldScrollDisplay: boolean;
  currView: number;
  setCurrView: Function;
}

function Scroll(props: Scroll) {
  const { children, shouldScrollDisplay, currView, setCurrView } = props;
  const pagesLength = 4;

  const scrollDown = useCallback(() => {
    if (currView === pagesLength - 1) return;
    const axis = `translateY(${(currView + 1) * -1}00vh)`;
    const wrapper = document.getElementById('wrapper');
    wrapper!.style.transform = axis;
    setCurrView((p: number) => p + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currView]);

  const scrollDownRef = useRef(scrollDown);

  useEffect(() => {
    scrollDownRef.current = scrollDown;
  }, [scrollDown]);

  const scrollUp = useCallback(() => {
    if (currView === 0) return;
    const axis = `translateY(${(currView - 1) * -1}00vh)`;
    const wrapper = document.getElementById('wrapper');
    wrapper!.style.transform = axis;
    setCurrView((p: number) => p - 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currView]);

  const scrollUpRef = useRef(scrollUp);

  useEffect(() => {
    scrollUpRef.current = scrollUp;
  }, [scrollUp]);

  useEffect(() => {
    let scrolled = false;
    let touchStartY: number | null = null;

    const MouseWheelHandler = (e: any) => {
      if (!shouldScrollDisplay) return;
      if (scrolled) return;
      var event = window.event || e;
      var delta = Math.max(-1, Math.min(1, event.wheelDelta || -event.detail));
      if (delta > 0) {
        scrolled = true;
        scrollUpRef.current();
        setTimeout(() => (scrolled = false), 1000);
      }
      if (delta < 0) {
        scrolled = true;
        scrollDownRef.current();
        setTimeout(() => (scrolled = false), 1000);
      }
    };
    const handleTouchStart = (e: TouchEvent) => {
      if (!shouldScrollDisplay) return;
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!shouldScrollDisplay || touchStartY === null) return;
      if (scrolled) return;
      const currentY = e.touches[0].clientY;
      const diffY = touchStartY - currentY;
      console.log(diffY);
      if (diffY < 0) {
        scrolled = true;
        scrollUpRef.current();
        setTimeout(() => (scrolled = false), 1000);
      }
      if (diffY > 0) {
        scrolled = true;
        scrollDownRef.current();
        setTimeout(() => (scrolled = false), 1000);
      }

      touchStartY = null;
    };

    document.body.addEventListener('mousewheel', MouseWheelHandler, false);
    document.body.addEventListener('DOMMouseScroll', MouseWheelHandler, false);
    // Add event listener for mobile touch screen
    document.body.addEventListener('touchstart', handleTouchStart, false);
    document.body.addEventListener('touchmove', handleTouchMove, false);

    return () => {
      document.body.removeEventListener('mousewheel', MouseWheelHandler, false);
      document.body.removeEventListener('DOMMouseScroll', MouseWheelHandler, false);
      document.body.removeEventListener('touchstart', handleTouchStart, false);
      document.body.removeEventListener('touchmove', handleTouchMove, false);
    };
  }, [shouldScrollDisplay]);

  return (
    <div id="wrapper" className="scroll-container relative z-10">
      {children}
    </div>
  );
}

export default Scroll;
