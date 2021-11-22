import { useEffect, useRef } from "react";

/**
 * Creates a click ouside listener.
 * Useful Scenario- dropdown open and click outside to close
 *
 * @param {ref} ref - Reference of a container
 * @param {boolean} state - Toggle State of the component
 * @param {function} action - Toggle function to update the visibility of component
 * @return
 */

const useClickOutside = (ref = useRef, state = false, action = () => {}) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (state) {
        if (ref.current && !ref.current.contains(event.target)) action();
      }
    };

    // Bind the event listener
    window.addEventListener("mousedown", handleClickOutside);

    //CleanUp
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [ref, state, action]);
};

export default useClickOutside;
