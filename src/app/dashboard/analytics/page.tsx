import { CustomBarChart } from "@/components/BarChart";
import { examinersDummy } from "@/data/dummy/data";
import { ConvertQualificationCode } from "@/utils/converters";

interface LabelCount {
  [key: string]: any;
}

const AnalyticsPage = () => {
  const data = examinersDummy
    .map((e) => {
      return {
        label: ConvertQualificationCode(e.qualification_code, e.sold_id),
        code: e.qualification_code,
      };
    })
    .reduce((acc: { [key: string]: any }, item) => {
      if (acc[item.label]) {
        acc[item.label]++;
      } else {
        acc[item.label] = 1;
      }

      return acc;
    }, {} as LabelCount);

  return (
    <div className="flex justify-between items-center p-2 m-2">
      <div className="flex flex-col justify-center items-center gap-4 border rounded-lg p-4">
        <h2>المؤهلات</h2>
        <CustomBarChart labels={Object.keys(data)} data={Object.values(data)} />
      </div>
      <div>
        <h1>{examinersDummy.length} :العدد الكلي</h1>
      </div>
    </div>
  );
};
export default AnalyticsPage;
