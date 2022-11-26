import { Input } from "@material-tailwind/react";
import React from "react";

export default function SectionContact() {
    return (
        <div className="flex items-center justify-between px-8">
            <div className=" font-bold tracking-tight text-gray-700 sm:text-4xl">
                <span className="block text-5xl">IND!</span>
                <span className="block text-3xl">Communication</span>
                <span className="block text-gray-700 text-2xl">
                    We’d Love to Hear from You. Let’s Get in Touch.
                </span>
                <div className="flex-col mt-3">
                    <div className="flex w-96 items-end gap-4">
                        <Input variant="standard" placeholder="Name *" />
                        <Input variant="standard" placeholder="Email *" />
                    </div>
                    <div className="flex w-96 items-end gap-4">
                        <Input variant="standard" placeholder="Phone *" />
                        <Input
                            variant="standard"
                            placeholder="Your Company *"
                        />
                    </div>
                    <div className="flex flex-col w-96 items-end gap-4 mt-1">
                        <Input variant="standard" placeholder="Message *" />
                    </div>
                    <div className="">
                        <button
                            className="flex justify-center mt-3 w-96 text-white text-center items-center bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg"
                            type="submit"
                        >
                            {/* {processing ? "submiting" : "submit"} */}
                            Submit
                        </button>
                    </div>
                </div>
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
