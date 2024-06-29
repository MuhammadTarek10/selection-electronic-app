"use client";
import Sidebar from "./components/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-screen w-full overflow-hidden">
      <Sidebar />
      <div className="flex flex-col size-full">{children}</div>
    </main>
  );
};
export default DashboardLayout;
