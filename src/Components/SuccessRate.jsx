import { ChevronDown, RotateCcw, ThumbsUpIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import * as Chart from "chart.js";
import SectionHeader from "./reusable/SectionHeader";

// Register Chart.js components
Chart.Chart.register(
  Chart.CategoryScale,
  Chart.LinearScale,
  Chart.PointElement,
  Chart.LineElement,
  Chart.Title,
  Chart.Tooltip,
  Chart.Filler
);

const SuccessRate = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  // Sample data - you can replace this with your dynamic data
  const [chartData, setChartData] = useState({
    labels: [
      "May 19",
      "May 21",
      "May 23",
      "May 25",
      "May 27",
      "May 29",
      "May 31",
      "Jun 02",
      "Jun 04",
      "Jun 06",
      "Jun 08",
      "Jun 10",
      "Jun 12",
      "Jun 14",
      "Jun 16",
      "Jun 18",
      "Jun 20",
      "Jun 22",
      "Jun 24",
      "Jun 26",
      "Jun 28",
      "Jun 30",
    ],
    data: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 40, 65, 75,
    ],
  });

  useEffect(() => {
    if (chartRef.current) {
      // Destroy existing chart if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext("2d");

      chartInstance.current = new Chart.Chart(ctx, {
        type: "line",
        data: {
          labels: chartData.labels,
          datasets: [
            {
              label: "Success Rate",
              data: chartData.data,
              borderColor: "#10b981", // Green color
              backgroundColor: "rgba(16, 185, 129, 0.1)", // Light green fill
              borderWidth: 2,
              fill: true,
              tension: 0.4, // Makes the line curved
              pointRadius: 0, // Hide points by default
              pointHoverRadius: 4,
              pointBackgroundColor: "#10b981",
              pointBorderColor: "#ffffff",
              pointBorderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: {
            intersect: false,
            mode: "index",
          },
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              titleColor: "#ffffff",
              bodyColor: "#ffffff",
              borderColor: "#10b981",
              borderWidth: 1,
              cornerRadius: 8,
              displayColors: false,
              callbacks: {
                label: function (context) {
                  return `Success Rate: ${context.parsed.y}%`;
                },
              },
            },
          },
          scales: {
            x: {
              display: true,
              grid: {
                display: false,
              },
              ticks: {
                color: "#9ca3af",
                font: {
                  size: 11,
                },
                maxTicksLimit: 8, // Limit number of x-axis labels for better responsiveness
                callback: function (value, index) {
                  // Show fewer labels on mobile
                  if (window.innerWidth < 640) {
                    return index % 3 === 0 ? this.getLabelForValue(value) : "";
                  }
                  return index % 2 === 0 ? this.getLabelForValue(value) : "";
                },
              },
              border: {
                display: false,
              },
            },
            y: {
              display: true,
              min: 0,
              max: 100,
              grid: {
                color: "rgba(156, 163, 175, 0.1)",
                drawBorder: false,
              },
              ticks: {
                color: "#9ca3af",
                font: {
                  size: 11,
                },
                stepSize: 25,
                callback: function (value) {
                  return value + "%";
                },
              },
              border: {
                display: false,
              },
            },
          },
          layout: {
            padding: {
              top: 10,
              right: 10,
              bottom: 0,
              left: 0,
            },
          },
        },
      });
    }

    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [chartData]);

  // Function to update chart data dynamically
  const updateChartData = (newLabels, newData) => {
    setChartData({
      labels: newLabels,
      data: newData,
    });
  };

  // Handle window resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      if (chartInstance.current) {
        chartInstance.current.resize();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleReset = () => {
    // Reset to initial data or empty data
    const resetData = Array(chartData.labels.length).fill(0);
    updateChartData(chartData.labels, resetData);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-3">
      {/* Header */}

      <SectionHeader
        icon={
          <ThumbsUpIcon className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
        }
        title={"Overall Success Rate"}
      />
      {/* Chart Container */}
      <div className="relative w-full" style={{ height: "200px" }}>
        <canvas ref={chartRef} className="w-full h-full" />
      </div>
    </div>
  );
};

export default SuccessRate;
