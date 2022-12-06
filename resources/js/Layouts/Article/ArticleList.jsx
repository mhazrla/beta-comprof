import { InertiaLink } from "@inertiajs/inertia-react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";

const isArticle = (article) => {
    console.log(article);
    return article.map((data, i) => {
        return (
            <Card
                className="w-full shadow-xl rounded-2xl mt-12 sm:mt-20"
                key={i}
            >
                <InertiaLink href={route("article.show", data.id)}>
                    <CardHeader color="blue" className="relative h-56">
                        <img src={data.img} alt="" className="h-full w-full" />
                    </CardHeader>
                    <CardBody className="text-center">
                        <Typography variant="h5" className="mb-2">
                            {data.title}
                        </Typography>
                        <Typography className="text-start">
                            {data.description}
                        </Typography>
                    </CardBody>
                    <CardFooter
                        divider
                        className="flex items-center justify-between py-3"
                    >
                        <Typography variant="small">
                            {data.category.name}
                        </Typography>
                        <Typography
                            variant="small"
                            color="gray"
                            className="flex gap-1"
                        >
                            <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                            {data.date}
                        </Typography>
                    </CardFooter>
                </InertiaLink>
            </Card>
        );
    });
};

const noArticle = () => {
    return <div>Saat ini belum ada berita tersedia</div>;
};

const ArticleList = ({ article }) => {
    return article ? isArticle(article) : noArticle();
};

export default ArticleList;
