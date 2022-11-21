const Content = () => {
    return (
        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
            <div className="grid grid-cols-1 gap-y-16 md:gap-x-12 md:gap-y-16 text-text-secondary">
                <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                        <svg
                            className="h-8 w-8"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                            />
                        </svg>
                    </div>
                    <div className="sm:min-w-0 sm:flex-1">
                        <p className="text-lg font-semibold leading-8 ">
                            We are Integrated Marketing Communication Agency
                        </p>
                        <p className="mt-2 text-base leading-7 text-text-third">
                            We bring extraordinary ideas and ready to go an
                            extra mile
                        </p>
                    </div>
                </div>
                <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                    <div className="sm:min-w-0 sm:flex-1">
                        <p className="text-lg font-semibold leading-8 ">
                            Go beyond design
                        </p>
                        <p className="mt-2 text-base leading-7 text-text-third">
                            We work with passion, enthusiasm and dedication to
                            bring your company to the top
                        </p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                        <svg
                            className="h-8 w-8"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function IndiDo() {
    return (
        <div className="bg-white py-24 sm:py-32 lg:py-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="sm:text-center grid justify-items-center">
                    <div className="mt-8 lg:mt-0 lg:flex-shrink-0 ">
                        <img
                            src="https://cdn3d.iconscout.com/3d/premium/thumb/search-engine-4409971-3679279.png"
                            alt="Hero Illustration"
                            className="w-fit"
                        />
                    </div>

                    <p className="mt-2 text-7xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        So, What Does <br />
                    </p>
                    <p className="mt-2 text-7xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        IND! Work?
                    </p>
                </div>

                <Content />
            </div>
        </div>
    );
}
