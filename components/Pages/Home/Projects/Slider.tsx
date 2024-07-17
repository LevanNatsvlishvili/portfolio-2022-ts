/* eslint-disable @next/next/no-img-element */
import React from 'react';

const images = [
  { id: 0, img: '/images/projects/citrus.png' },
  { id: 1, img: '/images/projects/dataninja.png' },
  { id: 2, img: '/images/projects/tourism.png' },
  { id: 3, img: '/images/projects/clothingstore.png' },
  { id: 4, img: '/images/projects/portfolio.png' },
  { id: 5, img: '/images/projects/nbg.png' },
  { id: 6, img: '/images/projects/marsleaders.png' },
  { id: 7, img: '/images/projects/archi.png' },
];

interface Slider {
  shouldDisplay: boolean;
}

function Slider(props: Slider) {
  const { shouldDisplay } = props;

  return (
    <div
      className={`w-[90%] sm:w-3/4 lg:w-1/2 h-[70%] lg:h-1/2 lg:ml-100 relative glass-effect overflow-hidden rounded-xl ${
        shouldDisplay ? 'glass-effect-active' : ''
      } `}
    >
      <div style={{ width: `${images.length}00%` }} className="flex transition slider-auto h-full">
        {images.reverse().map((image, index) => (
          <img key={index} className="w-[850px] h-full " src={image.img} alt="project" />
        ))}
      </div>

      <style jsx global>
        {`
          @-webkit-keyframes translateinfinite {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-100%));
            }
          }

          @keyframes translateinfinite {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(850px * -${images.length - 1}));
            }
          }
        `}
      </style>
    </div>
  );
}

export default Slider;
