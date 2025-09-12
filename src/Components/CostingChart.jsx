import React, { useRef } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
} from 'chart.js'
import { ChevronDown, RotateCcw } from 'lucide-react'
import { MdAttachMoney } from 'react-icons/md'
import SectionHeader from './reusable/SectionHeader'

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip)

const CostingChart = () => {
  const chartRef = useRef(null)

  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
  const dataset1 = [12, 8, 15, 20, 28, 18, 22]
  const dataset2 = [5, 14, 21, 5, 12, 23, 31]

  const data = {
    labels,
    datasets: [
      {
        label: 'Cost A',
        data: dataset1,
        fill: true,
        backgroundColor: (context) => {
          const chart = context.chart
          const { ctx, chartArea } = chart
          if (!chartArea) return null
          const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom)
          gradient.addColorStop(0, 'rgba(99, 102, 241, 0.3)')
          gradient.addColorStop(1, 'rgba(99, 102, 241, 0.05)')
          return gradient
        },
        borderColor: 'rgba(99, 102, 241, 1)',
        tension: 0.4,
        pointRadius: 2
      },
      {
        label: 'Cost B',
        data: dataset2,
        fill: false,
        borderColor: 'rgba(34, 197, 94, 1)',
        tension: 0.4,
        pointRadius: 2
      }
    ]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context) => `₹${context.parsed.y}K`
        },
        backgroundColor: '#111827',
        titleFont: { size: 12 },
        bodyFont: { size: 12 },
        padding: 8,
        cornerRadius: 4
      }
    },
    scales: {
      y: {
        ticks: {
          callback: (val) => `${val}K`,
          font: { size: 10 }
        },
        beginAtZero: true,
        grid: {
          drawBorder: false,
          color: 'rgba(0,0,0,0.05)'
        }
      },
      x: {
        ticks: { font: { size: 10 } },
        grid: {
          display: false
        }
      }
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-3 flex-1">
      {/* Header */}
      <SectionHeader
      icon={  <MdAttachMoney className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
      }
      title={"Costing / ROI"}
      />

      {/* Chart */}
      <div className="h-48 sm:h-56 md:h-64">
        <Line ref={chartRef} data={data} options={options} />
      </div>
    </div>
  )
}

export default CostingChart
