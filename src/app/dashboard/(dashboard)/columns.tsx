"use client";

import { Examiner } from "@/data/models";
import { ConvertQualificationCode } from "@/utils/converters";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Examiner>[] = [
  {
    accessorKey: "qualification_code",
    header: "المؤهل",
    cell: ({ row }) =>
      ConvertQualificationCode(row.original.qualification_code),
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
