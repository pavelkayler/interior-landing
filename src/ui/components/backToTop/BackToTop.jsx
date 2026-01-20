import { useEffect, useState } from "react";
import "./backToTop.css";

const BackToTop = ({ didNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > window.innerHeight * 0.8 || didNavigate;
      setIsVisible(shouldShow);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [didNavigate]);

  const handleClick = () => {
    const target = document.querySelector("#hero");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      type="button"
      className={`backToTop ${isVisible ? "backToTop--visible" : ""}`}
      onClick={handleClick}
      aria-label="Наверх"
    >
      <i className="bi bi-arrow-up" aria-hidden="true" />
    </button>
  );
};

export default BackToTop;
