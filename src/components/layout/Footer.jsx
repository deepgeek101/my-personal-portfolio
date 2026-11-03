import { site } from "../../content/site";
import useKathmanduTime from "../../hooks/useKathmanduTime";
import { Columns, Rule } from "./Section";

const partOfDay = (hour) => {
  if (hour < 6) return "night";
  if (hour < 12) return "morning";
  if (hour < 17) return "afternoon";
  if (hour < 22) return "evening";
  return "night";
};

const Footer = () => {
  const { time, hour } = useKathmanduTime();
  const phrase = site.timeOfDayPhrases?.[partOfDay(hour)];

  return (
    <footer>
      <Rule />
      <div className="py-10 text-sm text-muted">
        <Columns marker="§ end">
          <p>
            {site.buildCity && <>Built by hand in {site.buildCity}. </>}
            Last updated {__BUILD_DATE__}. It&rsquo;s{" "}
            <time className="font-mono">{time}</time> in {site.location.city}
            {phrase ? <> &mdash; {phrase}.</> : "."}
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} {site.name}
          </p>
        </Columns>
      </div>
    </footer>
  );
};

export default Footer;
