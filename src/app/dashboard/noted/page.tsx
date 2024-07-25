import { DoughnutChart } from "@/components/DoughnutChart";
import { DataTable } from "@/components/ui/data-table";
import { examinersDummy } from "@/data/dummy/data";
import { columns } from "./columns";
const NotedPage = () => {
  const noted = examinersDummy
    .map((examiner) => Number(examiner.again))
    .reduce((a, b) => a + b, 0);

  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex w-full my-2 p-4 items-center gap-4 justify-between">
        <div className="max-w-[10vw]">
          <DoughnutChart
            labels={["ملحوظ", "غير ملحوظ"]}
            data={[noted, examinersDummy.length - noted]}
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold">{noted} :الملحوظين</h2>
        </div>
      </div>

      <div className="m-4">
        <DataTable
          columns={columns}
          data={examinersDummy.filter((examiner) => examiner.again == true)}
        />
      </div>
    </div>
  );
};
export default NotedPage;
