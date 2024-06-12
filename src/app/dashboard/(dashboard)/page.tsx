import { NumberContainer } from "@/components/ui/number-container";
import { ExaminersTable } from "./components/ExaminersTable";
import { examinersDummy } from "@/data/dummy/data";

const Dashboard = async () => {
  const data = {
    title: "التدريب المهني",
    value: "50",
  };

  return (
    <div id="container">
      <div className="flex gap-12 justify-end mx-4" id="header">
        <div className="flex-1">
          <ExaminersTable props={examinersDummy} />
        </div>
        <div className="flex flex-col gap-4">
          <NumberContainer props={data} />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
