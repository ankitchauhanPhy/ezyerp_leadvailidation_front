import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { MdPhone, MdAccessTime, MdAvTimer, MdOutlineSupportAgent } from 'react-icons/md';
import { LiaChartBarSolid } from "react-icons/lia";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaRegArrowAltCircleUp } from 'react-icons/fa';

const StatCard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));

  // Container styles based on screen size
  const containerClass = isMobile 
    ? "flex px-4 overflow-x-auto scrollbar-hide"
    : isTablet 
    ? "flex flex-wrap gap-2 px-4"
    : "flex px-4";

  // Card width for tablet
  const tabletCardStyle = isTablet ? { width: "calc(50% - 4px)" } : {};
  return (
    <>
      <style jsx>{`
        .scrollbar-hide {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE/Edge */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none; /* Chrome/Safari */
        }
      `}</style>
      
      <div className={containerClass}>
        <div className="min-w-[220px] gap-4 bg-white rounded-l-xl shadow p-4 flex items-center border" style={tabletCardStyle}>
          <MdPhone className="text-blue-600 text-3xl" />
          <div>
            <div className="flex gap-2 items-center text-black font-bold text-sm">
              TOTAL CALLS
              <FaRegArrowAltCircleUp
                        size={16}
                        className="text-green-500"
                      />
              </div>
            <div className="text-xl text-gray-600 font-bold">2358</div>
          </div>
        </div>

        <div className={`min-w-[220px] bg-white gap-4 shadow p-4 flex items-center border ${isTablet ? 'rounded-tr-xl' : ''}`} style={tabletCardStyle}>
          <MdAccessTime className="text-green-600 text-3xl" />
          <div>
            <div className="flex gap-2 items-center text-black font-bold text-sm">TOTAL CALLS DURATION
              <FaRegArrowAltCircleUp
                        size={16}
                        className="text-green-500"
                      />
            </div>
            <div className="text-xl text-gray-600 font-bold">4527h</div>
          </div>
        </div>

        <div className="min-w-[220px] bg-white gap-4 shadow p-4 flex items-center border" style={tabletCardStyle}>
          <MdAvTimer className="text-orange-600 text-3xl" />
          <div>
            <div className="flex gap-2 items-center text-black font-bold text-sm">AVG. CALL DURATION
              <FaRegArrowAltCircleUp
                        size={16}
                        className="text-green-500"
                      />
            </div>
            <div className="text-xl text-gray-600 font-bold">7m 49s</div>
          </div>
        </div>

        <div className="min-w-[220px] bg-white gap-4 shadow p-4 flex items-center border" style={tabletCardStyle}>
          <MdOutlineSupportAgent className="text-green-500 text-3xl" />
          <div>
            <div className="flex gap-2 items-center text-black font-bold text-sm">AVG. CALL/AGENT
              <FaRegArrowAltCircleUp
                        size={16}
                        className="text-green-500"
                      />
            </div>
            <div className="text-xl text-gray-600 font-bold">37</div>
          </div>
        </div>

        <div className="min-w-[220px] bg-white gap-4 shadow p-4 flex items-center border" style={tabletCardStyle}>
          <LiaChartBarSolid className="text-red-500 text-3xl" />
          <div>
            <div className="flex gap-2 items-center text-black font-bold text-sm">TOTAL HOT LEAD
              <FaRegArrowAltCircleUp
                        size={16}
                        className="text-green-500"
                      />
            </div>
            <div className="text-xl text-gray-600 font-bold">235</div>
          </div>
        </div>

        <div className={`min-w-[220px] bg-white gap-4 shadow p-4 flex items-center border ${isTablet ? 'rounded-bl-xl' : ''}`} style={tabletCardStyle}>
          <LiaChartBarSolid className="text-yellow-500 text-3xl" />
          <div>
            <div className="flex gap-2 items-center text-black font-bold text-sm">TOTAL WARM LEAD
              <FaRegArrowAltCircleUp
                        size={16}
                        className="text-green-500"
                      />
            </div>
            <div className="text-xl text-gray-600 font-bold">664</div>
          </div>
        </div>

        <div className={`min-w-[220px] bg-white gap-4 shadow p-4 flex items-center border ${isMobile ? 'rounded-r-xl' : isTablet ? 'rounded-br-xl' : 'rounded-r-xl'}`} style={tabletCardStyle}>
          <LiaChartBarSolid className="text-cyan-600 text-3xl" />
          <div>
            <div className="flex gap-2 items-center text-black font-bold text-sm">TOTAL COLD LEAD
              <FaRegArrowAltCircleUp
                        size={16}
                        className="text-green-500"
                      />
            </div>
            <div className="text-xl text-gray-600 font-bold">442</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatCard;