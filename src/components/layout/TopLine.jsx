import { site } from "../../content/site";
import LampToggle from "../LampToggle";

// Not a fixed header: a single line at the top that scrolls away.
const TopLine = () => {
  return (
    <header id="top" className="flex items-center justify-between py-5">
      <a href="#top" className="label hover:text-ink">
        {site.name}
      </a>
      <LampToggle />
    </header>
  );
};

export default TopLine;
