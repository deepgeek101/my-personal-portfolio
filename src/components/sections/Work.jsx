import { useEffect, useState } from "react";
import { projects } from "../../content/projects";
import { site } from "../../content/site";
import Section from "../layout/Section";
import ProjectRow from "../ProjectRow";
import CursorPreview from "../CursorPreview";

// "Python, Pandas, and NumPy": Intl.ListFormat handles the commas and "and".
const list = new Intl.ListFormat("en", { type: "conjunction" });

// "#work-earthbag-dome-house" -> "earthbag-dome-house", if it's a project.
const slugFromHash = () => {
  const slug = location.hash.replace(/^#work-/, "");
  return projects.some((p) => p.slug === slug) ? slug : null;
};

const Work = (section) => {
  const [open, setOpen] = useState(() => new Set([slugFromHash()].filter(Boolean)));
  const [hovered, setHovered] = useState(null);

  // A shared link like /#work-portfolio-website opens that row. On first load
  // the browser looks for that id before React has rendered it, so scroll
  // there ourselves once it exists.
  useEffect(() => {
    const slug = slugFromHash();
    // "instant": jump like a normal anchor link would, not a smooth glide.
    if (slug)
      document
        .getElementById(`work-${slug}`)
        ?.scrollIntoView({ behavior: "instant" });
  }, []);

  useEffect(() => {
    const onHashChange = () => {
      const slug = slugFromHash();
      if (slug) setOpen((prev) => new Set(prev).add(slug));
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const toggle = (slug) => {
    const opening = !open.has(slug);
    const next = new Set(open);
    if (opening) next.add(slug);
    else next.delete(slug);
    setOpen(next);

    // Keep the address bar deep-linkable without jumping the page.
    // replaceState changes the URL but, unlike setting location.hash, never scrolls.
    if (opening) history.replaceState(null, "", `#work-${slug}`);
    else if (location.hash === `#work-${slug}`)
      history.replaceState(null, "", location.pathname + location.search);
  };

  // No preview while that row is already open and showing its image.
  const previewImage =
    hovered && !open.has(hovered.slug) ? hovered.image : null;

  return (
    <Section {...section}>
      <ol>
        {projects.map((project, i) => (
          <ProjectRow
            key={project.slug}
            project={project}
            number={String(i + 1).padStart(2, "0")}
            open={open.has(project.slug)}
            onToggle={() => toggle(project.slug)}
            onHover={setHovered}
          />
        ))}
      </ol>
      <CursorPreview image={previewImage} />

      <p className="mt-10 max-w-[60ch] text-muted">
        {site.copy.toolsLead} {list.format(site.tools.current)}.{" "}
        {site.copy.startedOnLead} {list.format(site.tools.startedOn)}.
      </p>
    </Section>
  );
};

export default Work;
