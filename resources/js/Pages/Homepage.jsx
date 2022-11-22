import Navbar from "@/Components/Navbar";
import SectionContact from "@/Layouts/Contact/SectionContact";
import Hero from "@/Layouts/Homepage/Hero";
import IndiDo from "@/Layouts/Homepage/IndiDo";
import React from "react";

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <IndiDo />
            <SectionContact />
        </div>
    );
};

export default Homepage;
