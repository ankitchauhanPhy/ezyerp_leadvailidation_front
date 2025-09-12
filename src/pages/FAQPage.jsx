import React, { useState } from 'react';
import { HelpCircle, Mail, Phone, ChevronDown, ChevronUp } from 'lucide-react';
import SectionHeader from '../Components/reusable/SectionHeader';
import {faqItems} from "../constants";

const FAQPage = () => {
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleExpanded = (index) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-[#F8F5FF] px-4">
      <div className="mx-8">
        {/* Main Settings Header */}
        <h4 className='text-3xl w-full px-4 py-4 my-2 font-bold'>FAQ's</h4>

        <div className="space-y-6">
          {/* FAQ Section */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <SectionHeader
              icon={<HelpCircle className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />}
              title="FAQ's"
            />
            
            <div className="space-y-3">
              {faqItems.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleExpanded(index)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-gray-900">{item.question}</span>
                    {expandedItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  
                  {expandedItems.includes(index) && (
                    <div className="px-4 pb-4 border-t border-gray-100">
                      <p className="text-gray-600 mt-2">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <SectionHeader
              icon={<Mail className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />}
              title="Contact Us"
            />
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <Mail className="w-5 h-5 text-gray-500" />
                <div>
                  <div className="text-sm font-medium text-gray-700">Email</div>
                  <div className="text-gray-900">helpdesk@gmail.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <Phone className="w-5 h-5 text-gray-500" />
                <div>
                  <div className="text-sm font-medium text-gray-700">Phone</div>
                  <div className="text-gray-900">+91 98765 12345</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;