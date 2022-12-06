import React, { useRef, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import { Textarea, Button } from "@material-tailwind/react";
import { Inertia } from "@inertiajs/inertia";
import swal from "sweetalert";

const Create = (props) => {
    var article = props.article;
    console.log(props);
    const errors = props.errors;
    const [values, setValues] = useState({
        title: article?.title || "",
        description: article?.description || "",
        category_id: article?.category_id || "",
        tags: article?.tags.map((data, i) => data.name) || "",
    });

    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    };

    const imageRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);

        const formData = new FormData();

        for (let key in values) {
            formData.append(key, values[key]);
        }

        formData.append("img", imageRef.current.files[0]);

        Inertia.post(route("article.store"), formData, {
            forceFormData: true,
            onSuccess: () => {
                swal("Good Job!", "New Article has been added", "success");
            },
            onError: (errors) => {
                swal("Kamu gagal kewren", "Article gagal diaplot", "error");
            },
        });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append("id", article.id);

        for (let key in values) {
            formData.append(key, values[key]);
        }

        formData.append("img", imageRef.current.files[0]);
        formData.append("_method", "patch");
        Inertia.post(route("article.update", article.id), formData, {
            onSuccess: (page) => {
                swal("Kamu kewren!", "Article udah diupdate yak", "success");
            },
            onError: (errors) => {
                swal(
                    "Kamu gagal kewren",
                    "Article gagal ddiupdate nih",
                    "error"
                );
            },
        });
    };
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    {article ? "Edit Article" : "Create Article"}
                </h2>
            }
        >
            <Head title={article ? "Edit Article" : "Create Article"} />

            <div className="p-12">
                <form
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                    onSubmit={article ? handleUpdate : handleSubmit}
                    action="post"
                    encType="multipart/form-data"
                >
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="title"
                        >
                            Title
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="title"
                            type="text"
                            placeholder="Title"
                            name="title"
                            onChange={handleChange}
                            value={values.title}
                        />
                        {errors.title && (
                            <div className="text-sm text-red-600">
                                {errors.title}
                            </div>
                        )}
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="description"
                        >
                            Description
                        </label>
                        <Textarea
                            color="blue"
                            id="description"
                            onChange={handleChange}
                            value={values.description}
                            placeholder="Description"
                            name="description"
                            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {errors.description && (
                            <div className="text-sm text-red-600">
                                {errors.description}
                            </div>
                        )}
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="tags"
                        >
                            Tags
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="tags"
                            type="text"
                            placeholder="Separate by #"
                            name="tags"
                            onChange={handleChange}
                            value={values.tags}
                        />
                        {errors.tags && (
                            <div className="text-sm text-red-600">
                                {errors.tags}
                            </div>
                        )}
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="category_id"
                        >
                            Category
                        </label>
                        <div className="flex w-full items-end gap-4">
                            <div className="flex justify-center">
                                <div className="mb-3 xl:w-96">
                                    <select
                                        className="form-select appearance-none
                                            block
                                            w-full
                                            px-3
                                            py-1.5
                                            text-base
                                            font-normal
                                            text-gray-700
                                            bg-white bg-clip-padding bg-no-repeat
                                            border border-solid border-gray-300
                                            rounded
                                            transition
                                            ease-in-out
                                            m-0
                                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        aria-label="Default select example"
                                        name="category_id"
                                        id="category_id"
                                        onChange={handleChange}
                                    >
                                        <option defaultValue={null}>
                                            Select Category
                                        </option>
                                        {props.category.map((data, i) => {
                                            return (
                                                <option value={data.id} key={i}>
                                                    {data.name}
                                                </option>
                                            );
                                        })}
                                    </select>
                                    {errors.category_id && (
                                        <div className="text-sm text-red-600">
                                            {errors.category_id}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-4">
                        <div className="flex w-full items-end gap-4">
                            <div className="mb-3 w-96">
                                <label
                                    htmlFor="img"
                                    className="form-label inline-block mb-2 text-gray-700"
                                >
                                    Default file input example
                                </label>
                                <input
                                    className="form-control
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    type="file"
                                    id="img"
                                    name="img"
                                    ref={imageRef}
                                />
                                {errors.img && (
                                    <div className="text-sm text-red-600">
                                        {errors.img}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <Button
                            fullWidth
                            type="submit"
                            className="bg-primary-indi"
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
