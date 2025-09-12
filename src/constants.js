export const agents = [
    {
      id: 1,
      name: "Harsh Harit",
      phone: "+91 24648 13579",
      callsDone: 43,
      leadGenerated: 7,
      isLive: true,
      status: "success",
    },
    {
      id: 2,
      name: "Mohit Kumar",
      phone: "+91 59234 38743",
      callsDone: 34,
      leadGenerated: 12,
      isLive: false,
      status: "error",
    },
    {
      id: 3,
      name: "Shivam Anand",
      phone: "+91 58436 48378",
      callsDone: 67,
      leadGenerated: 9,
      isLive: false,
      status: "error",
    },
    {
      id: 4,
      name: "Pranjul Singh",
      phone: "+91 42468 13579",
      callsDone: 43,
      leadGenerated: 32,
      isLive: false,
      status: "success",
    },
    {
      id: 5,
      name: "Awneesh Thakur",
      phone: "+91 59234 38743",
      callsDone: 32,
      leadGenerated: 22,
      isLive: false,
      status: "success",
    },
  ];

  export const languageData = [
    {
      language: "Hindi",
      leads: 345,
      botName: "Anuj",
      percentage: 52.1,
      color: "#10B981",
    },
    {
      language: "English",
      leads: 89,
      botName: "Emily",
      percentage: 22.8,
      color: "#3B82F6",
    },
    {
      language: "Telugu",
      leads: 424,
      botName: "Veeru",
      percentage: 13.9,
      color: "#EC4899",
    },
    {
      language: "Kannada",
      leads: 147,
      botName: "Iyer",
      percentage: 11.2,
      color: "#F59E0B",
    },
  ];

 export const chartData = {
  labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  datasets: [
    {
      label: 'Total Calls',
      data: [35, 80, 60, 110, 30, 70, 80],
      backgroundColor: '#3B82F6',
      borderRadius: 4,
      barThickness: 8,
      categoryPercentage: 0.6,  
      barPercentage: 0.8       
    },
    {
      label: 'Lead Generated',
      data: [25, 65, 45, 70, 20, 55, 60],
      backgroundColor: '#F97316',
      borderRadius: 4,
      barThickness: 8,
      categoryPercentage: 0.6,
      barPercentage: 0.8
    },
    {
      label: 'Drop Off Calls',
      data: [20, 55, 40, 65, 15, 45, 50],
      backgroundColor: '#EF4444',
      borderRadius: 4,
      barThickness: 8,
      categoryPercentage: 0.6,
      barPercentage: 0.8
    },
  ],
};
