import React, { useEffect, useRef, useState } from "react";
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
  const [activeSlideIndex, setActiveSlideIndex] = useState(-1);

  // Explicitly type the swiper parameter using the Swiper type
  const handleSlideChange = (swiper: Swipertype) => {
    console.log("Changing ", swiper.activeIndex)
    //setActiveSlideIndex(swiper.activeIndex);
  };
  const getImageName = (src: string) => {
    if (src) {
      const parts = src.split("/");
      const filename = parts[parts.length - 1].split(".")[0];
      return <span style={{ color: '#D3CBB8' }}>{filename.toUpperCase()}</span>;
    }
    return "";
  };

  useEffect(() => {
    console.log("Current slide ", activeSlideIndex)
  }, [activeSlideIndex])

  return (
    <div className={styles.container}>
      <Swiper
        onSlideChange={handleSlideChange}
        rewind={false}
        loop={false}
        slidesPerView={1}
        spaceBetween={5}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}

        centeredSlides={false}
      >

        <SwiperSlide>
          <div className={activeSlideIndex === 0 ? styles.img_centered : ""}>
            <div>{activeSlideIndex === 0 && getImageName("./APPAREL.jpg")}</div>
            <img src="./APPAREL.jpg" className={activeSlideIndex === 0 ? styles.img_centered : styles.img_normal} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={activeSlideIndex === 1 ? styles.img_centered : ""}>
            <div>{activeSlideIndex === 1 && getImageName("./CRAFTSMAN.jpg")}</div>
            <img src="./CRAFTSMAN.jpg" className={activeSlideIndex === 1 ? styles.img_centered : styles.img_normal} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={activeSlideIndex === 2 ? styles.img_centered : ""}>
            <div>{activeSlideIndex === 2 ? getImageName("./ACCESSORIES.jpg") : null}</div>

            <img src="./ACCESSORIES.jpg" className={activeSlideIndex === 2 ? styles.img_centered : styles.img_normal} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={activeSlideIndex === 3 ? styles.img_centered : ""}>
            <div>{activeSlideIndex === 3 && getImageName("./HOMEWARE.jpg")}</div>
            <img src="./HOMEWARE.jpg" className={activeSlideIndex === 3 ? styles.img_centered : styles.img_normal} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={activeSlideIndex === 4 ? styles.img_centered : ""}>
            <div>{activeSlideIndex === 4 && getImageName("./COSMETICS.jpg")}</div>
            <img src="./COSMETICS.jpg" className={activeSlideIndex === 4 ? styles.img_centered : styles.img_normal} />
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Slider;