import { useEffect, useRef, useState } from "react";
import InkLink from "./InkLink";

// Clicking the email copies it and shows a small "copied ✓" note
// (REVAMP.md §4.7). Without the Clipboard API — or if copying fails — the
// mailto: link works as normal.
const CopyEmail = ({ email }) => {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const onClick = async (e) => {
    if (!navigator.clipboard) return;
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1500);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <span className="relative inline-block">
      <InkLink href={`mailto:${email}`} onClick={onClick}>
        {email}
      </InkLink>
      <span
        aria-hidden="true"
        data-visible={copied}
        className="copied-note wonky font-display text-base text-accent"
      >
        copied ✓
      </span>
      {/* Screen readers hear this instead of seeing the note. */}
      <span className="sr-only" aria-live="polite">
        {copied ? "Email address copied" : ""}
      </span>
    </span>
  );
};

export default CopyEmail;
