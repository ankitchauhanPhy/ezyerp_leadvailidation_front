import React, { useState } from 'react';
import { Search, Filter, FileText, Phone, Download, Play } from "lucide-react";
import { callsData } from '../constants';
import SectionHeader from '../Components/reusable/SectionHeader';


const LeadsPage = () => {
  const [selectedMonth, setSelectedMonth] = useState('Months');
  const [searchTerm, setSearchTerm] = useState('');
  

  const filteredCalls = callsData.filter(call =>
    call.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    call.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    call.phone.includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-[#F8F5FF] px-4">
      <div className="mx-8">
        {/* Main Calls Header */}
        <h4 className='text-3xl w-full px-4 py-4 my-2 font-bold'>All Leqds</h4>
        
        <div className="space-y-6">
          {/* Calls Section */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <SectionHeader
              icon={<Phone className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />}
              title="All Leads"
            />
            
            {/* Controls Section */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
              {/* Left side - Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search with Name, Company, Contact Number"
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              {/* Right side - Controls */}
              <div className="flex items-center gap-3">
                {/* Filter Dropdown */}
                <div className="relative">
                  <select 
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
                  >
                    <option value="Months">Months</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                  </select>
                  <Filter className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                </div>
                
                {/* Reset and Today buttons */}
                <button className="text-gray-600 hover:text-gray-800 transition-colors">
                  Reset
                </button>
                <button className="text-purple-600 hover:text-purple-800 transition-colors font-medium">
                  Today
                </button>
                
                {/* Export Button */}
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                  <FileText className="w-4 h-4" />
                  Export
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-2 font-medium text-gray-700 text-sm">Name</th>
                    <th className="text-left py-3 px-2 font-medium text-gray-700 text-sm">Name</th>
                    <th className="text-left py-3 px-2 font-medium text-gray-700 text-sm">Phone Number</th>
                    <th className="text-left py-3 px-2 font-medium text-gray-700 text-sm">Company Name</th>
                    <th className="text-left py-3 px-2 font-medium text-gray-700 text-sm">Lead Logging (D&T)</th>
                    <th className="text-left py-3 px-2 font-medium text-gray-700 text-sm">First Lead Calling (D&T)</th>
                    <th className="text-left py-3 px-2 font-medium text-gray-700 text-sm">Lead Tagging</th>
                    <th className="text-left py-3 px-2 font-medium text-gray-700 text-sm">Call Summary</th>
                    <th className="text-left py-3 px-2 font-medium text-gray-700 text-sm">Transcript</th>
                    <th className="text-left py-3 px-2 font-medium text-gray-700 text-sm">Recording</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCalls.map((call) => (
                    <tr key={call.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-2 text-sm">{call.id}.</td>
                      <td className="py-3 px-2">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{call.flag}</span>
                          <span className="text-sm font-medium">{call.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-2 text-sm text-gray-600">{call.phone}</td>
                      <td className="py-3 px-2 text-sm font-medium">{call.company}</td>
                      <td className="py-3 px-2 text-sm text-gray-600">{call.leadLogging}</td>
                      <td className="py-3 px-2 text-sm text-gray-600">{call.firstLeadCalling}</td>
                      <td className="py-3 px-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${call.tagColor}`}>
                          {call.leadTagging}
                        </span>
                      </td>
                      <td className="py-3 px-2 text-sm text-gray-600">
                        {call.callSummary}
                        <button className="text-purple-600 hover:text-purple-800 ml-1">
                          ...View more
                        </button>
                      </td>
                      <td className="py-3 px-2">
                        <button className="text-purple-600 hover:text-purple-800 border border-purple-600 hover:border-purple-800 px-3 py-1 rounded text-sm transition-colors">
                          View
                        </button>
                      </td>
                      <td className="py-3 px-2">
                        <div className="flex items-center gap-2">
                          <button className="text-gray-600 hover:text-gray-800">
                            <Play className="w-4 h-4" />
                          </button>
                          <button className="text-gray-600 hover:text-gray-800">
                            <Download className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadsPage;