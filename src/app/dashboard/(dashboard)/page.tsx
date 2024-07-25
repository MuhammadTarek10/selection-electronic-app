import { examinersDummy } from "@/data/dummy/data";
import { DashboardTable } from "./components/DashboardTable";

const Dashboard = async () => {
  return (
    <div>
      <DashboardTable examiners={examinersDummy} />
    </div>
  );
};
export default Dashboard;
