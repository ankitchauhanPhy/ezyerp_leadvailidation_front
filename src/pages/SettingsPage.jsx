import React, { useState } from 'react';
import { Settings2, Clock, Phone, Timer, Users, FileText } from 'lucide-react';
import SectionHeader from '../Components/reusable/SectionHeader';

const SettingsPage = () => {
  const [callTiming, setCallTiming] = useState({
    startTime: '10:30 AM',
    endTime: '6:00 PM'
  });

  const [callFrequency, setCallFrequency] = useState({
    times: 3,
    enabled: false
  });

  const [timeGap, setTimeGap] = useState(30);

  const [leadTypes, setLeadTypes] = useState({
    warmLead: true,
    hotLead: true,
    unqualified: true
  });

  return (
    <div className="min-h-screen bg-[#F8F5FF] px-4">
      <div className="mx-8">
        {/* Main Settings Header */}
        <h4 className='text-3xl w-full px-4 py-4 my-2 font-bold'>Settings</h4>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Call Timing Section */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <SectionHeader
              icon={<Clock className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />}
              title="Call Timing"
            />
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Start Time</label>
                  <select
                    value={callTiming.startTime}
                    onChange={(e) => setCallTiming({...callTiming, startTime: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option>10:30 AM</option>
                    <option>9:00 AM</option>
                    <option>11:00 AM</option>
                  </select>
                </div>
                
                <div className="text-gray-500 pt-6">to</div>
                
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">End Time</label>
                  <select
                    value={callTiming.endTime}
                    onChange={(e) => setCallTiming({...callTiming, endTime: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option>6:00 PM</option>
                    <option>5:00 PM</option>
                    <option>7:00 PM</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Call Frequency Section */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <SectionHeader
              icon={<Phone className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />}
              title="Call Frequency (When not Picked Up)"
            />
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">No. of times call to made if lead not picking</span>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={callFrequency.times}
                    onChange={(e) => setCallFrequency({...callFrequency, times: parseInt(e.target.value)})}
                    className="w-16 px-2 py-1 border border-gray-300 rounded text-center focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <span className="text-sm text-gray-600">times</span>
                </div>
              </div>
            </div>
          </div>

          {/* Time Gap between calls */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <SectionHeader
              icon={<Timer className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />}
              title="Time Gap between calls (When not Picked Up)"
            />
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">At what time to initiate call if lead not picking</span>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={timeGap}
                    onChange={(e) => setTimeGap(parseInt(e.target.value))}
                    className="w-16 px-2 py-1 border border-gray-300 rounded text-center focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <span className="text-sm text-gray-600">Minutes</span>
                </div>
              </div>
            </div>
          </div>

          {/* Lead Type and Parameter */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <SectionHeader
                icon={<Users className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />}
                title="Lead Type and Parameter"
              />
              <button className="text-purple-600 text-sm font-medium hover:text-purple-700">
                + Add New
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-orange-50 rounded-xl border">
                <div>
                  <div className="font-medium text-gray-900">Warm Lead</div>
                  <div className="text-sm text-gray-600">Potential customers who has already shown some interest or engagement</div>
                </div>
                <button className="px-3 py-1 bg-orange-100 text-orange-700 rounded text-sm font-medium">
                  Warm Lead
                </button>
              </div>

              <div className="flex items-center justify-between p-3 bg-red-50 rounded-xl border">
                <div>
                  <div className="font-medium text-gray-900">Hot Lead</div>
                  <div className="text-sm text-gray-600">Highly interested potential customers who is ready — or almost ready — to make a purchase decision.</div>
                </div>
                <button className="px-3 py-1 bg-red-100 text-red-700 rounded text-sm font-medium">
                  Hot Lead
                </button>
              </div>

              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-xl border">
                <div>
                  <div className="font-medium text-gray-900">Unqualified</div>
                  <div className="text-sm text-gray-600">Shown some initial interest in your product or service, but does not meet your criteria for a potential buyer</div>
                </div>
                <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm font-medium">
                  Unqualified
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Call Script Section - Full Width */}
        <div className="mt-6 bg-white rounded-xl p-6 shadow-lg">
          <SectionHeader
            icon={<FileText className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />}
            title="Call Script"
          />
          
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-xl">
              <div className="text-sm font-medium text-gray-900 mb-2">Agent:</div>
              <p className="text-sm text-gray-700">"Hello, good morning/afternoon, this is [Your Name] calling from [Company Name]. Am I speaking with [Customer Name]?"</p>
              
              <div className="text-sm font-medium text-gray-900 mt-4 mb-2">Customer:</div>
              <p className="text-sm text-gray-700">"Yes, speaking"</p>
              
              <div className="text-sm font-medium text-gray-900 mt-4 mb-2">Agent:</div>
              <p className="text-sm text-gray-700">"Great! I'm reaching out today to let you know about a special offer we have for our valued customers. Do you have a quick minute?"</p>
              
              <div className="text-sm font-medium text-gray-900 mt-4 mb-2">Customer:</div>
              <p className="text-sm text-gray-700">"Sure, go ahead."</p>
              <p className="text-sm text-gray-500 italic">(or if they say no: "No problem! I'll follow up another time. Have a great day!")</p>
              
              <div className="text-sm font-medium text-gray-900 mt-4 mb-2">Agent:</div>
              <p className="text-sm text-gray-700">"Thank you! So currently, we're offering a limited membership discount, which can help you [benefit]. Just to confirm — are you currently using [related product/service]?"</p>
              
              <div className="text-sm font-medium text-gray-900 mt-4 mb-2">Customer:</div>
              <p className="text-sm text-gray-700">"Yes, I am" or "No, I'm not"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;