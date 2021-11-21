/*
 * Returns window dimensions - width & height.
 * Responsive with event listeners.
 */

import { useState, useLayoutEffect, useCallback } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const handleResize = useCallback(() => {
    // Only runs on client side
    if (typeof window !== "undefined")
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useLayoutEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return windowSize;
};

export default useWindowSize;
