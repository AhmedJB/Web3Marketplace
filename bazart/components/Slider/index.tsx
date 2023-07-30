import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import type { SwiperEvents } from "../../node_modules/swiper/types/swiper-events.d.ts";
import type { SwiperClass } from "../../node_modules/swiper/types/swiper-class.d.ts";

import styles from '../../styles/modular/3DSlide.module.css';




interface Swipertype extends SwiperClass<SwiperEvents> {
    activeIndex: number;
}
const Slider = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // Explicitly type the swiper parameter using the Swiper type
  const handleSlideChange = (swiper: Swipertype) => {
    setActiveSlideIndex(swiper.activeIndex);
  };

  return (
    <div className={styles.container}>
      <Swiper
        onSlideChange={handleSlideChange}
        rewind={true}
        slidesPerView={3}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
      >
        <SwiperSlide>
          
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={activeSlideIndex === 0 ? styles.img_centered : styles.img_normal}
            src="https://i.pinimg.com/564x/ba/70/64/ba7064c9507c3450022d90b49965a623.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={activeSlideIndex === 1 ? styles.img_centered : styles.img_normal}
            src="https://i.pinimg.com/564x/be/bc/44/bebc44e6f004c291928959fc8e6a4cbe.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
        <img
            className={activeSlideIndex === 2 ? styles.img_centered : styles.img_normal}
            src="./ACCESSORIES.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
        <img
            className={activeSlideIndex === 3 ? styles.img_centered : styles.img_normal}
            src="https://i.pinimg.com/564x/4e/37/4a/4e374a629c4d9a2f1b021aedc2553acf.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
        <img
            className={activeSlideIndex === 4 ? styles.img_centered : styles.img_normal}
            src="https://i.pinimg.com/564x/d7/15/07/d715073e1b1deb79c42d6cfa3bc5f1f4.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;

