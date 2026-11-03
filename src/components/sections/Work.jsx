import { projects } from "../../content/projects";
import { site } from "../../content/site";
import Section from "../layout/Section";

// "Python, Pandas, and NumPy": Intl.ListFormat handles the commas and "and".
const list = new Intl.ListFormat("en", { type: "conjunction" });

// A numbered list rather than cards. Click-to-expand rows (with the
// "what I did / hard part / learned" story) come in Phase 5.
const Work = (section) => {
  return (
    <Section {...section}>
      <ol>
        {projects.map((project, i) => (
          <li
            key={project.slug}
            id={`work-${project.slug}`}
            className="grid grid-cols-[2.5rem_minmax(0,1fr)] border-b border-rule py-6 first:pt-0"
          >
            <span className="label pt-1.5">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-display text-xl leading-snug sm:text-2xl">
                {project.title}
              </h3>
              <p className="label mt-1">{project.tools.join(" · ")}</p>
              <p className="mt-3 text-muted">{project.summary}</p>
              <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
                {project.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                    >
                      {link.label}
                      <span className="sr-only">: {project.title}</span>
                      <span aria-hidden="true"> ↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-10 max-w-[60ch] text-muted">
        {site.copy.toolsLead} {list.format(site.tools.current)}.{" "}
        {site.copy.startedOnLead} {list.format(site.tools.startedOn)}.
      </p>
    </Section>
  );
};

export default Work;
