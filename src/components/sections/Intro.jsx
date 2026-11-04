import { site } from "../../content/site";
import useKathmanduTime from "../../hooks/useKathmanduTime";
import { Columns } from "../layout/Section";
import PlotCursor from "../PlotCursor";

const coordinates = `${site.location.lat.toFixed(2)}°N ${site.location.lon.toFixed(2)}°E`;
const [firstName, ...otherNames] = site.name.split(" ");

// "Deep" with a dotted underline that explains the name on hover or focus.
// Stays plain text until site.nameMeaning is filled in.
const FirstName = () => {
  if (!site.nameMeaning) return firstName;
  const { script, meaning } = site.nameMeaning;

  return (
    <span tabIndex={0} aria-describedby="name-meaning" className="name-note">
      {firstName}
      <span id="name-meaning" role="tooltip" className="name-note-tip label">
        {script} — “{meaning}”. (Hence the switch up there.)
      </span>
    </span>
  );
};

// § 00: the "plot".
const Intro = ({ active }) => {
  const { time } = useKathmanduTime();

  return (
    <section id="intro" aria-labelledby="intro-title" className="fade-up">
      <PlotCursor>
        <div className="pt-[clamp(4rem,14vh,9rem)] pb-[clamp(4rem,10vh,7rem)]">
          <Columns marker="§ 00" active={active}>
            <h1
              id="intro-title"
              className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-tight"
            >
              <FirstName /> {otherNames.join(" ")}
            </h1>

            <p className="mt-8 max-w-[60ch] text-lg">{site.intro}</p>
            {site.about.map((paragraph) => (
              <p key={paragraph} className="mt-4 max-w-[60ch] text-muted">
                {paragraph}
              </p>
            ))}

            <p className="label mt-10 flex flex-wrap gap-x-2">
              {[site.role, site.location.city].map((item) => (
                <span key={item} className="whitespace-nowrap">
                  {item} ·
                </span>
              ))}
              <span className="whitespace-nowrap">
                {/* The crosshair's origin: pointing here reads Kathmandu. */}
                <span data-plot-origin aria-hidden="true" className="plot-dot" />
                {coordinates} ·
              </span>
              <time className="whitespace-nowrap">{time}</time>
            </p>
          </Columns>
        </div>
      </PlotCursor>
    </section>
  );
};

export default Intro;
