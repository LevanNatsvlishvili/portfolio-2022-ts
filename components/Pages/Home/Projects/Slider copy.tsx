import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, FreeMode, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import { memo } from 'react';
import clsx from 'clsx';

SwiperCore.use([FreeMode, Autoplay]);

const images = [
  { id: 0, img: '/images/projects/citrus.png' },
  { id: 1, img: '/images/projects/dataninja.png' },
  { id: 2, img: '/images/projects/tourism.png' },
  { id: 3, img: '/images/projects/clothingstore.png' },
  { id: 5, img: '/images/projects/nbg.png' },
  { id: 6, img: '/images/projects/marsleaders.png' },
  { id: 7, img: '/images/projects/archi.png' },
];

interface SliderProps {
  shouldDisplay: boolean;
}

const Slider = ({ shouldDisplay }: SliderProps) => {
  return (
    <div
      className={clsx(
        'w-[90%] sm:w-3/4 lg:w-1/2 h-[70%] lg:h-1/2 lg:ml-100 relative glass-effect overflow-hidden rounded-xl',
        shouldDisplay && 'glass-effect-active'
      )}
    >
      <Swiper
        freeMode={true}
        slidesPerView={'auto'}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        speed={1000} // Adjust the speed to control how fast the slider moves
        loop={true}
        className="h-full"
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <Image className="w-full h-full" src={image.img} alt="project" loading="lazy" fill />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default memo(Slider);
