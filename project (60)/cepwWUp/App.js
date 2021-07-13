import React from "react"

import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"

function App() {
    return (
        <div>
            <header className="navbar">This is the header</header>
            <MainContent />
            <Footer />
        </div>
    )
}

export default App