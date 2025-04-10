
import React, { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "./AppSidebar";
import AppHeader from "./AppHeader";

type AppLayoutProps = {
  children: React.ReactNode;
  onSearch?: (results: any) => void;
};

const AppLayout: React.FC<AppLayoutProps> = ({ children, onSearch }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <AppHeader 
            toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
            onSearch={onSearch} 
          />
          <main className="flex-1 p-4 md:p-6 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AppLayout;
