import React from "react";
import ReactDOM from "react-dom/client";

// React Element
// const element = (<h1 className="heading" tabIndex="5">Hello world by JSX</h1>);

// React Functional Component

const Title = () => <h1 className="heading">Hello world by JSX</h1>;
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 className="heading">Hello world by React Functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
