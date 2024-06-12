"use client";

import { Button } from "@/components/ui/button";
import { Examiner } from "@/data/models";
import { ConvertAgain, ConvertQualificationCode } from "@/utils/converters";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

const tableColumn = (key: string, header: string, cell: (row: Examiner) => React.ReactNode, sortable: boolean = true): ColumnDef<Examiner> => ({
  accessorKey: key,
  header: ({ column }) => {
    return sortable ? (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        <ArrowUpDown className="m-2 h-4 w-4" />
        {header}
      </Button>
    ) : (
      <span>{header}</span>
    );
  },
  cell: ({ row }) => cell(row.original),
});

export const columns: ColumnDef<Examiner>[] = [
  tableColumn("again", "ملحوظ", (examiner) => ConvertAgain(examiner.again)),
  tableColumn("mohafza_code", "المحافظة", (examiner) => examiner.mohafza_code),
  tableColumn("qualification_code", "المؤهل", (examiner) => ConvertQualificationCode(examiner.qualification_code)),
  tableColumn("sold_id", "الرقم العسكري", (examiner) => examiner.sold_id),
  tableColumn("name", "الاسم", (examiner) => examiner.name),
];
