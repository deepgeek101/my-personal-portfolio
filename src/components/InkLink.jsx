import Squiggle from "./Squiggle";

// A text link whose underline draws itself in on hover or keyboard focus
// (REVAMP.md §4.2). At rest it has a faint straight underline so it still
// reads as a link without hover.
const InkLink = ({ children, className = "", ...props }) => {
  const text = typeof children === "string" ? children : props.href;

  return (
    <a {...props} className={`ink-link ${className}`}>
      {children}
      <Squiggle seed={text} className="ink-link-line" />
    </a>
  );
};

export default InkLink;
