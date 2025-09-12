import React from "react";
import Header from "../Components/Header";
import StatCard from "../Components/StatCard";
import Languages from "../Components/Languages";
import Leads from "../Components/Leads";
import TotalCalls from "../Components/TotalCalls";

const HomePage = () => {
  return (
    <div className="w-full bg-[#F8F5FF]">
      <Header />
      <StatCard />
      {/* Dashboard Content Grid */}
      <div className="w-full flex flex-col md:flex-row gap-4 mt-4 px-2 md:px-4">
        <div className="w-[50%]">
          <Leads />
        </div>
        <div className="w-[25%]">
          <Languages />
        </div>

        <div className="w-[25%]">
          <TotalCalls />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
