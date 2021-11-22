# AppCity-React-Hooks

> Author: App City

_Version 1_

Custom React Hooks created to make ease of use for other common use cases like getting window dimensions or component dimensions, Click outside events, etc.

## Features

Custom React hooks.

- useClickOutside
- useComponentSize
- useWindowSize

## Installation NPM:

    npm i appcity-react-hooks

## Installation Yarn:

    yarn add appcity-react-hooks

## Links

- [Examples](https://github.com/AppCity/AppCity-React-Hooks/blob/master/example/Example.js)

## Quickstart

### useClickOutside

Listen to click events and register clicks outside a React component. Useful to close a dropdown when clicked outside its dropdown menu.

```jsx
import React, { useRef, useState } from "react";
import { useClickOutside } from "appcity-react-hooks";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  hooks.useClickOutside(containerRef, isOpen, () => setIsOpen(!isOpen));

  return (
    <div className="App" style={{ background: "lightgreen", height: 500 }}>
      <div
        ref={containerRef}
        style={{ background: "lightgrey", height: 200 }}
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
```

### useComponentSize

Get the width and height of any react component.

```jsx
import React, { useRef } from "react";
import { useComponentSize } from "appcity-react-hooks";

function App() {
  const containerRef = useRef(null);
  const componentSize = useComponentSize(containerRef);

  return (
    <div className="App" style={{ background: "lightgreen", height: 500 }}>
      <div ref={containerRef} style={{ background: "lightgrey", height: 200 }}>
        useComponentSize
      </div>
    </div>
  );
}
```

### useWindowSize

Get the width and height of a Window. Update the width and height based on the window resize. It is responsive and listens to window resizing events.

```jsx
import React from "react";
import { useWindowSize } from "appcity-react-hooks";

function App() {
  const { width, height } = useWindowSize();

  return (
    <div className="App" style={{ background: "lightgreen", height: 500 }}>
      <div style={{ background: "lightgrey", height: 200 }}>useWindowSize</div>
    </div>
  );
}
```

## Parameters

#### useClickOutside

| Name   | Description                                  | Type     | Required | Example  |
| ------ | -------------------------------------------- | -------- | -------- | -------- |
| ref    | Pass the ref of the dropdown cotainer        | Ref      | yes      | useRef() |
| state  | Pass the state of the component              | Boolean  | yes      | false    |
| action | Pass the toggle function to update the state | function | yes      | toggle() |

#### useComponentSize

| Name | Description                           | Type | Required | Example  |
| ---- | ------------------------------------- | ---- | -------- | -------- |
| ref  | Pass the ref of the dropdown cotainer | Ref  | yes      | useRef() |

#### useWindowSize

Does not require any parameters to be passed.

### Creators

_App City_

#### License: MIT
