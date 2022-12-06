import { Input } from "@material-tailwind/react";
import { useForm, usePage } from "@inertiajs/inertia-react";
import React from "react";

export default function SectionContact() {
    const { data, setData, post, processing, reset, errors } = useForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
    });
    const { flash } = usePage().props;

    const submit = (e) => {
        e.preventDefault();
        post(route("contact.submit"), { onSuccess: () => reset() });
    };
    return (
        <div className="flex items-center justify-between px-8">
            <div className=" font-bold tracking-tight text-gray-700 sm:text-4xl">
                <span className="block text-5xl">IND!</span>
                <span className="block text-3xl">Communication</span>
                <span className="block text-gray-700 text-2xl">
                    We’d Love to Hear from You. Let’s Get in Touch.
                </span>
                <form onSubmit={submit}>
                    <div className="flex-col mt-3">
                        <div className="flex w-96 items-end gap-4">
                            <Input
                                variant="standard"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                placeholder="Name *"
                            />
                            {errors.name ? (
                                <small className="text-red-500">
                                    {errors.name}
                                </small>
                            ) : (
                                ""
                            )}
                            <Input
                                variant="standard"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                placeholder="Email *"
                            />
                            {errors.email ? (
                                <small className="text-red-500">
                                    {errors.email}
                                </small>
                            ) : (
                                ""
                            )}
                        </div>
                        <div className="flex w-96 items-end gap-4">
                            <Input
                                variant="standard"
                                value={data.phone}
                                onChange={(e) =>
                                    setData("phone", e.target.value)
                                }
                                placeholder="Phone *"
                            />
                            {errors.phone ? (
                                <small className="text-red-500">
                                    {errors.phone}
                                </small>
                            ) : (
                                ""
                            )}
                            <Input
                                variant="standard"
                                value={data.company}
                                onChange={(e) =>
                                    setData("company", e.target.value)
                                }
                                placeholder="Your Company *"
                            />
                            {errors.company ? (
                                <small className="text-red-500">
                                    {errors.company}
                                </small>
                            ) : (
                                ""
                            )}
                        </div>
                        <div className="flex flex-col w-96 items-end gap-4 mt-1">
                            <Input
                                variant="standard"
                                value={data.message}
                                onChange={(e) =>
                                    setData("message", e.target.value)
                                }
                                placeholder="Message *"
                            />
                            {errors.message ? (
                                <small className="text-red-500">
                                    {errors.message}
                                </small>
                            ) : (
                                ""
                            )}
                        </div>
                        <button
                            className="flex justify-center mt-3 w-96 text-white text-center items-center bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg"
                            type="submit"
                        >
                            {processing ? "Sending" : "Send Message"}
                        </button>
                    </div>
                </form>
            </div>

            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <img
                    src="https://cdn3d.iconscout.com/3d/free/thumb/social-media-marketing-in-mobile-online-4409958-3679266.png"
                    alt="Hero Illustration"
                    className="w-fit"
                />
            </div>
        </div>
    );
}
