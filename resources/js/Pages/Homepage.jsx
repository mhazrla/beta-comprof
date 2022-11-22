import Navbar from "@/Components/Navbar";
import Hero from "@/Layouts/Homepage/Hero";
import IndiDo from "@/Layouts/Homepage/IndiDo";
import { usePage } from "@inertiajs/inertia-react";
import React from "react";

const Homepage = () => {
    const { asset } = usePage().props;
    console.log(asset);

    const image = {
        logo: asset + "/image/Homepage/logo.png",
        hero: asset + "/image/Homepage/hero.png",
        circle: asset + "/image/Homepage/circle.png",
        searching: asset + "/image/Homepage/searching.png",
    };

    return (
        <div>
            <Navbar />
            <Hero asset={image} />
            <IndiDo asset={image} />
        </div>
    );
};

export default Homepage;
