"use client";
import Sidebar from "@/components/ui/sidebar";
import { useState } from "react";

const DashboardLayout = (props: { children: React.ReactNode }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex min-h-screen overflow-hidden">
      <div className="flex">
        <Sidebar show={show} setter={setShow} />
      </div>
      <div className="flex flex-col my-8 mx-4 flex-grow w-screen md:w-full min-h-screen">
        {props.children}
      </div>
    </div>
  );
};
export default DashboardLayout;
