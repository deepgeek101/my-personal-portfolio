// Layout shared by every section (REVAMP.md §2.3): a ruled line with three
// ruler ticks, then a margin column holding the "§ 01" marker and the main
// column for content. On small screens the marker sits above the title.
// `active` turns the marker accent while that section is being read.

export const Columns = ({ marker, active = false, children }) => (
  <div className="lg:grid lg:grid-cols-[10rem_minmax(0,42.5rem)] lg:gap-x-12">
    <p
      aria-hidden="true"
      data-active={active}
      className="label mb-3 lg:mb-0 lg:pt-2 lg:sticky lg:top-8 lg:self-start"
    >
      {marker}
    </p>
    <div>{children}</div>
  </div>
);

export const Rule = () => (
  <div aria-hidden="true" className="relative border-t border-rule">
    {[0, 8, 16].map((left) => (
      <span
        key={left}
        className="absolute top-0 h-1.5 w-px bg-muted/50"
        style={{ left }}
      />
    ))}
  </div>
);

// `index` staggers the one-time fade-up on page load.
const Section = ({ id, number, title, active, index = 0, children }) => (
  <section
    id={id}
    aria-labelledby={`${id}-title`}
    className="fade-up"
    style={{ "--i": index }}
  >
    <Rule />
    <div className="py-[clamp(3rem,6vh,5rem)]">
      <Columns marker={`§ ${number}`} active={active}>
        <h2
          id={`${id}-title`}
          className="wonky mb-8 font-display text-[clamp(1.5rem,3vw,2rem)] leading-tight"
        >
          {title}
        </h2>
        {children}
      </Columns>
    </div>
  </section>
);

export default Section;
