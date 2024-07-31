import { DataTable } from "@/components/ui/data-table";
import { questionsDummy } from "@/data/dummy/data";
import { columns } from "./columns";

const QuestionsPage = () => {
  return (
    <div className="m-2">
      <DataTable data={questionsDummy} columns={columns} />
    </div>
  );
};
export default QuestionsPage;
