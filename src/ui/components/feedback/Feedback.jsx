import { useMemo } from "react";
import { Container, Carousel } from "react-bootstrap";
import useRevealOnScroll from "../../../core/hooks/useRevealOnScroll.js";
import "./feedback.css";

const Feedback = () => {
  const ref = useRevealOnScroll();

  const items = useMemo(() => {
    return [
      {
        name: "Анна",
        text: "Всё по делу: планировка, свет, материалы. Ремонт прошёл спокойно, результат — как на визуализации.",
        img: `https://source.unsplash.com/1200x900/?chat,message&sig=401`,
      },
      {
        name: "Сергей",
        text: "Понравилось, что сразу учитываются сценарии жизни и бюджет. Документация очень помогает строителям.",
        img: `https://source.unsplash.com/1200x900/?review,note&sig=402`,
      },
      {
        name: "Ирина",
        text: "Тёплая атмосфера и ощущение дома. Редко когда дизайнер так внимательно работает с деталями.",
        img: `https://source.unsplash.com/1200x900/?feedback,letter&sig=403`,
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
