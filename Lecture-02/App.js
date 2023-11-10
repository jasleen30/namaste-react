import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1",
    {
        id : "title",
    },
    "I am Heading"
);

const heading1 = React.createElement(
    "h1",
    {
        id:"title1",
    },
    "I am Heading1"
);
const container = React.createElement(
    "div",
    {
        id:"container",
    },
    [heading,heading1]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

