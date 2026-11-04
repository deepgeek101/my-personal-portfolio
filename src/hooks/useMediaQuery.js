import { useSyncExternalStore } from "react";

// Whether a CSS media query currently matches, kept up to date as it changes.
// useSyncExternalStore is React's way to read a value that lives outside
// React (here, the browser's media query list) without tearing or stale state.
const useMediaQuery = (query) =>
  useSyncExternalStore(
    (onChange) => {
      const list = matchMedia(query);
      list.addEventListener("change", onChange);
      return () => list.removeEventListener("change", onChange);
    },
    () => matchMedia(query).matches,
    () => false
  );

export default useMediaQuery;
