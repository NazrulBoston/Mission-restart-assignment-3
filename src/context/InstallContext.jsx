import { createContext, useEffect, useState } from "react";

export const InstallContext = createContext();

const InstallProvider = ({ children }) => {

  const [installedApps, setInstalledApps] = useState([]);

  // load from localStorage
  useEffect(() => {
    const storedApps = JSON.parse(localStorage.getItem("installedApps"));
    if (storedApps) {
      setInstalledApps(storedApps);
    }
  }, []);

  // save to localStorage
  useEffect(() => {
    localStorage.setItem("installedApps", JSON.stringify(installedApps));
  }, [installedApps]);

  const installApp = (app) => {
    setInstalledApps((prev) => {
      if (prev.find(item => item.id === app.id)) return prev;
      return [...prev, app];
    });
  };

  // ⭐ NEW: uninstall function
  const removeApp = (id) => {
    setInstalledApps(prev => prev.filter(app => app.id !== id));
  };

  return (
    <InstallContext.Provider value={{ installedApps, installApp, removeApp }}>
      {children}
    </InstallContext.Provider>
  );
};

export default InstallProvider;