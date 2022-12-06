import Navbar from "@/Components/Navbar";
import Hero from "@/Layouts/Article/Hero";
import ArticleList from "@/Layouts/Article/ArticleList";
import { usePage } from "@inertiajs/inertia-react";
import React from "react";

const Article = (props) => {
    const { asset } = usePage().props;

    const image = {
        logo: asset + "/image/Article/logo.png",
        hero: asset + "/image/Article/news.png",
    };

    return (
        <div className=" min-h-screen">
            <Navbar asset={image} />
            <Hero asset={image} />

            <div className="grid md:grid-cols-3 relative gap-6 px-10">
                <ArticleList article={props.article} />
            </div>
        </div>
    );
};

export default Article;
