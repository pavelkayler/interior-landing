import { useMemo, useState } from "react";
import { Container } from "react-bootstrap";
import { img, media001 } from "../../../core/assets/media001.js";
import "./photos.css";

const Photos = () => {
  const slides = useMemo(() => {
    const items = media001.slice(0, 12);
    return items.length >= 10 ? items : [...items, ...items].slice(0, 10);
  }, []);
  const [activeIndex, setActiveIndex] = useState(0);

  const backgroundImage = media001[6];

  const onPrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const onNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="photoGallery" style={{ backgroundImage: `url(${img(backgroundImage)})` }}>
      <div className="photoGallery__overlay" />
      <Container className="photoGallery__content">
        <div className="photoGallery__title">05 / ФОТО РЕАЛИЗОВАННЫХ ПРОЕКТОВ</div>
        <div className="photoGallery__main">
          <div
            className="photoGallery__slide"
            style={{ backgroundImage: `url(${img(slides[activeIndex])})` }}
          />
        </div>
        <div className="photoGallery__thumbsWrap">
          <button className="photoGallery__nav" type="button" onClick={onPrev}>
            ←
          </button>
          <div className="photoGallery__thumbs">
            {slides.map((name, index) => (
              <button
                key={`${name}-${index}`}
                type="button"
                className={`photoGallery__thumb ${index === activeIndex ? "photoGallery__thumb--active" : ""}`}
                style={{ backgroundImage: `url(${img(name)})` }}
                onClick={() => setActiveIndex(index)}
                aria-label={`Показать фото ${index + 1}`}
              />
            ))}
          </div>
          <button className="photoGallery__nav" type="button" onClick={onNext}>
            →
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Photos;
