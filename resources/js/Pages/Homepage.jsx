import Navbar from "@/Components/Navbar";
import Hero from "@/Layouts/Homepage/Hero";
import IndiDo from "@/Layouts/Homepage/IndiDo";
import React from "react";

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <IndiDo />
        </div>
    );
};

export default Homepage;
