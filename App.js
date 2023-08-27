import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "Namste ReactJs."),
        React.createElement("h2", {}, "I'm a h2 tag"),
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "I'm a h1 tag"),
        React.createElement("h2", {}, "I'm a h2 tag"),
    ]),
]);

console.log(parent); // It is a React Element and React Element is basically a JS Object.

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
