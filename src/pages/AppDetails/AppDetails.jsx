import { useLoaderData, useParams, useNavigate } from "react-router"; 
import RatingsChart from "../../components/RatingsChart/RatingsChart";
import { FaDownload, FaStar } from "react-icons/fa";
import { AiTwotoneLike } from "react-icons/ai";
import { useContext } from "react";
import { InstallContext } from "../../context/InstallContext";
import toast from "react-hot-toast";

const AppDetails = () => {
    const appsData = useLoaderData();
    const { id } = useParams();
    const navigate = useNavigate(); 

    const app = appsData.find(item => item.id === parseInt(id));

    if (!app) {
        return <h1>App not found</h1>;
    }

    const { installedApps, installApp } = useContext(InstallContext);

    const isInstalled = installedApps.find(item => item.id === app.id);

    
    const handleInstall = () => {
        installApp(app);
        navigate("/installation"); 
        toast.success(`${app.title} installed successfully`);
    };

    return (
        <div className="my-6 py-4">

            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex justify-center md:justify-start">
                    <img className="w-60 h-60 md:w-80 md:h-80 object-cover" src={app.image} alt="" />
                </div>
                <div className="space-y-4 text-center md:text-left">
                    <h1 className="text-2xl font-bold">{app.title}</h1>
                    <p className="text-xl font-semibold">{app.companyName}</p>

                    <div className="card-actions justify-center md:justify-start gap-8">

                        <div className="flex flex-col items-center">
                            <span className="flex items-center text-[#00D390] gap-1">
                                <FaDownload />
                            </span>
                            <span className="text-black">Downloads</span>
                            {app.downloads}
                        </div>

                        <div className="flex flex-col items-center">
                            <span className="flex items-center text-[#FF8811] gap-1">
                                <FaStar />
                            </span>
                            <span className="text-black">Average Ratings </span>
                            {app.ratingAvg}
                        </div>

                        <div className="flex flex-col items-center">
                            <span className="flex items-center text-purple-400 gap-1">
                                <AiTwotoneLike />
                            </span>
                            <span className="text-black">Total Reviews</span>
                            {app.downloads}
                        </div>

                    </div>

                    <button
                        onClick={handleInstall}
                        disabled={isInstalled}
                        className="btn btn-success text-white"
                    >
                        {isInstalled ? "Installed" : `Download Now (${app.size} MB)`}
                    </button>

                </div>
            </div>

            <div className="max-w-4xl mb-8 ">
                <RatingsChart ratings={app.ratings} />
            </div>

            <p className="mx-4 md:mx-0">{app.description}</p>

        </div>
    );
};

export default AppDetails;