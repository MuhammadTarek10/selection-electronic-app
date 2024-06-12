import { DataTable } from "@/components/ui/data-table";
import { Examiner } from "@/data/models";
import { columns } from "./ExaminerTableColumns";

type ExaminerTableProps = {
  examiners: Examiner[];
};

type IProps = {
  props: ExaminerTableProps;
};

export const ExaminersTable = ({ props }: IProps) => {
  const { examiners } = props;

  return (
    <div className="flex-1 border-2 rounded-lg border-white/25">
      <DataTable columns={columns} data={examiners} divClassname="max-h-[600px]"/>
    </div>
  );
};
