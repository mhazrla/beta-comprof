export default function Services() {
    return (
        <div className="bg-red-600 shadow-lg rounded m-8 p-8 flex justify-items-center align-center md:bg-orange">
            <div className="w-1/3 hidden sm:block">
                {/* <img
                    className="rounded-full md:border-white md:border-solid md:border-4"
                    src="https://randomuser.me/api/portraits/men/44.jpg"
                /> */}
                <p className="text-3xl">Creative Services</p>
            </div>
            <div className="sm:w-2/3 ">
                <h3 className="text-orange text-xl font-semibold md:text-white">
                    Ruben Garza
                </h3>

                <p className="text-grey-dark font-thin text-sm leading-normal md:text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                </p>
            </div>
        </div>
    );
}
