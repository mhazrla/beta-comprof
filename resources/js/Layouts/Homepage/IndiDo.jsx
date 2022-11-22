const Content = () => {
    return (
        <div className="max-w-lg sm:mx-auto md:max-w-none">
            <div className="grid grid-cols-3 relative gap-6 ">
                <img
                    src="https://ouch-cdn2.icons8.com/FLxcYK0EgIyTpjAaRqyplxvFuJ9hNa7xoR5jgVcczeY/rs:fit:256:250/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODgx/LzFhYWE2Y2ZiLTI4/ZmMtNDBjZS05NzM1/LTQzNmI1MmNjOTU1/ZS5wbmc.png"
                    alt=""
                    className="w-fit mx-auto my-auto"
                />
                <div className="bg-red-100 col-span-2 flex flex-col justify-center text-center rounded-3xl  p-4 md:p-9">
                    <p className="font-semibold leading-8 md:text-4xl sm:text-2xl text-text-secondary">
                        We are Integrated Marketing Communication Agency
                    </p>
                    <p className="mt-2 leading-7 md:text-xl text-text-third">
                        We bring extraordinary ideas and ready to go
                    </p>
                    <p className="leading-7 md:text-xl text-text-third">
                        an extra mile
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-3 relative gap-6 mt-12">
                <div className="bg-red-100 col-span-2 flex flex-col justify-center text-center rounded-3xl  p-4 md:p-9">
                    <p className="font-semibold leading-8 md:text-4xl sm:text-2xl text-text-secondary">
                        Go beyond design
                    </p>
                    <p className="mt-2 leading-7 md:text-xl text-text-third ">
                        We work with passion, enthusiasm and
                    </p>
                    <p className="leading-7 md:text-xl text-text-third ">
                        dedication to bring your company to the top
                    </p>
                </div>
                <img
                    src="https://ouch-cdn2.icons8.com/FLxcYK0EgIyTpjAaRqyplxvFuJ9hNa7xoR5jgVcczeY/rs:fit:256:250/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODgx/LzFhYWE2Y2ZiLTI4/ZmMtNDBjZS05NzM1/LTQzNmI1MmNjOTU1/ZS5wbmc.png"
                    alt=""
                    className="w-fit mx-auto my-auto"
                />
            </div>
        </div>
    );
};

export default function IndiDo({ asset }) {
    console.log(asset);
    return (
        <div className="bg-white py-24 sm:py-32 lg:py-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="sm:text-center grid justify-items-center">
                    <div className="mt-8 lg:mt-0 lg:flex-shrink-0 ">
                        <img
                            src={asset.searching}
                            alt="Hero Illustration"
                            className="w-1/2 mx-auto"
                        />
                    </div>
                    <div className="my-7 font-bold tracking-tight text-gray-900 text-4xl md:text-5xl md:mt-8 ">
                        <p>
                            So, What Does <br />
                        </p>
                        <p>IND! Work?</p>
                    </div>
                </div>
                <Content />
            </div>
        </div>
    );
}
