import Navbar from "@/Components/Navbar";
import Hero from "@/Layouts/Homepage/Hero";
import IndiDo from "@/Layouts/Homepage/IndiDo";
import News from "@/Layouts/Homepage/News";
import Portofolio from "@/Layouts/Homepage/Portfolio";
import Services from "@/Layouts/Homepage/Services";
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
        do_1: asset + "/image/Homepage/do_1.png",
        do_2: asset + "/image/Homepage/do_2.png",
        news: asset + "/image/Homepage/news.png",
    };

    return (
        <div>
            <Navbar />
            <Hero asset={image} />
            <IndiDo asset={image} />
            <Portofolio />
            <News asset={image} />
        </div>
    );
};

export default Homepage;
