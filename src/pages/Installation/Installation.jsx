import { useContext } from "react";
import { InstallContext } from "../../context/InstallContext";

const Installation = () => {

  const { installedApps } = useContext(InstallContext);

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6">Installed Apps</h1>

      <div className="space-y-4">

        {installedApps.map(app => (
          <div
            key={app.id}
            className="flex items-center gap-4 border p-4 rounded-lg"
          >
            <img
              src={app.image}
              className="w-16 h-16 rounded"
            />

            <div>
              <h2 className="font-semibold">{app.title}</h2>
              <p className="text-gray-500">{app.companyName}</p>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
};

export default Installation;