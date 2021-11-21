import { useRef, useState } from "react";
//Hooks
import * as hooks from "./lib/src/hooks";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  hooks.useClickOutside(containerRef, isOpen, () => setIsOpen(!isOpen));

  const componentSize = hooks.useComponentSize(containerRef);
  console.log("🚀 --- componentSize", componentSize);

  const { width } = hooks.useWindowSize();
  console.log("🚀 --- width", width);

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
        Div Component 2
      </div>
    </div>
  );
}

export default App;
