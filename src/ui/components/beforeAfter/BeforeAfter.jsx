import { useMemo, useState } from "react";
import { Container, Form } from "react-bootstrap";
import useRevealOnScroll from "../../../core/hooks/useRevealOnScroll.js";
import "./beforeAfter.css";

const BeforeAfter = () => {
  const ref = useRevealOnScroll();
  const [value, setValue] = useState(50);

  const images = useMemo(() => {
    return {
      before: "/before.jpg",
      after: "/after.jpg",
      fallbackBefore: "https://source.unsplash.com/1600x1000/?interior,old&sig=201",
      fallbackAfter: "https://source.unsplash.com/1600x1000/?interior,modern&sig=202",
    };
  }, []);

  return (
    <Container>
      <div ref={ref}>
        <div className="sectionKicker">пример</div>
        <h2 className="sectionTitle">До / После</h2>

        <div className="baCard">
          <div className="baViewport">
            <div className="baViewport__before" style={{ backgroundImage: `url(${images.before}), url(${images.fallbackBefore})` }} />
            <div
              className="baViewport__after"
              style={{
                width: `${value}%`,
                backgroundImage: `url(${images.after}), url(${images.fallbackAfter})`,
              }}
            />

            <div className="baDivider" style={{ left: `${value}%` }}>
              <div className="baDivider__knob" />
            </div>

            <div className="baLabels">
              <div className="baLabels__tag">До</div>
              <div className="baLabels__tag">После</div>
            </div>
          </div>

          <Form.Range
            className="baRange"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
          />
        </div>
      </div>
    </Container>
  );
};

export default BeforeAfter;
