import React from "react"
import ReactDOM from "react-dom"
import Info from "./Info"
import About from "./About"
import Social from "./Social"

function App(){
    return (
        <div className="main">
        <Info />
        <About />
        <Social />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))