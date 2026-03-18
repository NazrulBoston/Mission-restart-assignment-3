

const Reviews = () => {
    return (
        <div className="w-ful h-[410px] border border-red-400  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:opacity-90 transition">
            <div>
                <p className="text-white font-semibold text-2xl md:text-3xl text-center pt-24 ">Trusted by Millions, Built for You</p>
            </div>
            
            <div className="flex justify-center md:gap-16 mt-10 text-center">
                <div className="text-white">
                    <p className="text-sm">Total Downloads</p>
                    <h1 className="text-4xl font-bold">29.6M</h1>
                    <p className="text-sm">21% more than last month</p>
                </div>
                <div className="text-white">
                    <p className="text-sm">Total Reviews</p>
                    <h1 className="text-4xl font-bold">906K</h1>
                    <p className="text-sm">46% more than last month</p>
                </div>
                <div className="text-white">
                    <p className="text-sm">Active Apps</p>
                    <h1 className="text-4xl font-bold">132+</h1>
                    <p className="text-sm">31 more will Launch</p>
                </div>
              

            </div>
        </div>
    );
};

export default Reviews;