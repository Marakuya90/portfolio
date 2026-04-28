'use client'

import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SliderPhoto = ({images}: {images: string[]}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={10}
      navigation={true}
      pagination={true}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="w-full h-[500px] bg-cover bg-center rounded-lg overflow-hidden"
               style={{ backgroundImage: `url(${image})` }}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderPhoto;
