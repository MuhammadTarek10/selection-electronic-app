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
      <div className="flex flex-col gap-4 md:flex-row" id="header">
        <div className="flex-1">
          <ExaminersTable props={examinersDummy} />
        </div>
        <div className="flex flex-col gap-4">
          <NumberContainer props={data} />
          <NoticeableTable props={examinersDummy} />
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        <NumberContainer props={data} />
        <NumberContainer props={data} />
        <NumberContainer props={data} />
        <NumberContainer props={data} />
      </div>
    </div>
  );
};
export default Dashboard;
