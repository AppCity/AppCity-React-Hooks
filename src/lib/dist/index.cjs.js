Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);

var useClickOutside = function useClickOutside() {
  var ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : react.useRef;
  var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var action = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
  react.useEffect(function () {
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
  var ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : react.useRef;
  var dimensions = react.useRef({
    width: 0,
    height: 0
  });
  react.useEffect(function () {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, [ref]);
  return dimensions.current;
};

var useWindowSize = function useWindowSize() {
  var _useState = react.useState({
    width: undefined,
    height: undefined
  }),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      windowSize = _useState2[0],
      setWindowSize = _useState2[1];

  var handleResize = react.useCallback(function () {
    // Only runs on client side
    if (typeof window !== "undefined") setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, []);
  react.useLayoutEffect(function () {
    handleResize();
    window.addEventListener("resize", handleResize);
    return function () {
      return window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);
  return windowSize;
};

exports.useClickOutside = useClickOutside;
exports.useComponentSize = useComponentSize;
exports.useWindowSize = useWindowSize;
//# sourceMappingURL=index.cjs.js.map
