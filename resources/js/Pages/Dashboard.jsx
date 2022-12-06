import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, InertiaLink, Link } from "@inertiajs/inertia-react";
import swal from "sweetalert";
import { Inertia } from "@inertiajs/inertia";

export default function Dashboard(props) {
    const handleDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                Inertia.delete(route("article.destroy", id), {
                    onSuccess: () => swal("Mengkeren! Data udah keapus"),
                });
            }
        });
    };

    var article = props.article;
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                {article.map((data, i) => {
                    return (
                        <div
                            className="max-w-7xl mx-auto sm:px-6 lg:px-8 m-4"
                            key={i}
                        >
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                <div className="max-w-sm w-full lg:max-w-full lg:flex">
                                    <div
                                        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                                        style={{
                                            backgroundImage:
                                                'url("/img/card-left.jpg")',
                                        }}
                                        title="Woman holding a mug"
                                    ></div>
                                    <div className=" bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                        <div className="mb-8">
                                            <p className="text-sm text-gray-600 flex items-center">
                                                {data.category.name}
                                            </p>
                                            <div className="text-gray-900 font-bold text-xl mb-2">
                                                {data.title}
                                            </div>
                                            <p className="text-gray-700 text-base">
                                                {data.description}
                                            </p>
                                        </div>
                                        <div className="shrink-0 flex items-center space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                            <InertiaLink
                                                href={route(
                                                    "article.show",
                                                    data.id
                                                )}
                                            >
                                                Detail
                                            </InertiaLink>
                                            <InertiaLink
                                                href={route(
                                                    "article.edit",
                                                    data.id
                                                )}
                                            >
                                                Edit
                                            </InertiaLink>
                                            <button
                                                onClick={handleDelete.bind(
                                                    this,
                                                    data.id
                                                )}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                        <div className="flex items-center">
                                            <img
                                                className="w-10 h-10 rounded-full mr-4"
                                                src="/img/jonathan.jpg"
                                                alt="Avatar of Jonathan Reinink"
                                            />
                                            <div className="text-sm">
                                                <p className="text-gray-900 leading-none">
                                                    Jonathan Reinink
                                                </p>
                                                <p className="text-gray-600">
                                                    Aug 18
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </AuthenticatedLayout>
    );
}
