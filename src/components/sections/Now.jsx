import { now } from "../../content/now";
import Section from "../layout/Section";

// What Deep is up to lately (nownownow.com). App.jsx leaves this section out
// while src/content/now.js is empty.
const Now = (section) => {
  return (
    <Section {...section}>
      <dl className="grid grid-cols-[6rem_minmax(0,1fr)] gap-x-4 gap-y-3">
        {now.items.map((item) => (
          <div key={item.label} className="contents">
            <dt className="label pt-1">{item.label}</dt>
            <dd>{item.text}</dd>
          </div>
        ))}
      </dl>
      {now.updated && (
        <p className="label mt-8">
          Last updated <time dateTime={now.updated}>{now.updated}</time>
        </p>
      )}
    </Section>
  );
};

export default Now;
