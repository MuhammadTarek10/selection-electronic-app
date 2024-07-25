"use client";
import Sidebar from "./components/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex w-full">
      <div className="flex flex-col size-full">{children}</div>
      <Sidebar />
    </main>
  );
};
export default DashboardLayout;
