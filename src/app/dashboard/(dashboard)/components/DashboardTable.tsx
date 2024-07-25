"use client";

import { DataTable } from "@/components/ui/data-table";
import { Examiner } from "@/data/models";
import { useState } from "react";
import { columns } from "../columns";

export const DashboardTable = ({ examiners }: { examiners: Examiner[] }) => {
  const [filteredExaminers, setExaminers] = useState<Examiner[]>(examiners);
  const handleOnChange = (e: string) => {
    if (!e) return setExaminers(examiners);
    const filtered = examiners.filter(
      (examiner) =>
        examiner.name?.toLowerCase().includes(e) ||
        examiner.sold_id?.toString().includes(e)
    );
    setExaminers(filtered);
  };

  return (
    <div className="flex flex-col m-4">
      <input
        type="text"
        placeholder="ابحث بالاسم أو الرقم العسكري"
        className="flex text-right bg-gray-800 p-4 mb-4 rounded-lg border-white/25"
        tabIndex={0}
        onChange={(e) => handleOnChange(e.target.value)}
      />
      <DataTable columns={columns} data={filteredExaminers} />;
    </div>
  );
  return <div>DashboardTable</div>;
};
