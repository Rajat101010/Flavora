import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function SwipePageBus({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const minSwipeDistance = 50;

  const campus = ["bus-now", "bus-c_25", "bus-c_15_7_8", "bus-c_3"];
  const currentCampus = location.pathname.replace("/", "").trim().toLowerCase();
  const currentIndex = campus.indexOf(currentCampus);

  useEffect(() => {
    const handleTouchStart = (e) => {
      setTouchStart(e.touches[0].clientX);
      setTouchEnd(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
      // detect horizontal move only
      const xMove = e.touches[0].clientX;
      const yMove = e.touches[0].clientY;
      const xDiff = Math.abs(xMove - touchStart);
      const yDiff = Math.abs(yMove - (e.touches[0].clientY || 0));

      // Only prevent default if it's more horizontal than vertical
      if (xDiff > yDiff) e.preventDefault();

      setTouchEnd(xMove);
    };

    const handleTouchEnd = () => {
      const distance = touchEnd - touchStart;

      if (Math.abs(distance) < minSwipeDistance || currentIndex === -1) return;

      if (distance > 0 && currentIndex > 0) {
        navigate(`/${campus[currentIndex - 1]}`);
      } else if (distance < 0 && currentIndex < campus.length - 1) {
        navigate(`/${campus[currentIndex + 1]}`);
      }
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [touchStart, touchEnd, currentIndex, navigate]);

  return (
    <div
      style={{
        height: "auto",
        width: "100%",
        overflow: "hidden",
        touchAction: "pan-y",
      }}
    >
      {children}
    </div>
  );
}

export default SwipePageBus;
