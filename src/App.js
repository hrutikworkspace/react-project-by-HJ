import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// const heading = React.createElement("h1", {id:"heading"}, "Epsiode3");
 
// What is JSX ?
// sol:- a. JSX is just like a HTML but it is not a HTML 

// const Temp = () => (
//     <h1>{console.log("hello zz")}</h1>
// )

// const HeaderTag = () => ( <h1 id="heading">Epsiode 3...</h1> );
// const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />)