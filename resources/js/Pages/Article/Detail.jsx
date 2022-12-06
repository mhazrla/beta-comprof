import { usePage } from "@inertiajs/inertia-react";
import React from "react";
import Navbar from "@/Components/Navbar";

const Detail = ({ article }) => {
    const { asset } = usePage().props;
    var article = article[0];
    console.log(article);

    const image = {
        logo: asset + "/image/Homepage/logo.png",
    };
    return (
        <div>
            <Navbar asset={image} />
            <section className="text-gray-700 body-font overflow-hidden bg-white">
                <div className="container px-5 py-24 mx-auto">
                    <a
                        href="javascript:history.back()"
                        class="inline-flex items-center justify-center px-6 py-3 mb-2 text-lg text-white bg-green-500 rounded-md hover:bg-green-400 sm:w-auto sm:mb-0"
                        data-primary="green-400"
                        data-rounded="rounded-2xl"
                        data-primary-reset="{}"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="currentColor"
                            class="bi bi-arrow-left-circle"
                            viewBox="0 0 16 16"
                        >
                            {" "}
                            <path
                                fill-rule="evenodd"
                                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
                            />{" "}
                        </svg>
                    </a>
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img
                            alt="ecommerce"
                            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                            src="https://www.whitmorerarebooks.com/pictures/medium/2465.jpg"
                        />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">
                                {article.category.name}
                            </h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                                {article.title}
                            </h1>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    {article.tags.map((data, i) => {
                                        return (
                                            <span className="text-gray-600 ml-3">
                                                {data.name}
                                            </span>
                                        );
                                    })}
                                </span>
                            </div>
                            <p className="leading-relaxed">
                                {article.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Detail;
