import { useRef, useState } from "react";

import * as hooks from "./lib";

function App() {
  const containerRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  hooks.useClickOutside(containerRef, isOpen, () => {
    setIsOpen(!isOpen);
  });

  const cd = hooks.useComponentSize(containerRef);

  const { width } = hooks.useWindowSize();

  return (
    <div className="App" style={{ background: "lightgreen", height: 500 }}>
      <div
        ref={containerRef}
        style={{ background: "red", height: 200 }}
        onClick={() => setIsOpen(true)}
      >
        useClickOutside
      </div>

      <div
        onClick={() => console.log("div 2 clicked")}
        style={{ background: "blue", height: 200 }}
      >
        test 2
      </div>
    </div>
  );
}

export default App;
