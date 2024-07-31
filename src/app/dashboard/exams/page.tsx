import { DataTable } from "@/components/ui/data-table";
import { examinersExamDummy } from "@/data/dummy/data";
import { columns } from "./columns";

const ExamsPage = () => {
  return (
    <div className="m-2">
      <DataTable data={examinersExamDummy} columns={columns} />
    </div>
  );
};
export default ExamsPage;
