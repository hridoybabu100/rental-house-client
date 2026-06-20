"use client";

import DashboardSideBar from "@/components/DashBoardSideBar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#080c16] text-white">
      <div className="flex">
        {/* Sidebar */}
        <DashboardSideBar />

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;