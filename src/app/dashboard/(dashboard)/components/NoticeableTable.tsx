import { DataTable } from "@/components/ui/data-table";
import { Examiner } from "@/data/models";
import { columns } from "./NoticeableTableColumns";

type ExaminerTableProps = {
  examiners: Examiner[];
};

type IProps = {
  props: ExaminerTableProps;
};

export const NoticeableTable = ({ props }: IProps) => {
  const examiners = props.examiners.filter(
    (examiner) => examiner.again == true
  );

  return (
    <div>
      <h1 className="text-4xl text-right m-4">الملحوظين: {examiners.length}</h1>
      {examiners.length > 0 ? (
        <DataTable columns={columns} data={examiners} />
      ) : (
        <h1 className="text-2xl text-center m-4">لا يوجد ملحوظين</h1>
      )}
    </div>
  );
};
