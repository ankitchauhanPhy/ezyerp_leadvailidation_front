//RAW Data

export const agents = [
  {
    id: 1,
    name: "Harsh Harit",
    phone: "+91 79839 48936",
    company: "Pharynx AI",
    callsDone: 43,
    leadGenerated: 7,
    isLive: true,
    status: "success",
    leadType: "Hot Lead",
  },
  {
    id: 2,
    name: "Mohit Kumar",
    phone: "+91 59234 38743",
    company: "NextTech Solutions",
    callsDone: 34,
    leadGenerated: 12,
    isLive: false,
    status: "error",
    leadType: "Warm Lead",
  },
  {
    id: 3,
    name: "Shivam Anand",
    phone: "+91 58436 48378",
    company: "CloudHive",
    callsDone: 67,
    leadGenerated: 9,
    isLive: false,
    status: "error",
    leadType: "Unqualified",
  },
  {
    id: 4,
    name: "Pranjul Singh",
    phone: "+91 42468 13579",
    company: "DataWorks",
    callsDone: 43,
    leadGenerated: 32,
    isLive: false,
    status: "success",
    leadType: "Hot Lead",
  },
  {
    id: 5,
    name: "Awneesh Thakur",
    phone: "+91 59234 38743",
    company: "AI Labs",
    callsDone: 32,
    leadGenerated: 22,
    isLive: false,
    status: "success",
    leadType: "Warm Lead",
  },
  {
    id: 6,
    name: "Ritika Mehra",
    phone: "+91 91234 56789",
    company: "VisionTech",
    callsDone: 58,
    leadGenerated: 18,
    isLive: true,
    status: "success",
    leadType: "Hot Lead",
  },
  {
    id: 7,
    name: "Arjun Patel",
    phone: "+91 83456 98721",
    company: "Innova Corp",
    callsDone: 21,
    leadGenerated: 4,
    isLive: false,
    status: "error",
    leadType: "Unqualified",
  },
  {
    id: 8,
    name: "Simran Kaur",
    phone: "+91 70012 33445",
    company: "BrightCall",
    callsDone: 75,
    leadGenerated: 30,
    isLive: true,
    status: "success",
    leadType: "Hot Lead",
  },
  {
    id: 9,
    name: "Vivek Sharma",
    phone: "+91 80123 45678",
    company: "LeadMatrix",
    callsDone: 12,
    leadGenerated: 2,
    isLive: false,
    status: "error",
    leadType: "Unqualified",
  },
  {
    id: 10,
    name: "Neha Gupta",
    phone: "+91 88990 11223",
    company: "Omega Communications",
    callsDone: 49,
    leadGenerated: 14,
    isLive: true,
    status: "success",
    leadType: "Warm Lead",
  },
  {
    id: 11,
    name: "Karan Malhotra",
    phone: "+91 99556 33221",
    company: "SmartSales",
    callsDone: 63,
    leadGenerated: 19,
    isLive: false,
    status: "success",
    leadType: "Hot Lead",
  },
  {
    id: 12,
    name: "Priya Desai",
    phone: "+91 78123 99887",
    company: "Zenith Solutions",
    callsDone: 36,
    leadGenerated: 11,
    isLive: true,
    status: "success",
    leadType: "Warm Lead",
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
    language: "Hinglish",
    leads: 424,
    botName: "Veeru",
    percentage: 13.9,
    color: "#EC4899",
  },
];

export const totalCalls = [
  {
    language: "Hot Leads",
    leads: 275,
    botName: "LeadBot Alpha",
    percentage: 55.0,
    color: "#EF4444",
  },
  {
    language: "Warm Leads",
    leads: 150,
    botName: "LeadBot Beta",
    percentage: 30.0,
    color: "#F59E0B",
  },
  {
    language: "Cold Leads",
    leads: 75,
    botName: "LeadBot Gamma",
    percentage: 15.0,
    color: "#3B82F6",
  },
];

export const chartData = {
  labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  datasets: [
    {
      label: "Total Calls",
      data: [35, 80, 60, 110, 30, 70, 80],
      backgroundColor: "#3B82F6",
      borderRadius: 4,
      barThickness: 8,
      categoryPercentage: 0.6,
      barPercentage: 0.8,
    },
    {
      label: "Lead Generated",
      data: [25, 65, 45, 70, 20, 55, 60],
      backgroundColor: "#F97316",
      borderRadius: 4,
      barThickness: 8,
      categoryPercentage: 0.6,
      barPercentage: 0.8,
    },
    {
      label: "Drop Off Calls",
      data: [20, 55, 40, 65, 15, 45, 50],
      backgroundColor: "#EF4444",
      borderRadius: 4,
      barThickness: 8,
      categoryPercentage: 0.6,
      barPercentage: 0.8,
    },
  ],
};



export const faqItems = [
  {
    question: "How can I change call timing?",
    answer:
      "You can change call timing by going to Settings > Call Timing. There you can set your preferred start and end times for making calls to leads."
  },
  {
    question: "Can I pause an ongoing call campaign?",
    answer:
      "Yes. Go to Campaigns > Active Campaigns, select the campaign you want to pause, and click the 'Pause' button. You can resume it anytime."
  },
  {
    question: "How do I add a new lead before calling?",
    answer:
      "Navigate to the Leads page and click on 'Add Lead'. Fill in the required details and the lead will appear in your call queue automatically."
  },
  {
    question: "Is it possible to record calls automatically?",
    answer:
      "Yes, in Settings > Call Preferences you can enable 'Automatic Call Recording' for all or specific campaigns. Recordings are stored in the Calls section."
  },
  {
    question: "How can I check my daily call limit?",
    answer:
      "Open Settings > Usage or Dashboard > Call Summary. You’ll see your daily and monthly call limits along with remaining credits."
  },
  {
    question: "Can I schedule follow-up calls for leads?",
    answer:
      "Absolutely. Open the lead’s profile, click on 'Schedule Follow-Up', and set the date and time for the next call. The system will remind you automatically."
  },
  {
    question: "How do I assign calls to a specific agent?",
    answer:
      "Go to the Leads section, select the lead(s) you want, click 'Assign Agent', and choose the agent from the list. The calls will be routed to that agent."
  },
  {
    question: "How do I view call analytics or reports?",
    answer:
      "Navigate to Dashboard > Reports > Call Analytics. You can filter by date, agent, or campaign to get detailed insights about your calls."
  }
];
