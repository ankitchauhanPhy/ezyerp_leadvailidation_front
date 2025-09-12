import React from "react";
import Header from "../Components/Header";
import StatCard from "../Components/StatCard";
import AgentTable from "../Components/AgentTable";
import Languages  from "../Components/Languages";
import Analysis from '../Components/Analysis';
import SuccessRate from '../Components/SuccessRate';
import Leads from '../Components/Leads';

const HomePage = () => {
  return (
    <div className="w-full bg-[#F8F5FF]">
      <Header />
      <StatCard/>

      {/* Dashboard Content Grid */}
      <div className="w-full px-2 sm:px-4">
        {/* Row 1 - Responsive Grid */}
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <div className="w-[70%]">
            <AgentTable />
          </div>
          <div className="w-[30%]">
            <Languages />
          </div>
        </div>

        {/* Row 2 - Languages, Analysis, Leads */}
        
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <div className="w-full md:w-2/5 lg:w-3/10">
            <Languages />
          </div>
          <div className="w-full md:w-3/5 lg:w-1/2">
            <Analysis />
          </div>
          <div className="w-full lg:w-1/5">
            <Leads />
          </div>
        </div> 
       

        {/* Row 3 - Success Rate */}
        <div className="mt-4">
          <SuccessRate />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
