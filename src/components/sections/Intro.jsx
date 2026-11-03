import { site } from "../../content/site";
import useKathmanduTime from "../../hooks/useKathmanduTime";
import { Columns } from "../layout/Section";

const coordinates = `${site.location.lat.toFixed(2)}°N ${site.location.lon.toFixed(2)}°E`;

// § 00: the "plot". The crosshair cursor over it arrives in Phase 5.
const Intro = () => {
  const { time } = useKathmanduTime();

  return (
    <section aria-labelledby="intro-title" className="relative isolate">
      <div aria-hidden="true" className="plot-grid absolute inset-0 -z-10" />
      <div className="pt-[clamp(4rem,14vh,9rem)] pb-[clamp(4rem,10vh,7rem)]">
        <Columns marker="§ 00">
          <h1
            id="intro-title"
            className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-tight"
          >
            {site.name}
          </h1>

          <p className="mt-8 max-w-[60ch] text-lg">{site.intro}</p>
          {site.about.map((paragraph) => (
            <p key={paragraph} className="mt-4 max-w-[60ch] text-muted">
              {paragraph}
            </p>
          ))}

          <p className="label mt-10 flex flex-wrap gap-x-2">
            {[site.role, site.location.city, coordinates].map((item) => (
              <span key={item} className="whitespace-nowrap">
                {item} ·
              </span>
            ))}
            <time className="whitespace-nowrap">{time}</time>
          </p>
        </Columns>
      </div>
    </section>
  );
};

export default Intro;
