import { useLoaderData, useParams } from "react-router";
import RatingsChart from "../../components/RatingsChart/RatingsChart";
import { FaDownload, FaStar } from "react-icons/fa";

const AppDetails = () => {
    const appsData = useLoaderData();
    const { id } = useParams();

    const app = appsData.find(item => item.id === parseInt(id));

    if (!app) {
        return <h1>App not found</h1>;
    }

    return (
        <div className="my-6 py-4">

            <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex justify-center md:justify-start">       
                    <img className="w-60 h-60 md:w-80 md:h-80 object-cover" src={app.image} alt="" />
                </div>
                <div className="space-y-4 text-center md:text-left">                  
                    <h1 className="text-2xl font-bold">{app.title}</h1>
                    <p>{app.companyName}</p>      
                   <div className="card-actions justify-center md:justify-start gap-2">
                        <button className="btn btn-default text-[#00D390] bg-[#F1F5E8]">
                            <FaDownload />{app.downloads}
                        </button>
                      <button className="btn btn-default text-[#FF8811] bg-[#FFF0E1]">
                            <FaStar />{app.ratingAvg}
                        </button>
                    </div>
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