import { site } from "../../content/site";
import Section from "../layout/Section";
import CopyEmail from "../CopyEmail";
import InkLink from "../InkLink";

const Hello = (section) => {
  return (
    <Section {...section}>
      <p className="max-w-[60ch]">{site.copy.hello}</p>
      <p className="mt-6 break-words font-display text-[clamp(1.25rem,3vw,1.75rem)]">
        <CopyEmail email={site.email} />
      </p>
      {/* Extra room above so the "copied ✓" note doesn't sit on these links. */}
      <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
        {site.socials.map((social) => (
          <li key={social.id}>
            <InkLink href={social.href} target="_blank" rel="noopener noreferrer">
              {social.label}
              <span aria-hidden="true"> ↗</span>
            </InkLink>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Hello;
