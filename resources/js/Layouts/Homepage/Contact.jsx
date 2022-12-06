import { Input } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
export default function Contact({ asset }) {
    return (
        <div className="max-w-lg sm:mx-auto md:max-w-none">
            <div className="bg-yellow-100 rounded-3xl mx-10 md:p-9">
                <div className="grid md:grid-cols-2 relative gap-6 ">
                    <div className="bg-yellow-100 rounded-3xl">
                        <p className="font-semibold leading-8 md:text-6xl sm:text-2xl text-text-secondary">
                            IND!
                        </p>
                        <p className="font-semibold leading-8 md:text-6xl sm:text-2xl text-text-secondary">
                            Communication
                        </p>
                        <p className="md:grid-cols-2 relative gap-6 mt-2 leading-7 md:text-xl text-text-third ">
                            We provide modern marketing communication strategies
                            that tell a credible story about the whole company
                            to the whole world through the whole range of
                            communication channels.
                        </p>
                        <img
                            src={asset.contact}
                            alt="Contact"
                            className="w-52 mx-8"
                        />
                    </div>
                    <div className="flex-col mt-28 ml-20">
                        <div className="flex items-end gap-4">
                            <Input
                                variant="standard"
                                className="bg-yellow-100"
                                placeholder="Name *"
                            />
                            <Input
                                variant="standard"
                                className="bg-yellow-100"
                                placeholder="Email *"
                            />
                        </div>
                        <div className="flex items-end gap-4">
                            <Input
                                variant="standard"
                                className="bg-yellow-100"
                                placeholder="Phone *"
                            />
                            <Input
                                variant="standard"
                                className="bg-yellow-100"
                                placeholder="Your Company *"
                            />
                        </div>
                        <div className="flex flex-col items-end gap-4 mt-1">
                            <Textarea
                                variant="standard"
                                className="bg-yellow-100"
                                placeholder="Message *"
                            />
                        </div>
                        <div className="">
                            <button
                                className="flex justify-center mt-3 w-96 text-white text-center items-center bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg"
                                type="submit"
                            >
                                {/* {processing ? "submiting" : "submit"} */}
                                Send Massage
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
