import React, { useEffect, useRef } from "react";
import { ArrowUpDown, ChevronDown, RotateCcw } from "lucide-react";
import { BiAnalyse } from "react-icons/bi";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {chartData} from "../constants"
import SectionHeader from "./reusable/SectionHeader";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Analysis = () => {
  
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y', // This makes it a horizontal bar chart
    plugins: {
      legend: {
        display: false, // We'll create custom legend
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: true,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        max: 120,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
          drawBorder: false,
        },
        ticks: {
          color: '#9CA3AF',
          font: {
            size: 10,
          },
          stepSize: 10,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#9CA3AF',
          font: {
            size: 11,
          },
        },
      },
    },
    layout: {
      padding: {
        top: 10,
        bottom: 10,
      },
    },
  };

  // Custom legend data
  const legendItems = [
    { label: 'Total Calls', color: '#3B82F6' },
    { label: 'Lead Generated', color: '#F97316' },
    { label: 'Drop Off Calls', color: '#EF4444' },
  ];

  return (
    <div className=" bg-white rounded-xl shadow-md p-3 md:p-4 flex-1">
      {/* Header */}
     
      <SectionHeader
      icon={  <BiAnalyse className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
      }
      title={"Analysis"}
      />

      {/* Chart Container */}
      <div className="relative">
        <div className="h-48 md:h-64 lg:h-72">
          <Bar data={chartData} options={chartOptions} />
        </div>
        
        {/* Custom Legend */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-4 pt-3 border-t border-gray-100">
          {legendItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-sm" 
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-xs md:text-sm text-gray-600 font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analysis;