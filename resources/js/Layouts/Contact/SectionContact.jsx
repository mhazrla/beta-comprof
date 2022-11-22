import { Input } from "@material-tailwind/react";
import React from "react";

export default function SectionContact() {
    return (
        <div className="container">
            <div className="mt-10 ml-10">
                <div className="text-5xl font-sans text-bold text-gray-600">
                    IND!
                </div>
                <div className="text-5xl font-sans text-bold text-gray-600">
                    COMUNICATION
                </div>
                <div className="text-3xl font-sans text-bold text-gray-600">
                    We’d Love to Hear from You. Let’s Get in Touch.
                </div>
                <div className="flex w-96 mt-6 items-end gap-4">
                    <Input variant="standard" placeholder="Name *" />
                    <Input variant="standard" placeholder="Email *" />
                </div>
                <div className="flex w-96 items-end gap-4">
                    <Input variant="standard" placeholder="Phone *" />
                    <Input variant="standard" placeholder="Your Company *" />
                </div>
                <div className="flex flex-col w-96 items-end gap-4">
                    <Input variant="standard" placeholder="Message *" />
                </div>
            </div>
        </div>
    );
}
