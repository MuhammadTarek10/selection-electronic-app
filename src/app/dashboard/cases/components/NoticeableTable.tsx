"use client";
import { DataTable } from "@/components/ui/data-table";
import { Examiner } from "@/data/models";
import { columns } from "./NoticeableTableColumns";
import { NoticedDoughnutChart } from "./NoticedDoughnutChart";

export const NoticeableTable = ({ examiners }: { examiners: Examiner[] }) => {
  const noticed = examiners.filter((examiner) => examiner.again == true);

  return (
    <div className="flex flex-col p-4">
      <div className="flex flex-col">
        <h1 className="text-4xl text-right m-4">الملحوظين: {noticed.length}</h1>
        <div className="flex gap-4 flex-row max-md:flex-col">
          <div className="total-noticed-chart">
            <NoticedDoughnutChart
              noticed={noticed.length}
              examiners={examiners.length}
            />
          </div>
          {noticed.length > 0 ? (
            <DataTable
              columns={columns}
              data={noticed}
              divClassname="max-h-[40vh]"
            />
          ) : (
            <h1 className="text-2xl text-center m-4">لا يوجد ملحوظين</h1>
          )}
        </div>
      </div>
    </div>
  );
};
