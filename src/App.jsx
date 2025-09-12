import React from "react";
import Dashboard from "./pages/Dashboard";
import { DashboardProvider } from "./context/DashboardContext";
const App = () => {
  return (
    <>
      <DashboardProvider>
        <div className="bg-[#F8F5FF]">
          <Dashboard />
        </div>
      </DashboardProvider>
    </>
  );
};

export default App;