import React, { useEffect, useRef } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { ChevronDown, Magnet } from "lucide-react";
import SectionHeader from "./reusable/SectionHeader";

ChartJS.register(ArcElement, Tooltip, Legend);

const LeadsChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const data = {
    labels: ["Hot Lead", "Warm Lead", "Cold Lead"],
    datasets: [
      {
        label: "Leads",
        data: [30, 60, 10],
        backgroundColor: ["#dc2626", "#f59e0b", "#3b82f6"],
        borderWidth: 4,
        borderColor: "#ffffff",
        cutout: "65%",
        hoverOffset: 15,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
    },
  };

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new ChartJS(ctx, {
      type: "doughnut",
      data,
      options,
    });
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-md p-3">
      {/* Header */}
     <SectionHeader
      icon={  <Magnet className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
      }
      title={"Leads"}
      />
      {/* Chart */}
      <div className="h-48 relative">
        <canvas ref={chartRef} />
      </div>

      {/* Legend */}
      <div className="mt-9 space-y-2 text-sm font-medium py-2">
        <div className="flex items-center justify-between text-gray-700">
          <span>
            <span className="text-lg text-gray-800 font-bold">30%</span> Hot Lead
          </span>
          <span className="h-1 w-16 bg-red-600 rounded-full" />
        </div>
        <div className="flex items-center justify-between text-gray-700">
          <span>
            <span className="text-lg text-gray-800 font-bold">60%</span> Warm Lead
          </span>
          <span className="h-1 w-16 bg-amber-500 rounded-full" />
        </div>
        <div className="flex items-center justify-between text-gray-700">
          <span>
            <span className="text-lg text-gray-800 font-bold">10%</span> Cold Lead
          </span>
          <span className="h-1 w-16 bg-blue-500 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default LeadsChart;