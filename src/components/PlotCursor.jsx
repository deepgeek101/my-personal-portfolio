import { useRef } from "react";
import { site } from "../content/site";
import useFinePointer from "../hooks/useFinePointer";

// The intro as a plot (REVAMP.md §4.1): crosshair lines follow the pointer and
// a readout shows lat/long. The origin is the accent dot marked
// data-plot-origin (next to the coordinates in the intro): pointing at it
// reads exactly Kathmandu, and the plot's full width/height spans 1°.
// Pointer moves write CSS variables directly — no React state — so nothing
// re-renders 60 times a second. Touch screens just see the dot.

const { lat, lon } = site.location;

const PlotCursor = ({ children }) => {
  const area = useRef(null);
  const readout = useRef(null);
  const origin = useRef({ x: 0.5, y: 0.5 });
  const finePointer = useFinePointer();

  // Measure where the dot is once per visit, not on every move.
  const onPointerEnter = () => {
    const box = area.current.getBoundingClientRect();
    const dot = area.current.querySelector("[data-plot-origin]");
    if (!dot) return;
    const d = dot.getBoundingClientRect();
    origin.current = {
      x: (d.left + d.width / 2 - box.left) / box.width,
      y: (d.top + d.height / 2 - box.top) / box.height,
    };
  };

  const onPointerMove = (e) => {
    const box = area.current.getBoundingClientRect();
    const x = (e.clientX - box.left) / box.width;
    const y = (e.clientY - box.top) / box.height;
    area.current.style.setProperty("--x", `${x * 100}%`);
    area.current.style.setProperty("--y", `${y * 100}%`);
    area.current.dataset.plotActive = "true";
    const north = lat + (origin.current.y - y);
    const east = lon + (x - origin.current.x);
    readout.current.textContent = `${north.toFixed(2)}°N ${east.toFixed(2)}°E`;
  };

  const onPointerLeave = () => {
    area.current.dataset.plotActive = "false";
  };

  return (
    <div
      ref={area}
      className="relative isolate"
      onPointerEnter={finePointer ? onPointerEnter : undefined}
      onPointerMove={finePointer ? onPointerMove : undefined}
      onPointerLeave={finePointer ? onPointerLeave : undefined}
    >
      {/* The grid fades at its edges (paper mode), so the cursor sits in its
          own layer above it to stay crisp everywhere. */}
      <div aria-hidden="true" className="plot-grid absolute inset-0 -z-10" />
      {finePointer && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <span className="plot-line plot-line-h" />
          <span className="plot-line plot-line-v" />
          <span ref={readout} className="plot-readout label" />
        </div>
      )}
      {children}
    </div>
  );
};

export default PlotCursor;
