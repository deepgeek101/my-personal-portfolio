import { useRef } from "react";

// A taped photo print that straightens on hover and opens larger on click
// (REVAMP.md §4.6). The larger view is a native <dialog>: showModal() traps
// focus inside it and Esc closes it, with no extra code.
const Polaroid = ({ src, width, height, alt, caption, rotate }) => {
  const dialog = useRef(null);

  // Clicks on the dimmed backdrop land on the <dialog> element itself.
  const onDialogClick = (e) => {
    if (e.target === dialog.current) dialog.current.close();
  };

  return (
    <>
      <button
        type="button"
        onClick={() => dialog.current.showModal()}
        aria-label={`Enlarge photo: ${alt}`}
        className="polaroid block w-full border border-rule bg-frame p-2.5 pb-8 text-left"
        style={{ "--r": `${rotate}deg` }}
      >
        <img
          src={src}
          alt=""
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          className="aspect-square w-full object-cover"
        />
        {caption && (
          <span className="wonky -mb-5 mt-3 block font-display text-sm">
            {caption}
          </span>
        )}
      </button>

      <dialog
        ref={dialog}
        onClick={onDialogClick}
        aria-label={alt}
        className="photo-dialog"
      >
        <figure className="border border-rule bg-frame p-3 pb-4">
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="max-h-[75vh] w-auto"
          />
          <div className="mt-3 flex items-baseline justify-between gap-6">
            {caption ? (
              <figcaption className="wonky font-display">{caption}</figcaption>
            ) : (
              <span />
            )}
            <form method="dialog">
              <button className="label hover:text-ink">Close</button>
            </form>
          </div>
        </figure>
      </dialog>
    </>
  );
};

export default Polaroid;
