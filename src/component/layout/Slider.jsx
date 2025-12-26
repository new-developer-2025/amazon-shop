import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// images for slider
import slide1 from "../../assets/images/slide1.jpg";
import slide2 from "../../assets/images/slide2.jpg";
import slide3 from "../../assets/images/slide3.jpg";
import slide4 from "../../assets/images/slide4.jpg";
import slide5 from "../../assets/images/slide5.jpg";
import slide6 from "../../assets/images/slide6.jpg";
import slide7 from "../../assets/images/slide7.jpg";
// Add css files
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Add module css
import styles from "../layout/Slider.module.css";

export default function Slider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop
      className={styles.swiper}
    >
      <SwiperSlide>
        <img src={slide1} className={styles.sliderImage} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} className={styles.sliderImage} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} className={styles.sliderImage} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} className={styles.sliderImage} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide5} className={styles.sliderImage} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide6} className={styles.sliderImage} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide7} className={styles.sliderImage} />
      </SwiperSlide>
    </Swiper>
  );
}
