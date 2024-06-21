import { examinersDummy } from "@/data/dummy/data";
import { NoticeableTable } from "./components/NoticeableTable";
const CasesPage = () => {
  return (
    <div>
      <NoticeableTable props={examinersDummy} />
    </div>
  );
};
export default CasesPage;
