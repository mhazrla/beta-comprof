import ArticleList from "../Article/ArticleList";

export default function IndiDo({ asset }) {
    return (
        <div className="bg-white pt-4 pb-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="max-w-lg sm:mx-auto md:max-w-none">
                    <div className="grid md:grid-cols-2 relative gap-6">
                        <img
                            src={asset.news}
                            alt="News Update"
                            className=" mx-auto my-auto"
                        />
                        <div className="flex flex-col justify-center text-center rounded-3xl ">
                            <p className="leading-8 md:text-5xl text-4xl text-gray-900 font-bold">
                                News Updated
                            </p>
                            <p className="mt-2 leading-7 md:text-xl  text-text-secondary font-thin">
                                See what latest updated that is happened <br />{" "}
                                on INDI Communication
                            </p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 relative gap-6">
                        <ArticleList />
                        <ArticleList />
                        <ArticleList />
                        <ArticleList />
                    </div>
                </div>
            </div>
        </div>
    );
}
