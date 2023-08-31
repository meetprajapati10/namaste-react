import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement-JS Object => HTMLElement(render)

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namaste React ✌️",
// );

// JSX (transpiled before it reaches the JS Engine) - PARCEL - Babel

// JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)
// const jsxHeading = (
//   <h1 id="heading" className="head" tabIndex="2">
//     Namaste React Using JSX ✌️
//   </h1>
// );

// *********************************************************

// React Element
const heading = (
  <div>
    <h1 id="heading">Namaste React Using JSX</h1>
  </div>
);

// Title component is functional component
const Title = () => {
  return (
    <h1 id="title" className="titleHead">
      React Title
    </h1>
  );
};

// React Functional Component

// Component inside the component AKA Component Composition
const HeadingComponent = () => (
  <div>
    <Title />
    {/* we can also use {Title()} */}
    {/* we can also use <Title></Title> */}
    {console.log(10)}
    <h1 id="heading">Namaste React Using Component!</h1>
  </div>
);

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// passing react element inside root
root.render(<Title />);
