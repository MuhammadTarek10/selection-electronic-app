import { NumberContainer } from "@/components/ui/number-container";
import { examinersDummy } from "@/data/dummy/data";
import { ExaminersTable } from "./components/ExaminersTable";
import { NoticeableTable } from "./components/NoticeableTable";

const Dashboard = async () => {
  const data = {
    title: "التدريب المهني",
    value: "50",
  };

  return (
    <div id="container" className="flex flex-col gap-4">
      <div className="flex gap-4 flex-col sm:flex-row" id="header">
        <ExaminersTable props={examinersDummy} />
        <div className="h-[90vh]">
          <NumberContainer props={data} />
          <NoticeableTable props={examinersDummy} />
        </div>
      </div>
      <div className="flex flex-wrap gap-4"></div>
    </div>
  );
};
export default Dashboard;
