import { useEffect, useRef } from "react";

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
