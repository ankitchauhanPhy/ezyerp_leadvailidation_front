import React from 'react';
import { ChevronDown, RotateCcw } from 'lucide-react';

const SectionHeader = ({ icon, title }) => {
  return (
    <div className="flex items-center justify-between mb-3">
      {/* Left: Icon + Title */}
      <div className="flex items-center gap-2 min-w-0">
        <div className="w-7 h-7 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <h1 className="text-base font-semibold text-gray-800 truncate">
          {title}
        </h1>
      </div>

      {/* Right: Buttons */}
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-1 px-2 py-1 text-purple-600 hover:bg-purple-50 rounded-md transition-colors">
          <RotateCcw className="w-3 h-3" />
          <span className="text-xs font-medium hidden sm:inline">Reset</span>
        </button>
        <button className="flex items-center gap-1 px-2 py-1 text-gray-600 hover:bg-gray-50 rounded-md transition-colors">
          <span className="text-xs font-medium">Today</span>
          <ChevronDown className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default SectionHeader;
