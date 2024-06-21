import { NumberContainer } from "@/components/ui/number-container";

const AnalyticsPage = () => {
  const data = {
    title: "التدريب المهني",
    value: "20",
  };
  return (
    <div>
      <NumberContainer props={data} />
    </div>
  );
};
export default AnalyticsPage;
