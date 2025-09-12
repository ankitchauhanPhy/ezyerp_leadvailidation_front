import React, { useEffect, useRef } from "react";
import { ChevronDown, RotateCcw } from "lucide-react";
import { MdSupportAgent } from "react-icons/md";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  registerables // <- this registers everything
} from 'chart.js';


import { languageData } from "../constants";
import SectionHeader from "./reusable/SectionHeader";

ChartJS.register(...registerables);

ChartJS.register(ArcElement, Tooltip, Legend);

const Languages = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current?.getContext("2d");

    if (!ctx) return;

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new ChartJS(ctx, {
      type: "doughnut",
      data: {
        labels: languageData.map((item) => item.language),
        datasets: [
          {
            data: languageData.map((item) => item.percentage),
            backgroundColor: languageData.map((item) => item.color),
            borderWidth: 4,
            borderColor: "#ffffff",
            spacing: 1,
            cutout: "70%",
            hoverOffset: 15,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "#111827",
            titleColor: "#fff",
            bodyColor: "#fff",
            cornerRadius: 6,
            borderWidth: 1,
            borderColor: "#ffffff33",
            callbacks: {
              label: (context) => {
                const label = context.label || "";
                const value = context.parsed;
                return `${label}: ${value}%`;
              }
            }
          }
        }
      }
    });

    return () => {
    chartInstance.current?.destroy();
    chartInstance.current = null;
  };
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-full">
      {/* Header */}
      <SectionHeader
      icon={  <MdSupportAgent className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
      }
      title={"Call Languages"}
      />

      {/* Chart & Legend */}
      <div className="flex flex-col gap-6 items-center justify-between mb-1 w-full">
        <div className="relative w-full">
          <canvas ref={chartRef} className="w-[160px] h-[190px]"></canvas>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <div className="text-2xl font-light text-black-700">文</div>
            <div className="text-sm text-gray-500 font-medium">Languages</div>
          </div>
        </div>

        <div className="flex flex-col gap-3 w-full">
          {languageData.map((item, index) => (
            <div key={index} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="font-medium text-gray-700">
                  {item.language}
                </span>
              </div>
              <span className="font-semibold" style={{ color: item.color }}>
                {item.percentage}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Languages;
