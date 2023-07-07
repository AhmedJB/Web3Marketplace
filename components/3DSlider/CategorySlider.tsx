//CategorySlider.tsx
import React from 'react';
import SwiperCore, { Swiper, SwiperSlide } from 'swiper/react';
import  EffectCoverflow  from 'swiper';
import  Pagination  from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';



import CategorySlide from './CategorySlide';


interface Category {
  image: string;
}

const categories: Category[] = [
  { image: '/assets/3DSwiper/ACCESSORIES.jpg' },
  { image: '/assets/3DSwiper/APPAREL.jpg' },
  { image: '/assets/3DSwiper/HOMEWARE.jpg' },
  { image: '/assets/3DSwiper/COSMETICS.jpg' },
  { image: '/assets/3DSwiper/ARTIFACTS.jpg' },
];

const CategorySlider: React.FC = () => {
  
  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      className="mySwiper"
    >
      {categories.map((category, index) => (
        <SwiperSlide key={index}>
          <CategorySlide image={category.image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default CategorySlider;