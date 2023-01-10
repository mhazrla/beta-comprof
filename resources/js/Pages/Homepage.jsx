import Navbar from "@/Components/Navbar";
import Contact from "@/Layouts/Homepage/Contact";
import Hero from "@/Layouts/Homepage/Hero";
import IndiDo from "@/Layouts/Homepage/IndiDo";
import News from "@/Layouts/Homepage/News";
import Portofolio from "@/Layouts/Homepage/Portfolio";

import { usePage } from "@inertiajs/inertia-react";
import React from "react";

const Homepage = (props) => {
    const article = props.article;
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
        contact: asset + "/image/Homepage/contact.png",
        icons: asset + "/image/Homepage/icons.png",
        telp: asset + "/image/Homepage/telp.png",
        email: asset + "/image/Homepage/email.png",
    };

    return (
        <div>
            <Navbar asset={image} />
            <Hero asset={image} />
            <IndiDo asset={image} />
            <Portofolio />
            <News asset={image} article={article} />
            <Contact asset={image} />
        </div>
    );
};

export default Homepage;
