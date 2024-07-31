"use client";

import SortableButton from "@/components/SortableButton";
import { ExaminerQuestion } from "@/data/models";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<ExaminerQuestion>[] = [
  {
    accessorKey: "number_of_questions",
    header: ({ column }) => (
      <SortableButton title="عدد الأسئلة" column={column} />
    ),
  },
  {
    accessorKey: "sold_id",
  },
  {
    accessorKey: "sold_id",
    header: "الرقم العسكري",
  },
  {
    accessorKey: "name",
    header: "الاسم",
  },
];
