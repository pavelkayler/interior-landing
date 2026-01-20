import { useMemo } from "react";
import { Container, Carousel } from "react-bootstrap";
import useRevealOnScroll from "../../../core/hooks/useRevealOnScroll.js";
import { avatars } from "../../../core/assets/placeholders.js";
import "./feedback.css";

const Feedback = () => {
  const ref = useRevealOnScroll();

  const items = useMemo(() => {
    return [
      {
        name: "Анна",
        text: "Всё по делу: планировка, свет, материалы. Ремонт прошёл спокойно, результат — как на визуализации.",
        img: avatars[0],
      },
      {
        name: "Сергей",
        text: "Понравилось, что сразу учитываются сценарии жизни и бюджет. Документация очень помогает строителям.",
        img: avatars[1],
      },
      {
        name: "Ирина",
        text: "Тёплая атмосфера и ощущение дома. Редко когда дизайнер так внимательно работает с деталями.",
        img: avatars[2],
      },
    ];
  }, []);

  return (
    <Container>
      <div ref={ref}>
        <div className="sectionKicker">доверие</div>
        <h2 className="sectionTitle">Отзывы</h2>

        <Carousel interval={null} className="fbCarousel">
          {items.map((x) => (
            <Carousel.Item key={x.name}>
              <div className="fbSlide">
                <div className="fbSlide__img" style={{ backgroundImage: `url(${x.img})` }} />
                <div className="fbSlide__card">
                  <div className="fbSlide__text">“{x.text}”</div>
                  <div className="fbSlide__name">— {x.name}</div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </Container>
  );
};

export default Feedback;
