import React from "react";
import { RotateCcw, ChevronDown, ArrowUpDown } from "lucide-react";
import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { agents } from "../constants";
import SectionHeader from "./reusable/SectionHeader";

const AgentTable = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-2 md:p-3 h-full flex flex-col">
      {/* Header */}
      <SectionHeader
        icon={
          <MdSupportAgent className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
        }
        title={"Last 10 Leads"}
      />

      {/* Table Header */}
      <div className="grid grid-cols-12 gap-3 py-3 border-b border-gray-200 bg-gray-50 -mx-2 md:-mx-3 px-2 md:px-3">
        <div className="col-span-1">
          <span className="text-sm font-medium text-gray-600">#</span>
        </div>
        <div className="col-span-3">
          <span className="text-sm font-medium text-gray-600">Name</span>
        </div>
        <div className="col-span-4">
          <span className="text-sm font-medium text-gray-600">Phone Number</span>
        </div>
        <div className="col-span-4 flex items-center gap-1">
          <span className="text-sm font-medium text-gray-600">Company Name</span>
          <ArrowUpDown className="w-3 h-3 text-gray-400" />
        </div>
      </div>

      {/* Leads List - Now takes remaining space */}
      <div className="overflow-y-auto flex-1 min-h-0">
        {agents.slice(0, 10).map((agent, index) => (
          <div
            key={agent.id}
            className="grid grid-cols-12 gap-3 py-3 border-b border-gray-100 hover:bg-gray-50 transition-colors items-center"
          >
            {/* Serial Number */}
            <div className="col-span-1">
              <span className="text-sm text-gray-800">{index + 1}.</span>
            </div>

            {/* Name */}
            <div className="col-span-3">
              <span className="text-sm text-gray-800 font-medium">
                {agent.name}
              </span>
            </div>

            {/* Phone Number with Flag */}
            <div className="col-span-4 flex items-center gap-2">
              <div className="w-5 h-3 bg-gradient-to-b from-orange-400 via-white to-green-500 rounded-sm border border-gray-200 flex-shrink-0"></div>
              <span className="text-sm text-gray-800">
                {agent.phone}
              </span>
            </div>

            {/* Company Name */}
            <div className="col-span-4">
              <span className="text-sm text-gray-800">
                {agent.company || "PharynxAI Pvt. Ltd."}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentTable;