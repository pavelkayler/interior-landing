import { useMemo } from "react";
import { Container, Carousel } from "react-bootstrap";
import useRevealOnScroll from "../../hooks/useRevealOnScroll.js";
import { media001, img } from "../../assets/media001.js";
import "./feedback.css";

const Feedback = () => {
  const ref = useRevealOnScroll();

  const items = useMemo(() => {
    const first = media001[4] ?? media001[0];
    const second = media001[5] ?? first;
    const third = media001[6] ?? second;
    return [
      {
        name: "Анна",
        text: "Всё по делу: планировка, свет, материалы. Ремонт прошёл спокойно, результат — как на визуализации.",
        img: img(first),
      },
      {
        name: "Сергей",
        text: "Понравилось, что сразу учитываются сценарии жизни и бюджет. Документация очень помогает строителям.",
        img: img(second),
      },
      {
        name: "Ирина",
        text: "Тёплая атмосфера и ощущение дома. Редко когда дизайнер так внимательно работает с деталями.",
        img: img(third),
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
