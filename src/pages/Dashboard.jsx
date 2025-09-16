import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Home,
  Phone,
  Target,
  Settings,
  HelpCircle,
  CircleHelp,
} from "lucide-react";
import HomePage from "../pages/HomePage";
import Setting from "./SettingsPage";

// import Calls from "../pages/Calls";
import ezylogo from "../assets/ezylogo.svg";
import ezycirclelogo from "../assets/circularLogo.png";
import SettingsPage from "./SettingsPage";
import FAQPage from "./FAQPage";
import CallsPage from "./CallsPage";
import LeadsPage from "./LeadsPage";
import { MdOutlineDashboard } from "react-icons/md";

// Main Dashboard Component
const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("Home");
  const [isMobile, setIsMobile] = useState(false);

  // Navigation items
  const navItems = [
    { text: "Dashboard", icon: <MdOutlineDashboard size={20} />, page: "Home" },
    { text: "Calls", icon: <Phone size={20} />, page: "Calls" },
    { text: "Leads", icon: <Target size={20} />, page: "Leads" },
    { text: "Settings", icon: <Settings size={20} />, page: "Settings" },
  ];

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // Auto-collapse on mobile
      if (mobile) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true); // Keep open on desktop by default
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleNavigation = (page) => {
    setCurrentPage(page);
    if (isMobile) {
      setMobileMenuOpen(false);
    }
  };

  const toggleSidebar = () => {
    if (!isMobile) {
      setMobileMenuOpen(!mobileMenuOpen);
    } else {
      setSidebarOpen(!sidebarOpen);
    }
  };
  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <HomePage />;
      case "Calls":
        return <CallsPage />;
      case "Leads":
        return <LeadsPage />;
      case "Settings":
        return <SettingsPage />;
      case "FAQ":
        return <FAQPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex h-screen relative">
      {/* Desktop Sidebar - Fixed Position */}
      <div
        className={`hidden md:flex flex-col fixed left-0 top-0 h-full transition-all duration-300 ease-in-out z-40 ${
          sidebarOpen ? "w-64" : "w-16"
        } bg-[#5D17EA] text-white shadow-xl`}
      >
        {/* Logo/Header Section */}
        <div className="p-4 border-b border-purple-500/30">
          <div className="flex items-center justify-between">
            {sidebarOpen ? (
              <>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div>
                    <img
                      src={ezycirclelogo}
                      alt="Cyboard School"
                      className="py-2 px-2 rounded-md"
                    />
                  </div>
                  <span className="text-sm">Powered By</span>
                  <span className="text-md font-bold">Pharynx AI</span>
                </div>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="p-1.5 hover:bg-white/30 rounded-lg transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
              </>
            ) : (
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-1.5 hover:bg-white/30 rounded-lg transition-colors mx-auto"
              >
                <ChevronRight size={20} />
              </button>
            )}
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 py-4 overflow-y-auto">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(item.page)}
              className={`w-full flex items-center transition-all duration-200 ${
                sidebarOpen ? "px-4 py-3" : "px-3 py-3 justify-center"
              } hover:bg-white/20 ${
                currentPage === item.page
                  ? "bg-white/40 border-l-4 border-white shadow-md"
                  : "border-l-4 border-transparent"
              }`}
            >
              <span className={`${sidebarOpen ? "mr-3" : ""}`}>
                {item.icon}
              </span>
              {sidebarOpen && (
                <span className="text-sm font-medium">{item.text}</span>
              )}
            </button>
          ))}
        </nav>

        {/* Footer */}
        {sidebarOpen && (
          <div className="p-4 border-t border-[#F8F5FF]/30">
            <button
              onClick={() => handleNavigation("FAQ")}
              className="flex items-center gap-2 text-xs text-[#F8F5FF]"
            >
              <CircleHelp className="w-4 h-4" />
              Help & Support
            </button>
          </div>
        )}
      </div>
      {/* Mobile Sidebar Overlay */}
      {!mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          >
            {" "}
          </div>
          <div className="relative w-72 bg-[#5D17EA] text-white shadow-2xl">
            <div className="flex flex-col h-full">
              {/* Mobile Header */}
              <div className="p-4 border-b border-white/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md">
                      <span className="text-white font-bold text-lg">EZ</span>
                    </div>
                    <div>
                      <div className="font-bold text-white">EAZY ERP</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="p-2 hover:bg-white/30 rounded-lg transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex-1 py-4 overflow-y-auto">
                {navItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleNavigation(item.page)}
                    className={`w-full flex items-center px-4 py-3 hover:bg-white/30 transition-colors ${
                      currentPage === item.page
                        ? "bg-white/40 border-l-4 border-white shadow-md"
                        : "border-l-4 border-transparent"
                    }`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    <span className="text-sm font-medium">{item.text}</span>
                  </button>
                ))}
              </nav>

              {/* Mobile Footer */}
              <div className="p-4 border-t border-white/30">
                <button
                  onClick={() => handleNavigation("FAQ")}
                  className="flex items-center justify-center gap-2 text-xs text-white"
                >
                  <CircleHelp className="w-4 h-4" />
                  Help & Support
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area - Adjusted margin based on sidebar state */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${
          !isMobile ? (sidebarOpen ? "md:ml-64" : "md:ml-16") : ""
        }`}
      >
        {/* Top Navbar */}
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center">
              <button
                onClick={toggleSidebar}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Menu size={24} className="text-[#5D17EA]" />
              </button>
              <img
                src={ezylogo}
                alt="Cyboard School"
                className="w-32 h-14 py-2 px-2 bg-white/60 rounded-md"
              />
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-[#5D17EA] rounded-full flex items-center justify-center text-white font-bold shadow-md">
                HH
              </div>
            </div>
          </div>
        </header>

        {/* Page Content - Scrollable */}
        <main className="bg-[#F8F5FF]">{renderPage()}</main>
      </div>
    </div>
  );
};

export default Dashboard;
