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


// Mock call data based on the image
export const callsData = [
  {
    id: 1,
    name: 'Rohan Sharma',
    flag: '🇮🇳',
    phone: '+91 81234 56789',
    company: 'Zenith Health Solutions',
    leadLogging: '15 Sep 25 | 09:42:15 AM',
    firstLeadCalling: '15 Sep 25 | 09:45:30 AM',
    leadTagging: 'Hot Lead',
    callSummary: "Discussed product demo scheduling.",
    tagColor: 'bg-red-100 text-red-800'
  },
  {
    id: 2,
    name: 'Sarah Wilson',
    flag: '🇺🇸',
    phone: '+1 202 555 0188',
    company: 'CloudNova Inc.',
    leadLogging: '12 Sep 25 | 02:14:50 PM',
    firstLeadCalling: '12 Sep 25 | 02:18:17 PM',
    leadTagging: 'Warm Lead',
    callSummary: "Interested in pricing options.",
    tagColor: 'bg-yellow-100 text-yellow-800'
  },
  {
    id: 3,
    name: 'Ankit Mehta',
    flag: '🇮🇳',
    phone: '+91 99888 11223',
    company: 'PharmAI Pvt. Ltd.',
    leadLogging: '10 Sep 25 | 11:07:43 AM',
    firstLeadCalling: '10 Sep 25 | 11:10:01 AM',
    leadTagging: 'Unqualified',
    callSummary: "Looking for a different service.",
    tagColor: 'bg-blue-100 text-blue-800'
  },
  {
    id: 4,
    name: 'Emma Carter',
    flag: '🇬🇧',
    phone: '+44 7400 111222',
    company: 'BioEdge Labs',
    leadLogging: '09 Sep 25 | 04:20:10 PM',
    firstLeadCalling: '09 Sep 25 | 04:23:19 PM',
    leadTagging: 'Hot Lead',
    callSummary: "Requested immediate callback.",
    tagColor: 'bg-red-100 text-red-800'
  },
  {
    id: 5,
    name: 'Kiran Nair',
    flag: '🇮🇳',
    phone: '+91 70987 65432',
    company: 'Medisphere Analytics',
    leadLogging: '05 Sep 25 | 01:55:30 PM',
    firstLeadCalling: '05 Sep 25 | 02:02:17 PM',
    leadTagging: 'Warm Lead',
    callSummary: "Follow-up scheduled for next week.",
    tagColor: 'bg-yellow-100 text-yellow-800'
  },
  {
    id: 6,
    name: 'Liam Brown',
    flag: '🇨🇦',
    phone: '+1 613 555 0144',
    company: 'TheraTech Solutions',
    leadLogging: '03 Sep 25 | 10:44:21 AM',
    firstLeadCalling: '03 Sep 25 | 10:47:53 AM',
    leadTagging: 'Unqualified',
    callSummary: "Not the right contact person.",
    tagColor: 'bg-blue-100 text-blue-800'
  },
  {
    id: 7,
    name: 'Aditi Patel',
    flag: '🇮🇳',
    phone: '+91 92345 67890',
    company: 'NextGen Biopharma',
    leadLogging: '01 Sep 25 | 05:30:05 PM',
    firstLeadCalling: '01 Sep 25 | 05:34:17 PM',
    leadTagging: 'Hot Lead',
    callSummary: "Very keen on enterprise plan.",
    tagColor: 'bg-red-100 text-red-800'
  },
  {
    id: 8,
    name: 'James Lee',
    flag: '🇸🇬',
    phone: '+65 8123 4567',
    company: 'VitaCore Asia',
    leadLogging: '28 Aug 25 | 03:11:48 PM',
    firstLeadCalling: '28 Aug 25 | 03:15:05 PM',
    leadTagging: 'Warm Lead',
    callSummary: "Asked for brochure via email.",
    tagColor: 'bg-yellow-100 text-yellow-800'
  },
  {
    id: 9,
    name: 'Priya Menon',
    flag: '🇮🇳',
    phone: '+91 90011 22334',
    company: 'PharmAI Pvt. Ltd.',
    leadLogging: '25 Aug 25 | 12:20:43 PM',
    firstLeadCalling: '25 Aug 25 | 12:24:30 PM',
    leadTagging: 'Unqualified',
    callSummary: "Budget constraints.",
    tagColor: 'bg-blue-100 text-blue-800'
  },
  {
    id: 10,
    name: 'Oliver Scott',
    flag: '🇦🇺',
    phone: '+61 412 345 678',
    company: 'HealthMetrics AU',
    leadLogging: '22 Aug 25 | 09:05:17 AM',
    firstLeadCalling: '22 Aug 25 | 09:09:45 AM',
    leadTagging: 'Hot Lead',
    callSummary: "Requested custom integration details.",
    tagColor: 'bg-red-100 text-red-800'
  }
];
