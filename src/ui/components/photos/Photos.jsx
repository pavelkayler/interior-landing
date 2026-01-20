import { useMemo, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import { img, media001 } from "../../../core/assets/media001.js";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./photos.css";

const Photos = () => {
  const slides = useMemo(() => {
    const items = media001.slice(0, 12);
    return items.length >= 10 ? items : [...items, ...items].slice(0, 10);
  }, []);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const backgroundImage = media001[6];

  return (
    <div className="photoGallery" style={{ backgroundImage: `url(${img(backgroundImage)})` }}>
      <div className="photoGallery__overlay" />
      <Container className="photoGallery__content">
        <div className="photoGallery__title">05 / ФОТО РЕАЛИЗОВАННЫХ ПРОЕКТОВ</div>
        <div className="photoGallery__main">
          <button
            className="photoGallery__nav photoGallery__nav--prev"
            type="button"
            ref={prevRef}
            aria-label="Предыдущее фото"
          >
            <i className="bi bi-chevron-left" aria-hidden="true" />
          </button>
          <Swiper
            className="photoGallery__swiper"
            modules={[Navigation, Thumbs]}
            navigation
            thumbs={{
              swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            grabCursor
            simulateTouch
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
          >
            {slides.map((name, index) => (
              <SwiperSlide key={`${name}-${index}`}>
                <div
                  className="photoGallery__slide"
                  style={{ backgroundImage: `url(${img(name)})` }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            className="photoGallery__nav photoGallery__nav--next"
            type="button"
            ref={nextRef}
            aria-label="Следующее фото"
          >
            <i className="bi bi-chevron-right" aria-hidden="true" />
          </button>
        </div>
        <div className="photoGallery__thumbsWrap">
          <Swiper
            className="photoGallery__thumbs"
            modules={[Thumbs]}
            onSwiper={setThumbsSwiper}
            slidesPerView={6}
            spaceBetween={12}
            watchSlidesProgress
            slideToClickedSlide
            breakpoints={{
              0: { slidesPerView: 3.5 },
              576: { slidesPerView: 4.5 },
              992: { slidesPerView: 6 },
            }}
          >
            {slides.map((name, index) => (
              <SwiperSlide key={`${name}-thumb-${index}`}>
                <div
                  className="photoGallery__thumb"
                  style={{ backgroundImage: `url(${img(name)})` }}
                  aria-label={`Показать фото ${index + 1}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Photos;
