import { useEffect, useRef } from "react";

/**
 * Gets the width and Height of the component.
 *
 * @param {ref} ref - Reference of a container
 *
 * @return {object} {width, height} - Returns width & height
 */

const useComponentSize = (ref = useRef) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, [ref]);

  return dimensions.current;
};

export default useComponentSize;
