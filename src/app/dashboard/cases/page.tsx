import { examinersDummy } from "@/data/dummy/data";
import { NoticeableTable } from "./components/NoticeableTable";
const CasesPage = () => {
  return (
    <div className="flex flex-col">
      <NoticeableTable examiners={examinersDummy} />
    </div>
  );
};
export default CasesPage;
