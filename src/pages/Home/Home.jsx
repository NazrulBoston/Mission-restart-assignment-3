
import Banner from "../Banner/Banner";
import Reviews from "../Reviews/Reviews";
import AppCard from "../AppCard/AppCard";
import { Link, useLoaderData } from "react-router";

const Home = () => {
    const appsData = useLoaderData();
    console.log(appsData);

    return (
        <div>
            <Banner></Banner>
            <Reviews></Reviews>

            <h1 className="text-2xl font-bold text-center my-6">Popular Apps</h1>

            {/* Show only 8 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {
                    appsData.slice(0, 8).map(app => (
                        <AppCard key={app.id} singleApp={app} />
                    ))
                }
            </div>

            {/* See More Button */}
            <div className="flex justify-center my-6">
                <Link
                    to="/apps"
                    className="btn rounded-xl text-white 
                    bg-gradient-to-r from-[#632EE3] to-[#9F62F2] border-none px-6"
                >
                    See More
                </Link>
            </div>
        </div>
    );
};

export default Home;