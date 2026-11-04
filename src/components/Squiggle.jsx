// Hand-drawn strokes, drawn in with the stroke-dashoffset trick (index.css).
// pathLength="1" makes every path's length count as 1, so the CSS can use
// dasharray/dashoffset of 1 without measuring each path.

const strokes = {
  // Underlines, viewBox 100×8. Three so links don't all look identical.
  underline: [
    "M1 5 C 15 2, 30 7, 50 4 S 85 2, 99 5",
    "M1 4 C 20 7, 35 2, 55 5 S 80 6, 99 3",
    "M1 6 C 12 3, 28 3, 45 5 S 75 7, 99 4",
  ],
  // A loose loop around a row number, viewBox 40×24.
  circle: [
    "M21 2 C 33 1, 39 8, 37 14 C 35 21, 22 23, 12 21 C 3 19, 1 11, 6 6 C 10 2, 18 1, 25 3",
  ],
};

const viewBoxes = { underline: "0 0 100 8", circle: "0 0 40 24" };

// The same seed text always gets the same shape.
const pick = (seed) =>
  [...seed].reduce((sum, ch) => sum + ch.charCodeAt(0), 0);

const Squiggle = ({ kind = "underline", seed = "", className = "" }) => (
  <svg
    aria-hidden="true"
    viewBox={viewBoxes[kind]}
    preserveAspectRatio="none"
    className={`squiggle ${className}`}
  >
    <path d={strokes[kind][pick(seed) % strokes[kind].length]} pathLength="1" />
  </svg>
);

export default Squiggle;
