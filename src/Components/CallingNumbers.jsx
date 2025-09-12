import React from "react";
import { Phone, RotateCcw, ChevronDown, ArrowUpDown } from "lucide-react";
import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from "react-icons/fa";
import { agents } from "../constants";
import SectionHeader from "./reusable/SectionHeader";

const CallingNumbers = () => {
  const IndiaFlag = () => (
    <div className="w-5 h-3.5 rounded-sm overflow-hidden flex flex-col">
      <div className="h-1/3 bg-orange-500" />
      <div className="h-1/3 bg-white" />
      <div className="h-1/3 bg-green-600" />
    </div>
  );

  return (
    <div className="bg-white rounded-xl shadow-md p-3">
      {/* Header */}
      <SectionHeader
      icon={  <Phone className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
      }
      title={"Calling Numbers"}
      />
      {/* Table Header (Desktop Only) */}
      <div className="hidden md:grid grid-cols-12 gap-3 py-1.5 border-b border-gray-100">
        <div className="col-span-6">
          <span className="text-xs font-medium text-gray-600">Agent's Number</span>
        </div>
        <div className="col-span-3 flex items-center gap-1">
          <span className="text-xs font-medium text-gray-600">Calls Done</span>
          <ArrowUpDown className="w-3 h-3 text-purple-700" />
        </div>
        <div className="col-span-3 flex items-center gap-1">
          <span className="text-xs font-medium text-gray-600">Lead Generated</span>
          <ArrowUpDown className="w-3 h-3 text-purple-700" />
        </div>
      </div>

      {/* Agent List */}
      <div className="space-y-2 mt-2 max-h-52 md:max-h-64 overflow-y-auto">
        {agents.map((agent) => (
          <div
            key={agent.id}
            className="grid grid-cols-1 md:grid-cols-12 gap-2 items-start md:items-center p-2 md:px-0 hover:bg-gray-50 rounded-md transition-colors"
          >
            {/* Phone Number and Live Status */}
            <div className="col-span-6 flex items-center gap-2 md:gap-1 min-w-0">
              <IndiaFlag />
              <div className="flex items-center gap-1 min-w-0 flex-1 md:flex-initial">
                <span className="text-sm font-bold md:font-semibold text-gray-800 truncate">
                  {agent.phone}
                </span>
                {agent.isLive && (
                  <span className="inline-flex items-center gap-1 px-1 py-0.5 md:px-1.5 text-[10px] font-medium text-red-600 bg-red-50 rounded-full">
                    <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                    Live
                  </span>
                )}
              </div>
            </div>

            {/* Calls Done */}
            <div className="col-span-full md:col-span-3 flex items-center justify-between md:justify-start text-xs md:text-sm">
              <span className="text-gray-500 md:hidden">Calls:</span>
              <div className="flex items-center gap-1.5">
                <div
                  className={`w-3 h-3 md:w-4 md:h-4 rounded-full flex items-center justify-center ${
                    agent.status === "success" ? "bg-green-100" : "bg-red-100"
                  }`}
                >
                  {agent.status === "success" ? (
                    <FaRegArrowAltCircleUp size={10} className="text-green-500 md:w-3 md:h-3" />
                  ) : (
                    <FaRegArrowAltCircleDown size={10} className="text-red-500 md:w-3 md:h-3" />
                  )}
                </div>
                <span className="font-semibold text-gray-800 text-xs md:text-sm">
                  {agent.callsDone}
                </span>
              </div>
            </div>

            {/* Lead Generated */}
            <div className="col-span-full md:col-span-3 flex items-center justify-between md:justify-start text-xs md:text-sm">
              <span className="text-gray-500 md:hidden">Leads:</span>
              <span className="font-semibold text-gray-800 text-xs md:text-sm">
                {agent.leadGenerated}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CallingNumbers;