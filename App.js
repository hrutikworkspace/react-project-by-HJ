import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", {id:"heading"}, "Epsiode3");
 
// What is JSX ?
// sol:- a. JSX is just like a HTML but it is not a HTML 

const headerTag = <h1 id="heading">Epsiode 3...</h1>
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(headerTag)