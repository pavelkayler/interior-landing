import { useMemo, useState } from "react";
import { Container, Form } from "react-bootstrap";
import useRevealOnScroll from "../../../core/hooks/useRevealOnScroll.js";
import { media001, img } from "../../../core/assets/media001.js";
import "./beforeAfter.css";

const BeforeAfter = () => {
  const ref = useRevealOnScroll();
  const [value, setValue] = useState(50);

  const images = useMemo(() => {
    const before = media001[2] ?? media001[0];
    const after = media001[3] ?? before;
    return {
      before: img(before),
      after: img(after),
    };
  }, []);

  return (
    <Container>
      <div ref={ref}>
        <div className="sectionKicker">пример</div>
        <h2 className="sectionTitle">До / После</h2>

        <div className="baCard">
          <div className="baViewport">
            <div className="baViewport__before" style={{ backgroundImage: `url(${images.before})` }} />
            <div
              className="baViewport__after"
              style={{
                width: `${value}%`,
                backgroundImage: `url(${images.after})`,
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
