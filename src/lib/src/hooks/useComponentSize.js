/*
 * Returns the current height and width of a component
 */

import { useEffect, useRef } from "react";

const useComponentSize = (ref = useRef) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, [ref]);

  return dimensions.current;
};

export default useComponentSize;
