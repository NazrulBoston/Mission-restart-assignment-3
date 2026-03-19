import { useLoaderData, useParams } from "react-router";
import RatingsChart from "../../components/RatingsChart/RatingsChart";

const AppDetails = () => {
    const appsData = useLoaderData();
    const { id } = useParams();

    // ✅ DEFINE app
    const app = appsData.find(item => item.id === parseInt(id));

    // ✅ safety check
    if (!app) {
        return <h1>App not found</h1>;
    }

    return (
        <div className="my-6 py-4">


            <div className="md:flex gap-4 ">
                <div>
                    <img className="w-80 h-80" src={app.image} alt="" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold">{app.title}</h1>
                    <p>{app.companyName}</p>
                    <p>{app.description}</p>

                </div>

            </div>
            <div className="max-w-4xl">
                {/* ✅ Chart */}
                <RatingsChart ratings={app.ratings} />

            </div>
        </div>
    );
};

export default AppDetails;