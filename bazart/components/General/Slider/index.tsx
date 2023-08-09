import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from "../../../styles/modular/3DSlide.module.css"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';


const App: React.FC = () => {
  return (
    
      <div className="slider-container">
      <h1 className="slider-title" style={{ color: '#F0D697' }}>Recommended Categories</h1>

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop= {true}
        slidesPerView={5} 
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        navigation={true}
        modules={[EffectCoverflow, Pagination]} 
        className="mySwiper"
      >
      <SwiperSlide>
      <p className={styles["image-name"]}>ACCESSORIES</p>
      <img src="./ACCESSORIES.jpg" />

        </SwiperSlide>
        <SwiperSlide>
        <p className={styles["image-name"]}>APPAREL</p>
          <img src="./APPAREL.jpg" />
         
        </SwiperSlide>
        <SwiperSlide>
        <p className={styles["image-name"]}>COSMETICS</p>
          <img src="./COSMETICS.jpg" />
         
        </SwiperSlide>
        <SwiperSlide>
        <p className={styles["image-name"]}>CRAFTSMAN</p>
          <img src="./CRAFTSMAN.jpg" />
         
        </SwiperSlide>
        <SwiperSlide>
        <p className={styles["image-name"]}>HOMEWARE</p>
          <img src="./HOMEWARE.jpg" />
         
        </SwiperSlide>
        <SwiperSlide>
        <p className={styles["image-name"]}>ARTIFACTS</p>
          <img src="./ARTIFACTS.jpg" />
        
        </SwiperSlide>
        <SwiperSlide>
        <p className={styles["image-name"]}>ENTERTAINMENT</p>
          <img src="./ENTERTAINMENT.jpg" />
         
        </SwiperSlide>
        <SwiperSlide>
        <p className={styles["image-name"]}>EVENTS</p>
          <img src="./EVENTS.jpg" />
       
        </SwiperSlide>
        <SwiperSlide>
        <p className={styles["image-name"]}>CLOTHING AND SHOES</p>
          <img src="./CLOTHING AND SHOES.jpg" />
        
        </SwiperSlide>
      </Swiper>
      </div>
    
  );
};
export default App;


