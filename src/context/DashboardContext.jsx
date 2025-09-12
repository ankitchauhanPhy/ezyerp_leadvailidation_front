import React, { createContext, useContext, useState } from 'react';

// 1. Create the context
const DashboardContext = createContext();

// 2. Provider component
export const DashboardProvider = ({ children }) => {
  const [dashboardData, setDashboardData] = useState({
    summary: {
      totalCalls: 2358,
      totalCallDuration: 4527, // in hours
      avgCallDuration: "7m 49s",
      avgCallPerAgent: 37,
      totalHotLeads: 235,
      totalColdLeads: 442,
      totalWarmLeads: 664,
    },
    agents: [
      { name: "Donald Rickey", callsDone: 43, leads: 7 },
      { name: "Sofia Cunha", callsDone: 34, leads: 12 },
      { name: "Luis Rocha", callsDone: 67, leads: 9 },
      { name: "Vitória Rodrigues", callsDone: 43, leads: 32 },
      { name: "Vitória Rodrigues", callsDone: 32, leads: 22 },
    ],
    callingNumbers: [
      { number: "+91 24648 13579", callsDone: 43, leads: 7 },
      { number: "+91 59234 38743", callsDone: 34, leads: 12 },
      { number: "+91 58436 48378", callsDone: 67, leads: 9 },
    ],
    costingROI: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      data: {
        cost: [10000, 15000, 20000, 18000, 22000, 21000, 25000],
        roi: [8000, 13000, 18000, 21000, 24000, 23000, 27000],
      },
    },
    callLanguages: {
      Hindi: { percent: 52.1, leads: 345, botName: "Anvi" },
      English: { percent: 22.8, leads: 89, botName: "Emily" },
      Telugu: { percent: 13.9, leads: 424, botName: "Iyer" },
      Kannada: { percent: 11.2, leads: 147, botName: "Iyer" },
    },
    callAnalysis: [
      { day: "Mon", totalCalls: 60, leads: 30, dropOffs: 10 },
      { day: "Tue", totalCalls: 100, leads: 50, dropOffs: 20 },
      { day: "Wed", totalCalls: 90, leads: 40, dropOffs: 25 },
      { day: "Thu", totalCalls: 40, leads: 15, dropOffs: 5 },
      { day: "Fri", totalCalls: 70, leads: 40, dropOffs: 10 },
      { day: "Sat", totalCalls: 110, leads: 70, dropOffs: 20 },
      { day: "Sun", totalCalls: 30, leads: 10, dropOffs: 2 },
    ],
    leadsPie: {
      hot: 30,
      warm: 60,
      cold: 10,
    },
    successRate: [
      // x: date, y: percentage
      { date: "May 10", successRate: 60 },
      { date: "May 15", successRate: 75 },
      { date: "Jun 10", successRate: 65 },
      { date: "Jun 16", successRate: 95 },
    ],
  });

  return (
    <DashboardContext.Provider value={{ dashboardData, setDashboardData }}>
      {children}
    </DashboardContext.Provider>
  );
};

// 3. Hook for consuming the context
export const useDashboard = () => useContext(DashboardContext);
