import { useLoaderData } from "react-router";
import AppCard from "../AppCard/AppCard";

const Apps = () => {
    const appsData = useLoaderData()
    console.log(appsData);
    return (
        <div>
           
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {
                appsData.map(singleApp=> <AppCard key={singleApp.id} singleApp={singleApp}></AppCard>)
            }
          </div>
        </div>
    );
};

export default Apps;