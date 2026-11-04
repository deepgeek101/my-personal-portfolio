import useMediaQuery from "./useMediaQuery";

// True for a mouse or trackpad that can hover. Pointer-following effects
// (crosshair, cursor preview, typing toast) only run when this is true.
const useFinePointer = () => useMediaQuery("(hover: hover) and (pointer: fine)");

export default useFinePointer;
