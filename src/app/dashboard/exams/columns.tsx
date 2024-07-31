"use client";

import { ExaminerExam } from "@/data/models";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<ExaminerExam>[] = [
  {
    accessorKey: "optical",
    header: "التتبع الضوئي",
    cell: ({ row }) => row.original.optical?.value,
  },
  {
    accessorKey: "hearing",
    header: "شدة السمع",
    cell: ({ row }) => row.original.hearing?.value,
  },
  {
    accessorKey: "back_and_legs",
    header: "الظهر والرجلين",
    cell: ({ row }) => row.original.back_and_legs?.value,
  },
  {
    accessorKey: "grip_right",
    header: "قبضة يمين",
    cell: ({ row }) => row.original.grip_right?.value,
  },
  {
    accessorKey: "grip_left",
    header: "قبضة شمال",
    cell: ({ row }) => row.original.grip_left?.value,
  },
  {
    accessorKey: "effort",
    header: "بذل الجهد",
    cell: ({ row }) => row.original.effort?.value,
  },
  {
    accessorKey: "examiner.sold_id",
    header: "الرقم العسكري",
  },
  {
    accessorKey: "examiner.name",
    header: "الاسم",
  },
  {
    id: "index",
    header: "م",
    cell: ({ row }) => row.index + 1,
  },
];
