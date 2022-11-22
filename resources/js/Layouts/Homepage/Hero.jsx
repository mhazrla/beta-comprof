export default function Hero({ asset }) {
    return (
        <div className="bg-base">
            <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    <span className="block md:text-8xl">IND!</span>
                    <span className="block md:text-7xl">Communication</span>
                    <span className="block text-indigo-600 text-xl">
                        We belive that everything need a spark to make it
                        recognizable and memorable
                    </span>
                </h2>

                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 ">
                    <img
                        src={asset.hero}
                        alt="Hero Illustration"
                        className="w-72 mx-auto"
                    />
                </div>
            </div>
            <div className="static ">
                <div className="absolute bottom-6">
                    <img
                        src={asset.circle}
                        alt="Red Circle"
                        className="w-3/4"
                    />
                </div>
            </div>
        </div>
    );
}
