import { examinersDummy } from "@/data/dummy/data";
import { ExaminersTable } from "./components/ExaminersTable";

const Dashboard = async () => {
  const data = {
    title: "التدريب المهني",
    value: "50",
  };

  return <ExaminersTable props={examinersDummy} />;
};
export default Dashboard;
