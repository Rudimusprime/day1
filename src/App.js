import React from "react";
import Header from "./components/header";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Items from "./components/items";

function App() {
    return (
        <div className="root">
            Hello World
            <Header/>
            <About/>
            <Contact/>
            <Items/>
            <Footer/>
        </div>
    )
}

export default App;