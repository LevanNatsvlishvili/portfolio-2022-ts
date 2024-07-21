/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import React, { useEffect } from 'react';

interface Image {
  id: number;
  img: string;
}

const fetchImages = (): Promise<Image[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 0, img: '/images/projects/citrus.png' },
        { id: 1, img: '/images/projects/dataninja.png' },
        { id: 2, img: '/images/projects/tourism.jpg' },
        { id: 3, img: '/images/projects/clothingstore.png' },
        { id: 5, img: '/images/projects/nbg.png' },
        { id: 6, img: '/images/projects/marsleaders.jpg' },
        { id: 7, img: '/images/projects/archi.jpg' },
      ]);
    }, 1000); // Simulate network delay
  });
};

interface Slider {
  shouldDisplay: boolean;
}

function Slider(props: Slider) {
  const { shouldDisplay } = props;
  const [images, setImages] = React.useState<Image[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      const fetchedImages = await fetchImages();
      setImages(fetchedImages.reverse());
    };
    loadImages();
  }, []);

  return (
    <div
      className={clsx(
        `w-[90%] sm:w-3/4 lg:w-1/2 h-[70%] lg:h-1/2 lg:ml-100 relative glass-effect overflow-hidden rounded-xl`,
        shouldDisplay && 'glass-effect-active'
      )}
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
