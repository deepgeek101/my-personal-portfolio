import { photos } from "../../content/photos";
import { site } from "../../content/site";
import Section from "../layout/Section";
import Polaroid from "../Polaroid";

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
