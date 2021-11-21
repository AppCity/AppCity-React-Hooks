import { useEffect, useRef, useState, useCallback, useLayoutEffect } from 'react';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';

var useClickOutside = function useClickOutside() {
  var ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : useRef;
  var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var action = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
  useEffect(function () {
    var handleClickOutside = function handleClickOutside(event) {
      if (state) {
        if (ref.current && !ref.current.contains(event.target)) action();
      }
    }; // Bind the event listener


    window.addEventListener("mousedown", handleClickOutside); //CleanUp

    return function () {
      return window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, state, action]);
};

/*
 * Returns the current height and width of a component
 */

var useComponentSize = function useComponentSize() {
  var ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : useRef;
  var dimensions = useRef({
    width: 0,
    height: 0
  });
  useEffect(function () {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, [ref]);
  return dimensions.current;
};

var useWindowSize = function useWindowSize() {
  var _useState = useState({
    width: undefined,
    height: undefined
  }),
      _useState2 = _slicedToArray(_useState, 2),
      windowSize = _useState2[0],
      setWindowSize = _useState2[1];

  var handleResize = useCallback(function () {
    // Only runs on client side
    if (typeof window !== "undefined") setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, []);
  useLayoutEffect(function () {
    handleResize();
    window.addEventListener("resize", handleResize);
    return function () {
      return window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);
  return windowSize;
};

export { useClickOutside, useComponentSize, useWindowSize };
//# sourceMappingURL=index.esm.js.map
