import { Container } from "@/components/ui/Container";

const Dashboard = async () => {
  const data = {
    title: "التدريب المهني",
    value: "50",
  };

  return (
    <div className="flex gap-4 justify-end">
      <div className="flex-1">
        <Container props={data} />
      </div>
      <div className="flex-2">
        <Container props={data} />
      </div>
    </div>
  );
};
export default Dashboard;
