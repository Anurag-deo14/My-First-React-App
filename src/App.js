import React from "react"
import NavBar from "./Navbar"
import HeroSection from "./Herosection"
import AppSection from "./Appsection"
import CardSection from "./Cardsection"
import Footer from "./footer"

const App = () => {
    return (
        <div>
            <NavBar/>
            <HeroSection />
        
            <CardSection />
            <AppSection />
            <Footer />
        </div>
    );
};
export default App;