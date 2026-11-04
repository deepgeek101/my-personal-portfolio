import { useEffect, useRef, useState } from "react";
import useFinePointer from "../hooks/useFinePointer";
import useReducedMotion from "../hooks/useReducedMotion";

// A small tilted image that trails the pointer while it's over a project row
// (REVAMP.md §4.5). Each animation frame moves it 15% of the way to the
// pointer ("lerp"), which gives the lag. Mouse/trackpad only.
const EASE = 0.15;

const CursorPreview = ({ image }) => {
  const el = useRef(null);
  const finePointer = useFinePointer();
  const reducedMotion = useReducedMotion();
  // Keep showing the last image while it fades out.
  const [shown, setShown] = useState(null);

  useEffect(() => {
    if (image) setShown(image);
  }, [image]);

  useEffect(() => {
    if (!finePointer) return;
    const ease = reducedMotion ? 1 : EASE;
    let x = 0;
    let y = 0;
    let targetX = 0;
    let targetY = 0;
    let frame = null;

    const tick = () => {
      // While hidden, jump straight to the pointer so it never flies in.
      const k = el.current?.dataset.visible === "true" ? ease : 1;
      x += (targetX - x) * k;
      y += (targetY - y) * k;
      if (el.current) {
        el.current.style.transform = `translate3d(${x + 18}px, ${y + 18}px, 0) rotate(-2deg)`;
      }
      const settled =
        Math.abs(targetX - x) < 0.5 && Math.abs(targetY - y) < 0.5;
      frame = settled ? null : requestAnimationFrame(tick);
    };

    const onMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!frame) frame = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [finePointer, reducedMotion]);

  if (!finePointer || !shown) return null;

  return (
    <img
      ref={el}
      src={shown.src}
      alt=""
      aria-hidden="true"
      data-visible={Boolean(image)}
      className="cursor-preview"
    />
  );
};

export default CursorPreview;
