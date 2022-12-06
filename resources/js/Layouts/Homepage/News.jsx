import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";

const CardNews = () => {
    return (
        <Card className="w-fit shadow-xl rounded-2xl mt-12 sm:mt-20">
            <CardHeader color="blue" className="relative h-56">
                <img
                    src="https://www.material-tailwind.com/_next/image?url=%2Fimg%2Fblog.jpg&w=1920&q=75"
                    alt="img-blur-shadow"
                    className="h-full w-full"
                />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h5" className="mb-2">
                    Cozy 5 Stars Apartment
                </Typography>
                <Typography>
                    The place is close to Barceloneta Beach and bus stop just 2
                    min by walk and near to "Naviglio" where you can enjoy the
                    main night life in Barcelona.
                </Typography>
            </CardBody>
            <CardFooter
                divider
                className="flex items-center justify-between py-3"
            >
                <Typography variant="small">$899/night</Typography>
                <Typography variant="small" color="gray" className="flex gap-1">
                    <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                    Barcelona, Spain
                </Typography>
            </CardFooter>
        </Card>
    );
};
import ArticleList from "../Article/ArticleList";

export default function IndiDo({ asset, article }) {
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
                        <ArticleList article={article} />
                    </div>
                </div>
            </div>
        </div>
    );
}
