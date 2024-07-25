import StatsCard from "@/components/StatsCard";
import { DataTable } from "@/components/ui/data-table";
import { casesDummy } from "@/data/dummy/data";
import { columns } from "./columns";

const CasesPage = () => {
  return (
    <div className="flex flex-col w-full h-full gap-4 m-2">
      <div className="flex p-2 m-2 gap-4">
        <StatsCard count={2} label="مست نفسي" />
        <StatsCard count={2} label="مست طبي" />
      </div>

      <div>
        <DataTable columns={columns} data={casesDummy} />
      </div>
    </div>
  );
};
export default CasesPage;
