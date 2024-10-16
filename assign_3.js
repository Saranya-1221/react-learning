import React from "react";
import ReactDom from "react-dom/client";
import Logo from "./images/logo.png";
import UserIcon from "./images/user.png";
const nestedElement = React.createElement("div", { className: "title" }, [
  React.createElement("h1", {}, "I am H1 tag"),
  React.createElement("h2", {}, "I am H2 tag"),
  React.createElement("h3", {}, "I am H3 tag"),
]);

const jsxElement = (
  <div className="title">
    <h1>I am H1 tag in Jsx</h1>
    <h2>I am H2 tag in Jsx</h2>
    <h3>I am H3 tag in Jsx</h3>
  </div>
);

const TitleComponent = () => (
  <div id="title" style={{ color: "Red", fontSize: "24px" }}>
    Functional component
  </div>
);

const FunctionalComponent = () => (
  <div className="title">
    <TitleComponent />
    {nestedElement}
    {jsxElement}
  </div>
);

const HeaderComponent = () => (
  <div className="HeaderComponent">
    <img src={Logo}></img>
    <input type="search" className="search"></input>
    <img src={UserIcon}></img>
  </div>
);

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
