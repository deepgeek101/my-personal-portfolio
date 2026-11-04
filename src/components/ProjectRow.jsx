import InkLink from "./InkLink";
import Squiggle from "./Squiggle";

const storyParts = [
  ["did", "What I did"],
  ["hard", "The hard part"],
  ["learned", "What I learned"],
];

// One numbered row in "Work" (REVAMP.md §4.4). The header is a real button
// that opens the details below it; closed details are `inert`, so their links
// can't be tabbed to while hidden.
const ProjectRow = ({ project, number, open, onToggle, onHover }) => {
  const detailsId = `work-${project.slug}-details`;
  const story = storyParts.filter(([key]) => project.story?.[key]);

  return (
    <li
      id={`work-${project.slug}`}
      className="border-b border-rule"
      onPointerEnter={() => onHover(project)}
      onPointerLeave={() => onHover(null)}
    >
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={detailsId}
          onClick={onToggle}
          className="row-button grid w-full grid-cols-[2.5rem_minmax(0,1fr)_auto] items-baseline gap-x-2 py-6 text-left"
        >
          <span className="label relative justify-self-start">
            {number}
            <Squiggle kind="circle" className="row-circle" />
          </span>
          <span>
            <span className="row-title font-display text-xl leading-snug sm:text-2xl">
              {project.title}
            </span>
            <span className="label mt-1 block">
              {project.tools.join(" · ")}
            </span>
          </span>
          <span aria-hidden="true" className="row-arrow text-muted">
            ↗
          </span>
        </button>
      </h3>

      <div
        id={detailsId}
        className="row-body"
        data-open={open}
        inert={open ? undefined : ""}
      >
        <div className="overflow-hidden">
          <div className="pb-8 pl-[2.5rem]">
            <p className="max-w-[60ch] text-muted">{project.summary}</p>

            {story.length > 0 && (
              <dl className="mt-6 space-y-4">
                {story.map(([key, heading]) => (
                  <div key={key}>
                    <dt className="label">{heading}</dt>
                    <dd className="mt-1 max-w-[60ch]">{project.story[key]}</dd>
                  </div>
                ))}
              </dl>
            )}

            {project.image && (
              <img
                src={project.image.src}
                alt={project.image.alt}
                width={project.image.width}
                height={project.image.height}
                loading="lazy"
                decoding="async"
                className="mt-6 w-full max-w-md border border-rule"
              />
            )}

            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-1">
              {project.links.map((link) => (
                <li key={link.href}>
                  <InkLink
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                    <span className="sr-only">: {project.title}</span>
                    <span aria-hidden="true"> ↗</span>
                  </InkLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProjectRow;
