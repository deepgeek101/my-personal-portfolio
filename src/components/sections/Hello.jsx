import { site } from "../../content/site";
import Section from "../layout/Section";

// Click-to-copy on the email comes in Phase 5; mailto: stays as the fallback.
const Hello = (section) => {
  return (
    <Section {...section}>
      <p className="max-w-[60ch]">{site.copy.hello}</p>
      <p className="mt-6 break-words font-display text-[clamp(1.25rem,3vw,1.75rem)]">
        <a href={`mailto:${site.email}`} className="link">
          {site.email}
        </a>
      </p>
      <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
        {site.socials.map((social) => (
          <li key={social.id}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              {social.label}
              <span aria-hidden="true"> ↗</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Hello;
