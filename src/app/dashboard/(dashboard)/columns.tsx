"use client";

import SortableButton from "@/components/SortableButton";
import { Examiner } from "@/data/models";
import { ConvertQualificationCode } from "@/utils/converters";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Examiner>[] = [
  {
    accessorKey: "qualification_code",
    header: ({ column }) => <SortableButton title="المؤهل" column={column} />,
    cell: ({ row }) =>
      ConvertQualificationCode(
        row.original.qualification_code,
        row.original.sold_id!
      ),
  },
  {
    accessorKey: "national_id",
    header: "الرقم القومي",
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
