import useMediaQuery from "./useMediaQuery";

// True when the visitor has asked their system for less motion. CSS handles
// most of this (index.css); this is for motion that JavaScript drives.
const useReducedMotion = () => useMediaQuery("(prefers-reduced-motion: reduce)");

export default useReducedMotion;
