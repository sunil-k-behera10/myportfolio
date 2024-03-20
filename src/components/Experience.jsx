import food from '../images/food.png'
import design from '../images/design.png'
import hotel from '../images/hotel.png'
import resort from '../images/resort.png'
import toppo from '../images/toppo.png'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination,Autoplay } from 'swiper/modules';


const Experience = () => {
  return (
    <div name='experience' className='relative z-[-10] w-full h-screen text-[#36454F] bg-[#fff9cd] pt-24'>
      <div className='max-w-[1080px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-orange-500 border-b-4'>Experience</p>
          <p className='py-4 pt-8' >The experience I've earned after completing these projects.</p>
        </div>
            <Swiper 
              effect={'coverflow'}
              grabCursor={true}
              loop={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              coverflowEffect={{
                rotate: 20,
                stretch: 0,
                depth: 700,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className="mySwiper h-[500px] rounded-lg pb-7"
            >
              <SwiperSlide>
                <img src={design}/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={hotel} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={food} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={resort} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={toppo}/>
              </SwiperSlide>
              
            </Swiper>
          </div>
  </div>
  )
}

export default Experience