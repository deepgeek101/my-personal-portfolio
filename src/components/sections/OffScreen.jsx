import { photos } from "../../content/photos";
import { site } from "../../content/site";
import Section from "../layout/Section";

const Polaroid = ({ src, width, height, alt, caption, rotate }) => (
  <figure
    className="polaroid border border-rule bg-frame p-2.5 pb-8"
    style={{ "--r": `${rotate}deg` }}
  >
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      className="aspect-square w-full object-cover"
    />
    {caption && (
      <figcaption className="wonky -mb-5 mt-3 font-display text-sm">
        {caption}
      </figcaption>
    )}
  </figure>
);

// Hover-to-straighten and click-to-enlarge come in Phase 5.
const OffScreen = (section) => {
  return (
    <Section {...section}>
      {site.offScreen.map((paragraph) => (
        <p key={paragraph} className="max-w-[60ch]">
          {paragraph}
        </p>
      ))}
      <ul className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8">
        {photos.map((photo) => (
          <li key={photo.src}>
            <Polaroid {...photo} />
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default OffScreen;
